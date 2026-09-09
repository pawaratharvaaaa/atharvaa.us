/**
 * Retro Snake Arcade Game Module
 * Playable canvas game triggered by Konami code (↑↑↓↓←→←→BA) or palette :snake command.
 */
import { playBlip, playSuccess, playGameOver } from './audio.js';

export function initSnake() {
  const modal = document.getElementById('snakeModal');
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const scoreDisplay = document.getElementById('snakeScore');

  let snakeInterval = null;
  let snake = [{ x: 9, y: 9 }, { x: 8, y: 9 }];
  let food = { x: 4, y: 4 };
  let dx = 1, dy = 0;
  let score = 0;

  function placeFood() {
    food = {
      x: Math.floor(Math.random() * 18),
      y: Math.floor(Math.random() * 18)
    };
  }

  function step() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Wrap-around borders
    if (head.x < 0) head.x = 17;
    if (head.x >= 18) head.x = 0;
    if (head.y < 0) head.y = 17;
    if (head.y >= 18) head.y = 0;

    // Self collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      clearInterval(snakeInterval);
      playGameOver();
      alert('Game Over! Your Score: ' + score);
      spawnSnake();
      return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score += 10;
      scoreDisplay.textContent = 'SCORE: ' + score;
      playSuccess();
      placeFood();
    } else {
      snake.pop();
    }

    // Render Canvas
    ctx.fillStyle = '#15130f';
    ctx.fillRect(0, 0, 360, 360);

    // Food
    ctx.fillStyle = '#ff5a3d';
    ctx.fillRect(food.x * 20 + 2, food.y * 20 + 2, 16, 16);

    // Snake
    snake.forEach((s, idx) => {
      ctx.fillStyle = idx === 0 ? '#ece6d8' : '#7fb069';
      ctx.fillRect(s.x * 20 + 2, s.y * 20 + 2, 16, 16);
    });
  }

  function spawnSnake() {
    modal.classList.add('open');
    snake = [{ x: 9, y: 9 }, { x: 8, y: 9 }];
    dx = 1; dy = 0;
    score = 0;
    scoreDisplay.textContent = 'SCORE: 0';
    placeFood();

    if (snakeInterval) clearInterval(snakeInterval);
    snakeInterval = setInterval(step, 110);
    playSuccess();
  }

  function closeSnake() {
    modal.classList.remove('open');
    if (snakeInterval) clearInterval(snakeInterval);
  }

  window.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if ((e.key === 'ArrowUp' || e.key === 'w') && dy === 0) { dx = 0; dy = -1; playBlip(620, 0.02); e.preventDefault(); }
    if ((e.key === 'ArrowDown' || e.key === 's') && dy === 0) { dx = 0; dy = 1; playBlip(520, 0.02); e.preventDefault(); }
    if ((e.key === 'ArrowLeft' || e.key === 'a') && dx === 0) { dx = -1; dy = 0; playBlip(560, 0.02); e.preventDefault(); }
    if ((e.key === 'ArrowRight' || e.key === 'd') && dx === 0) { dx = 1; dy = 0; playBlip(580, 0.02); e.preventDefault(); }
    if (e.key === 'Escape') closeSnake();
  });

  return { spawnSnake, closeSnake };
}

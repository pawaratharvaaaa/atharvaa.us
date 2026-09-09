import React, { useEffect, useRef, useState } from 'react';
import { playArcadeBeep, playArcadeDie } from '../utils/audio';

export function SnakeModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const gridSize = 18;
    const tileCount = 20; // 360 / 18 = 20 tiles
    let snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    let dx = 1;
    let dy = 0;
    let food = { x: 15, y: 10 };
    let currentScore = 0;
    setScore(0);
    setIsGameOver(false);

    function spawnFood() {
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    }

    function gameStep() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        handleGameOver();
        return;
      }

      // Self collision
      for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          handleGameOver();
          return;
        }
      }

      snake.unshift(head);

      // Eat food
      if (head.x === food.x && head.y === food.y) {
        currentScore += 10;
        setScore(currentScore);
        playArcadeBeep();
        spawnFood();
      } else {
        snake.pop();
      }

      // Render
      ctx.fillStyle = '#15130f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid rules
      ctx.strokeStyle = '#22201b';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Render Food
      ctx.fillStyle = '#ff5a3d';
      ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);

      // Render Snake
      snake.forEach((seg, idx) => {
        ctx.fillStyle = idx === 0 ? '#ece6d8' : '#7fb069';
        ctx.fillRect(seg.x * gridSize + 1, seg.y * gridSize + 1, gridSize - 2, gridSize - 2);
      });
    }

    function handleGameOver() {
      clearInterval(gameLoop);
      setIsGameOver(true);
      playArcadeDie();
    }

    const gameLoop = setInterval(gameStep, 110);

    const handleKeyDown = (e) => {
      const k = e.key.toLowerCase();
      if ((k === 'arrowup' || k === 'w') && dy === 0) {
        dx = 0;
        dy = -1;
      } else if ((k === 'arrowdown' || k === 's') && dy === 0) {
        dx = 0;
        dy = 1;
      } else if ((k === 'arrowleft' || k === 'a') && dx === 0) {
        dx = -1;
        dy = 0;
      } else if ((k === 'arrowright' || k === 'd') && dx === 0) {
        dx = 1;
        dy = 0;
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="snake-modal open" onClick={onClose}>
      <div className="snake-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--accent)', fontWeight: 700 }}>
            🐍 RETRO SNAKE ARCADE
          </span>
          <span className="mono" style={{ color: 'var(--ink)' }}>
            SCORE: {score}
          </span>
          <button
            type="button"
            className="mono"
            onClick={onClose}
            style={{ color: 'var(--muted)', fontSize: 'var(--fs-xs)', background: 'transparent', border: 0 }}
          >
            [ESC] CLOSE
          </button>
        </div>

        <canvas ref={canvasRef} width="360" height="360" id="snakeCanvas"></canvas>

        {isGameOver && (
          <div className="mono" style={{ color: 'var(--err)', fontSize: 'var(--fs-xs)', fontWeight: 700 }}>
            GAME OVER! Press ESC to exit.
          </div>
        )}

        <div className="mono" style={{ fontSize: 'var(--fs-xxs)', color: 'var(--muted)' }}>
          Use Arrow Keys or W / A / S / D to control snake
        </div>
      </div>
    </div>
  );
}

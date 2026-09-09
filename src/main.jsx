import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// Import modular CSS stylesheets
import '../css/tokens.css';
import '../css/layout.css';
import '../css/work.css';
import '../css/tmux.css';
import '../css/palette.css';
import '../css/snake.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

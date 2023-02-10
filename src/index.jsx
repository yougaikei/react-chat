import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import './index.scss';
import App from './App';
import theme from './theme';

const rootEle = document.getElementById('root');
const root = createRoot(rootEle);

root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);

// 禁止用户右键Menu
document.oncontextmenu = () => false;
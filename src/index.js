import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { ThemeContexProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContexProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContexProvider>

  </React.StrictMode>
);
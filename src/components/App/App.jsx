import React from "react";
import { useContext } from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import { ThemeContext } from '../../context/ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`main-container ${theme}-theme`}>
      <section className="section insert-section">
        <span className={`insert-section__heading insert-section__heading_${theme}-theme`}>Insert Row</span>
        <div className={`section__wrapper section__wrapper_${theme}-theme`}>
          <Form />
          <div className={`line line_${theme}-theme`}></div>
          <div className="controls">
            <div className="theme-buttons">
              <button onClick={toggleTheme} className="toggle-button">
                Mode
              </button>
            </div>
            <button type="submit" className={`base-button base-button_${theme}-theme`}>Delete</button>
          </div>
        </div>
      </section>
      <section className="section table-section">
        <div className={`section__wrapper section__wrapper_${theme}-theme`}>
          <Table />
        </div>
      </section>
    </main>
  );
}

export default App;

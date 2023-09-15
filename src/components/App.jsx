import '../styles/App.css';
import { useEffect, useState, useContext } from 'react';
import TableRow from './TableRow';
import Table from './Table';

import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function App() {

  //контекст
  const { users, formValues, initialValues, handleSubmit, handleChange } = useContext(UserContext);

  //для компонента с кнопкой
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`${theme}-theme`}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={initialValues.name} onChange={handleChange} />
        <input type="number" name="age" value={initialValues.age} onChange={handleChange} />
        <select name="subscription" id="" value={initialValues.subscription} onChange={handleChange}>
          <option value='Subscribed'>Subscribed</option>
          <option value='Not Subscribed'>Not Subscribed</option>
          <option value='Other'>Other</option>
        </select>
        <input type="checkbox" name="employment" onChange={handleChange} checked={initialValues.employment === 'Employed'} />
        <button type="submit">Insert</button>
      </form>

      <div className="theme-buttons">
        <button onClick={toggleTheme} className="toggle-button">
          Mode
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Employment</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, index) => (
              <TableRow
                key={index} {...item}
              />
            ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;

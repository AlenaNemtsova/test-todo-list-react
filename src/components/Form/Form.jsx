import React from "react";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';
import './Form.css';

function Form() {
    const { theme } = useContext(ThemeContext);
    const { initialValues, handleSubmit, handleChange } = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="input-name" className="input-label">Name</label>
            <input type="text" name="name" value={initialValues.name} id="input-name" className={`form__input form__input_${theme}-theme`} placeholder="Name" onChange={handleChange} />

            <label htmlFor="input-age" className="input-label">Age</label>
            <input type="number" name="age" value={initialValues.age} id="input-age" min={18} max={100} className={`form__input form__input_${theme}-theme`} placeholder="Age" onChange={handleChange} />

            <select name="subscription" value={initialValues.subscription} className={`form__input form__input_${theme}-theme`} onChange={handleChange}>
                <option value='Subscribed'>Subscribed</option>
                <option value='Not Subscribed'>Not Subscribed</option>
                <option value='Other'>Other</option>
            </select>
            <label className="checkbox-wrapper">
                <input type="checkbox" name="employment" onChange={handleChange} id="input-employment" checked={initialValues.employment === 'Employed'} />
                <span class={`checkmark checkmark_${theme}-theme`}></span> Employed
            </label>
            <button type="submit" className={`base-button base-button_${theme}-theme`}>Insert</button>
        </form>
    )
}

export default Form;
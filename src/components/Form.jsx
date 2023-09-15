import React from "react";

function Form() {
    return (
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
        </form>)

}

export default Form;
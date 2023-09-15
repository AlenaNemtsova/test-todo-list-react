import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState([]);

    const [initialValues, setInitialValues] = useState({
        name: '',
        age: '',
        subscription: 'Subscribed',
        employment: 'Unemployed',
    });

    const handleChange = (e) => {
        let value = e.target.type === 'checkbox' ? (e.target.checked ? 'Employed' : 'Unemployed') : e.target.value;
        setInitialValues({ ...initialValues, [e.target.name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    };

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers)
            setUsers(savedUsers);
    }, [users]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(formValues));
    }, [formValues]);


    return (
        <UserContext.Provider value={{ users, formValues, initialValues, handleSubmit, handleChange }}>
            {children}
        </UserContext.Provider>
    );
}
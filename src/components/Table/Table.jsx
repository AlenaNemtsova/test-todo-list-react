import React from "react";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';
import './Table.css';

function Table() {
    const { users } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div class="table-fix-head">
            <table className="table">
                <thead className={`table__head table__head_${theme}-theme`}>
                    <tr>
                        <th className="table__head-item">Name</th>
                        <th className="table__head-item">Age</th>
                        <th className="table__head-item">Subscription</th>
                        <th className="table__head-item">Employment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index} className="table__row">
                                <td className="table__item">
                                    {user.name}
                                </td>
                                <td className="table__item">
                                    {user.age}
                                </td>
                                <td className="table__item">
                                    {user.subscription}
                                </td>
                                <td className="table__item">
                                    {user.employment}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
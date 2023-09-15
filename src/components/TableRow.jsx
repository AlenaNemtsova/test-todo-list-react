import React from "react";

function TableRow(props) {
    const { id, name, age, subscription, employment } = props;
    return (
        <tr id={id}>
            <td>
                {name}
            </td>
            <td>
                {age}
            </td>
            <td>
                {subscription}
            </td>
            <td>
                {employment}
            </td>

        </tr>
    )
}

export default TableRow;
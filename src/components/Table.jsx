import React from "react";
import TableRow from "./TableRow";

function Table() {

    return (
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
                {/* {
                    data.map((item) => (
                        <TableRow
                            key={item.id} {...item}

                        />
                    ))} */}
            </tbody>
        </table>
    )

}

export default Table;
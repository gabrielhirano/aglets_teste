import React from "react";
import Item from "./Item";

function List() {
    return (
    <table>
        <thead>
            <tr className="lineTitle">
                <th>Pedido</th>
                <th>Status</th>
                <th>Data</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <Item></Item>
        </tbody>
        <tfoot>
            <tr className="lineTotal">
                <th>Total</th>
            </tr>
        </tfoot>

    </table>
    );
}

export default List;

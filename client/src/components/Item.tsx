import React from "react";
import ModalOwn from './ModalOwn';

interface IPedido{
    orderId: string;
    statusDescription: string
    creationDate: string;
    value: number;
}

interface Props{
    item: IPedido;
}

const Item: React.FC<Props> = ({ item }) => {
    return (
        <>
            <td className="Item pedido">{item.orderId}</td>
            <td className="Item">{item.statusDescription}</td>
            <td className="Item">{item.creationDate}</td>
            <td className="Item">{item.value}</td>
        </>

    )

}
export default Item;
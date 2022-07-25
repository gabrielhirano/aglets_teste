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
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

const Item: React.FC<Props> = ({ item, handleOpenModal}) => {
    return (
        <>
            <tr>
                <td className="Item pedido" onClick={ (row)=> console.log(row.target.value) }>{item.orderId}</td>
                <td className="Item">{item.statusDescription}</td>
                <td className="Item">{item.creationDate}</td>
                <td className="Item">{item.value}</td>
            </tr>
        </>
    )

}
export default Item;
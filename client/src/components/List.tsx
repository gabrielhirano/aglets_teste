
import React, { useEffect, useState } from "react";
import ReactModal  from 'react-modal';
import api from '../services/api';
import Item from "./Item";
import ModalOwn from "./ModalOwn"

// ReactModal.setAppElement('#app')

interface IPedido{
    orderId: string;
    statusDescription: string
    creationDate: string;
    value: number;
}
function List() {
    const [itens, setItens] = useState<IPedido[]>([]);

    useEffect(() => {
        api.get('/data').then(response => {
            setItens(response.data)
        })
    }, []);
    // console.log('itens')
    // console.log(itens)
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(true);
    }
    function handleCloseModal(){
        setIsOpen(false);
    }
    return (
    <>
    <table>
        <thead>
            <tr className="lineTitle">
                <th>Pedido</th>
                <th>Status</th>
                <th>Data</th>
                <th>Valor total do pedido</th>
            </tr>
        </thead>
        <tbody>
            { itens.map(item => <Item key={item.orderId} item={item} handleCloseModal={handleCloseModal} handleOpenModal={ handleOpenModal }/>) }
        </tbody>
        <tfoot>
            <tr className="lineTotal">
                <th/>
                <th/>
                <th>Total</th>
                <th>R$ { }</th>
            </tr>
        </tfoot>

    </table>
    <ModalOwn
    modalIsOpen={modalIsOpen}
    handleCloseModal={handleCloseModal}
    />


    {/* <ReactModal 
    isOpen={modalIsOpen}
    onRequestClose={handleCloseModal}
    className="Modal"
    >   
    <button onClick={handleCloseModal}>x</button>
        <div className="area-profile">
            <h2>Perfil</h2>
            <table className="table-profile">
                <tr>
                    <th>
                        Nome
                    </th>
                    <td>
                        fulano
                    </td>
                </tr>
                <tr>
                    <th>
                        Documento
                    </th>
                    <td>
                        CPF
                    </td>
                    <td>
                        000-111-222-34
                    </td>
                </tr>
                <tr>
                    <th>
                        Telefone
                    </th>
                    <td>
                        31-8888-888
                    </td>
                </tr>
                <tr>
                    <th>
                        E-mail
                    </th>
                    <td colSpan={2}>
                        pessoa@gmail.com
                    </td>
                </tr>
            </table>
        </div>
        <div className="area-adress">
            <h2>Local de entrega</h2>
            <table className="table-adress">
                <tr><th>Rua</th><td colSpan={3}>av doutor joao augusto fonseca e silva, 16</td></tr>
                <tr><th>Bairro</th><td colSpan={3}>novo eldorado</td></tr>
                <tr><th>Cidade</th><td>contagem</td><th>UF</th><td>MG</td></tr>
                <tr><th>CEP</th><td colSpan={3}>32700-123</td></tr>
            </table>
        </div>
        <div className="area-products">
            <h2>Produtos</h2>
            <table className="table-products">
            <tr><th>Produto</th><th>Quantidade</th><th>Valor</th><th>Total</th><th>Foto</th></tr>
            <tr><td>Produto</td><td>Quantidade</td><td>Valor</td><td>Total</td><td>Foto</td></tr>
            </table>
        
        </div>
        <div className="area-details">
            <h2>info</h2>
        </div>
    </ReactModal> */}
    </>
    );
}

export default List;

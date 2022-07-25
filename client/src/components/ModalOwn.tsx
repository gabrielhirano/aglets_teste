import ReactModal  from 'react-modal'

ReactModal.setAppElement('#app')

interface ICliente{
    id: string;
    firstName: string;
    lastName: string;
    documentType: string;
    document: string;
    phone: string;
    email: string;
}
interface IEndereco{
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string
    addressType: string;
    receiverName: string;
    postalCode: string;
}
interface IEnvio{
    id: string;
    selectedAddresses: IEndereco;
}
interface IItems{
    id: string;
    productId: string;
    quantity: number;
    seller: string;
    name: string;
    price: number;
    imageUrl: string;
    detailUrl: string;
}
interface ICategoria{
    id: string;
    name: string;
}
interface IDimensions{
    cubicweight: number;
    height: number;
    length: number;
    weight: number;
    width: number;
}
interface IInfo{
    brandName: string;
    brandId: string;
    categoriesIds: string;
    categories: Array<ICategoria>;
    dimension: IDimensions;
}
interface IInformacao{
    clientProfileData: ICliente;
    shippingData: IEnvio;
    items: IItems;
    additionalInfo: IInfo

}

interface Props{
    modalIsOpen: boolean;
    handleCloseModal: () => void;
    dataObject: unknown;
}

const Modal: React.FC<Props> = ({modalIsOpen, handleCloseModal, dataObject}) =>{
    console.log(dataObject)
return(
        <ReactModal
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
        </ReactModal>
    )
}


export default Modal
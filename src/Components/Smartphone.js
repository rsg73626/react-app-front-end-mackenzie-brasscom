
function Smartphone({marca, modelo, ano, preco}) {
    return (
        <ul>
            <li>Marca: {marca}</li>
            <li>Modelos: {modelo}</li>
            <li>Ano: {ano}</li>
            <li>Preço estimado: {preco}</li>
        </ul>
    );
}

export default Smartphone;
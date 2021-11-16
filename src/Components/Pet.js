
function Pet(props) {
    return (
        <ul>
            <li>Tipo: {props.tipo}</li>
            <li>Raça: {props.raca}</li>
            <li>Nome: {props.nome}</li>
            <li>Idade: {props.idade}</li>
        </ul>
    );
}

export default Pet;
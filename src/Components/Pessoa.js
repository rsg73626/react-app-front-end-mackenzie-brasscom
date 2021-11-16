
function Pessoa({nome, sobrenome, idade}) {
    return (
        <ul>
            <li>Nome: {nome}.</li>
            <li>Sobrenome: {sobrenome}.</li>
            <li>Idade: {idade}.</li>
        </ul>
    );
}

export default Pessoa;
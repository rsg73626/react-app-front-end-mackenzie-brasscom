
function ElementoQuimico(props) {
    return (
        <p className="elemento">
            <span>{props.nmr}</span>
            <span>{props.simbulo}</span>
            <span>{props.nome}</span>
        </p>
    );
}

export default ElementoQuimico;
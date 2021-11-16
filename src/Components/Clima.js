
//local, data, temperatura máxima, temperatura mínima, temperatura atual, clima atual
function Clima({local, temp, clima, data, max, min}) {
    return (
        <ul>
            <li>{local}</li>
            <li>Agora: {temp} - {clima}</li>
            <li>Previsaão para {data}</li>
            <li>Máxima: {max}</li>
            <li>Mínima: {min}</li>
        </ul>
    );
}

export default Clima;
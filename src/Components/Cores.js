
import { useState } from "react";

function Cores() {

    const [cor, setCor] = useState("red");

    const getCSS = () => {
        return { backgroundColor: cor };
    }

    return (
        <>
            <p style={getCSS()}>Cor atual: {cor}</p>
            <button type="button" onClick={ () => setCor("red") }>Vermelho</button>
            <button type="button" onClick={ () => setCor("green") }>Verde</button>
            <button type="button" onClick={ () => setCor("blue") }>Azul</button>
        </>
    );

}

export default Cores;
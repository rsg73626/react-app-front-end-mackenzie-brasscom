
import { useState } from "react";

function Lar() {
    const [estrutura, setEstrutura] = useState({
        quarto: 20,
        sala: 20,
        banheiro: 10,
        cozinha: 20,
    });

    const aumentaBanheiro = () => {
        setEstrutura({ ...estrutura, banheiro: 15, cozinha: 25 });
    }

    return (
        <>
            <ul>
                <li>Quarto: {estrutura.quarto} m<sup>2</sup>.</li>
                <li>Sala: {estrutura.sala} m<sup>2</sup>.</li>
                <li>Banheiro: {estrutura.banheiro} m<sup>2</sup></li>
                <li>Cozinha: {estrutura.cozinha} m<sup>2</sup></li>
            </ul>
            <button type="button" onClick={aumentaBanheiro}>Aumenta banheiro</button>
        </>
    )
}

export default Lar;
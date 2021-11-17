
import { useState, useEffect } from "react";

function SorteiaCor() {
    const [cor, setCor] = useState("gray");
    const [nomeCor, setNomeCor] = useState("Cinza");

    const cores = ["red", "green", "blue", "orange", "lightpink"];
    const nomeCores = ["Vermelho", "Verde", "Azul", "Laranja", "Rosa claro"];

    const getCSS = () => { return { backgroundColor: cor } }

    useEffect(() => {
        setTimeout(() => {
            const sorteio = Math.floor(Math.random() * 4);
            setCor(cores[sorteio]);
            setNomeCor(nomeCores[sorteio]);
        }, 5000)
    }, [])

    return <p style={getCSS()}>{nomeCor}</p>
}

export default SorteiaCor;
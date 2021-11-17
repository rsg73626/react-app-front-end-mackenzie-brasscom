
import { useState } from "react";

function Casa() {
    const [portas, setPortas] = useState(1);
    const [janelas, setJanelas] = useState(2);

    return (
        <>
            <p>Casa com {portas} porta(s) e {janelas} janela(s).</p>
            <ul>
                <li>
                    <button type="button" onClick={ () => setPortas(portas + 1) }>+ Porta</button>
                    <button type="button" onClick={ () => setPortas(portas - 1) }>- Porta</button>
                </li>
                <li>
                    <button type="button" onClick={ () => setJanelas(janelas + 1) }>+ Janela</button>
                    <button type="button" onClick={ () => setJanelas(janelas - 1) }>- Janela</button>
                </li>
            </ul>
        </>
    );
}

export default Casa;
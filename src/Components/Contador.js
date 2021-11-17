
import { useState } from "react";

function Contador({ valorInicial, incremento }) {

    const [valor, configurarValor] = useState(valorInicial);

    return <p onClick={ () => configurarValor(valor + incremento) }>Contador: {valor}. Clique aqui para { incremento > 0 ? "incrementar" : "decrementar" }.</p>

}

export default Contador;
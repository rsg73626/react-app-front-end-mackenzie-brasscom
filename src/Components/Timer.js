
import { useState, useEffect } from "react";

function Timer({incremento}) {
    const [contador, setContador] = useState(0);
    const [espera, setEspera] = useState(3000);

    useEffect(() => {
        setTimeout(() => {
            setContador(contador + incremento);
            setEspera(espera - 500)
        }, espera);
    }, []);

    return <p>Contador: {contador}.</p>
}

export default Timer;
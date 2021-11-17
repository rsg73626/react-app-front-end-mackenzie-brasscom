
import { useState, useEffect } from "react";

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

function Contador({ valorInicial, incremento }) {

    const [valor, configurarValor] = useState(valorInicial);

    return <p onClick={ () => configurarValor(valor + incremento) }>Contador: {valor}. Clique aqui para { incremento > 0 ? "incrementar" : "decrementar" }.</p>

}

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

function TerceiraPagina() {
    return (
        <section>
            <h1>Terceira página de estudos React</h1>
            <article>
                <h2>React Hooks</h2>
                <Cores />
            </article>
            <article>
                <h2>Componente contador com estado</h2>
                <Contador valorInicial={0} incremento={1}/>
                <Contador valorInicial={0} incremento={10}/>
                <Contador valorInicial={0} incremento={-1}/>
                <Contador valorInicial={0} incremento={-10}/>
            </article>
            <article>
                <h2>Componente casa com estados</h2>
                <Casa />
            </article>
            <article>
                <h2>Componente lar com estado usando um objeto.</h2>
                <Lar />
            </article>
            <article>
                <h2>Usando o hook de efeito</h2>
                <Timer incremento={10}/>
            </article>
            <article>
                <h2>Sorteio de cor</h2>
                <SorteiaCor />
            </article>
        </section>
    );
}

export default TerceiraPagina;
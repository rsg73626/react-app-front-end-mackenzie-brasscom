import Cores from "../Components/Cores";
import Contador from "../Components/Contador";
import Casa from "../Components/Casa";
import Lar from "../Components/Lar";
import Timer from "../Components/Timer";
import SorteiaCor from "../Components/SorteiaCor";
import { useState, useEffect } from "react";

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
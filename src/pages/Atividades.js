
import Pet from "../Components/Pet";
import Smartphone from "../Components/Smartphone";
import Clima from "../Components/Clima";
import Login from "../Components/Login";
import Definicoes from "../Components/Definicoes";
import Dicionario from "../Components/Dicionario";

const listaDeDefinicoes = [
    { termo: "Palavra 1", definicao: "Definição da palavra 1." },
    { termo: "Palavra 2", definicao: "Definição da palavra 2." },
    { termo: "Palavra 3", definicao: "Definição da palavra 3." },
    { termo: "Palavra 4", definicao: "Definição da palavra 4." },
    { termo: "Palavra 5", definicao: "Definição da palavra 5." }
];

const secoes = [
    {
        letra: "A", 
        definicoes: [
            {termo: "Ameixa", definicao: "Texto com a definição da palavra ameixa."},
            {termo: "Amor", definicao: "Texto com a definição da palavra amor."},
            {termo: "Amordaçado", definicao: "Texto com a definição da palavra amordaçado."},
        ]
    },
    {
        letra: "B",
        definicoes: [
            {termo: "Bola", definicao: "Definiçã de bola"},
            {termo: "Bolo", definicao: "Definiçã de bolo"},
            {termo: "Borracha", definicao: "Definiçã de borracha"},
        ]
    }
];

function Atividades() {
    return (
        <>
            <h1>Atividades</h1>
            <section>
                <article>
                    <h2>Pets</h2>
                    <Pet tipo="Cachorro" raca="Vira-lata" nome="Neném" idade="8 anos" />
                    <Pet tipo="Cachorro" raca="Vira-lata" nome="Kaio" idade="8 anos" />
                </article>
                <article>
                    <h2>Smartphone</h2>
                    <Smartphone marca="Apple" modelo="iPhone 13" ano={2021} preco="R$ 15.000,00" />
                </article>
                <article>
                    <h2>Clima</h2>
                    <Clima local="São Paulo - SP" temp="28 graus" clima="Ensolarado" data="20/12/2021" max="30 graus" min="28 graus"/>
                </article>
                <article>
                    <h2>Formulário de login criado com um componente React</h2>                
                    <Login />
                </article>
                <article>
                    <h2>Definições</h2>
                    <Definicoes lista={listaDeDefinicoes} />
                </article>
                <article>
                    <h2>Dicionário</h2>
                    <Dicionario secoes={secoes} />
                </article>
            </section>
        </>
    );
}

export default Atividades;
import Carro from "../Carro";
import CarroComClasse from "../CarroComClasse";
import Garagem from "../Garagem";
import Pessoa from "../Pessoa";
import TresPessoas from "../TresPessoas";
import ElementoQuimico from "../ElementoQuimico";
import Pet from "../Pet";
import Smartphone from "../Smartphone";
import Clima from "../Clima";
import Login from "../Login";
import Definicoes from "../Definicoes";
import Dicionario from "../Dicionario";
import "./App.css";

const tabela = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
)

const doisParagrafos = (
    <div className="teste">
        <p>Sem fragment</p>
        <p>Sem fragment</p>
    </div>
);

const doisParagrafosComFragment = (
    <>
        <p>Com fragment</p>
        <p>Com fragment</p>
    </>
);

const nome = "Leonardo";
const sobrenome = "Ribeiro";
const idade = 76;

const frutas = ["Maçã", "Banana", "Abacate"];
const paragrafosFrutas = [];
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    const paragrafo = <p key={i}>{fruta}</p>;
    paragrafosFrutas.push(paragrafo);
}

const paragrafosFrutasUsandoMap = frutas.map((texto, indice) => { return <p key={indice}>{texto}</p> });

const serieDosLantanideios = [
    { nmr: 57, simbulo: "La", nome: "Lantânio" },
    { nmr: 58, simbulo: "Ce", nome: "Cério" },
    { nmr: 59, simbulo: "Pr", nome: "Praseodímio" },
    { nmr: 60, simbulo: "Nd", nome: "Neodímio" },
    { nmr: 61, simbulo: "Pm", nome: "Promécio" },
    { nmr: 62, simbulo: "Sm", nome: "Samário" },
    { nmr: 63, simbulo: "Eu", nome: "Európio" },
    { nmr: 64, simbulo: "Gd", nome: "Gadolínio" },
    { nmr: 65, simbulo: "Tb", nome: "Térbio" },
    { nmr: 66, simbulo: "Dy", nome: "Disprosio" },
    { nmr: 67, simbulo: "Ho", nome: "Holmio" },
    { nmr: 68, simbulo: "Er", nome: "Érbio" },
    { nmr: 69, simbulo: "Tm", nome: "Túlio" },
    { nmr: 70, simbulo: "Yb", nome: "Itérbio" },
    { nmr: 71, simbulo: "Lu", nome: "Lutécio" },
];

const serieLantanideosTabelaPeriodica = (
    <table>
        <caption>Série dos Lantanídeos</caption>
        <tr>
            { serieDosLantanideios.map((elemento) => (<td key={elemento.nmr}> <ElementoQuimico {...elemento}/> </td>)) }
        </tr>
    </table>
);

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

function cliclouNoBotao() {
    alert("Clicou no botão!");
}

function passouOCursorNoElemento() {
    alert("Passou o cursor no elemenot!");
}

function mudouOValor() {
    alert("Mudou o valor!");
}

function mostrarMensagem(mensagem) {
    alert(mensagem);
}

function App() {
    return (
        <>
            <h1>Meu primeiro app React.</h1>
            <section>
                <h2>Primeiro semana de aula</h2>
                <article>
                    <h3>Tabela criada com JSX</h3>
                    {tabela}
                </article>
                <article>
                    <h3>Agrupando parágrafos com uma div</h3>
                    {doisParagrafos}
                </article>
                <article>
                    <h3>Agrupando parágrafos com fragment</h3>
                    {doisParagrafosComFragment}
                </article>
                <article>
                    <h3>Criando componentes React</h3>
                    <CarroComClasse cor="Vermelho"/>
                    <Carro cor="Azul"/>
                </article>
                <article>
                    <h3>Componente referenciando outro componente.</h3>
                    <Garagem />
                </article>
                <article>
                    <h3>Prática (primeiro componente)</h3>
                    <ol>
                        <li>Criar um componente pessoa.</li>
                        <li>O componente deve receber a propriedade Nome.</li>
                        <li>O componente deve receber a propriedade Sobrenome.</li>
                        <li>O componente deve receber a propriedade Idade.</li>
                        <li>O componente deve criar (retornar) uma 
                            ul com cada li mostrando as três informações acima da pessoa.</li>
                    </ol>
                    <Pessoa nome="Nome da pessoa" sobrenome="Sobrenome da pessoa" idade="Idade da pesoa"/>
                    <Pessoa nome="" sobrenome="" idade=""/>
                    <Pessoa nome="Maria" sobrenome="Germano" idade="25"/>
                    <Pessoa nome="João" sobrenome="Germano" idade="35"/>
                    <Pessoa nome="Rafael" sobrenome="Germano" idade="45"/>
                </article>
                <article>
                    <h3>Atividade guiada: componente elemento para tabela periódica</h3>
                    <table>
                        <caption>
                            Série dos Lantanídeos
                        </caption>
                        <tr>
                            <td>
                                <ElementoQuimico nmr={57} simbulo="La" nome="Lantânio"/>
                            </td>
                            <td>
                                <ElementoQuimico nmr={58} simbulo="Ce" nome="Cério"/>
                            </td>
                            <td>
                                <ElementoQuimico nmr={59} simbulo="Pr" nome="Praseodímio" />
                            </td>
                            <td>
                                <ElementoQuimico nmr={60} simbulo="Nd" nome="Neodímio" />
                            </td>
                        </tr>
                    </table>
                </article>
                <article>
                    <h3>Usando variáveis para enviar propriedades para os componentes</h3>
                    <Pessoa nome={nome} sobrenome={sobrenome} idade={idade}/>
                </article>
                <article>
                    <h3>Componente passando dados para outros componente interno</h3>
                    <TresPessoas />
                </article>
                <article>
                    <h3>Renderizando lista de frutas com parágrafos</h3>
                    {paragrafosFrutas}
                </article>
                <article>
                    <h3>Renderizando lista de frutas com paragráfos criados usando a função map dos arras</h3>
                    {paragrafosFrutasUsandoMap}
                </article>
                <article>
                    <h3>Série dos Lantanídeos da tabela periódica criada usando lista de objetos e o método map dos arrays</h3>
                    {serieLantanideosTabelaPeriodica}
                </article>
                <article>
                    <h3>Pets</h3>

                    <Pet tipo="Cachorro" raca="Vira-lata" nome="Neném" idade="8 anos" />
                    <Pet tipo="Cachorro" raca="Vira-lata" nome="Kaio" idade="8 anos" />

                </article>
                <article>
                    <h3>Smartphone</h3>

                    <Smartphone marca="Apple" modelo="iPhone 13" ano={2021} preco="R$ 15.000,00" />

                </article>
                <article>
                    <h3>Clima</h3>
                    
                    <Clima local="São Paulo - SP" temp="28 graus" clima="Ensolarado" data="20/12/2021" max="30 graus" min="28 graus"/>

                </article>
                <article>
                    <h3>Formulário de login criado com um componente React</h3>
                    
                    <Login />

                </article>
                <article>
                    <h3>Definições</h3>
                    <Definicoes lista={listaDeDefinicoes} />
                </article>
                <article>
                    <h3>Dicionário</h3>

                    <Dicionario secoes={secoes} />
                </article>
            </section>
            <section>
                <h2>Segunda semana de aula</h2>
                <article>
                    <h3>Eventos em React (usando o onclick)</h3>
                    <button type="button" onClick={cliclouNoBotao}>Clique-me!</button>
                </article>
                <article>
                    <h3>Usando o onmouseover</h3>
                    <p>Descomentar o código para ver o resultado.</p>
                    {/* <p onMouseOver={passouOCursorNoElemento}>Passe o mouse sobre mim!</p> */}
                </article>
                <article>
                    <h3>Usando o onchange</h3>
                    <form>
                        <input type="text" placeholder="digite alguma coisa" onChange={mudouOValor} />
                    </form>
                </article>
                <article>
                    <h3>Função com passagem de argumento para eventos no React</h3>
                    <button type="button" onClick={() => mostrarMensagem("Bom dia!")}>Bom dia!</button>
                    <button type="button" onClick={() => mostrarMensagem("Boa tarde!")}>Boa tarde!</button>
                    <button type="button" onClick={() => mostrarMensagem("Boa noite!")}>Boa noite!</button>
                </article>
                <article>
                    <h3>Exibindo objeto do evento disparado em React no console do navegador</h3>
                    <ul>
                        <li onClick={(evento) => { console.log(evento); }}>Clique</li>
                        <li onMouseOver={(evento) => { console.log(evento); }}>Mouseover</li>
                    </ul>
                </article>
            </section>
        </>
    );
}

export default App;

import './App.css';

import CarroComClasse from '../CarroComClasse';
import Carro from '../Carro';
import Garagem from '../Garagem';

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

function Pessoa({nome, sobrenome, idade}) {
    return (
        <ul>
            <li>Nome: {nome}.</li>
            <li>Sobrenome: {sobrenome}.</li>
            <li>Idade: {idade}.</li>
        </ul>
    );
}

function TresPessoas() {
    const pessoa1 = { nome: "Pessoa 1", sobrenome: "Pessoa 1", idade: 10 }
    const pessoa2 = { nome: "Pessoa 2", sobrenome: "Pessoa 2", idade: 20 }
    const pessoa3 = { nome: "Pessoa 3", sobrenome: "Pessoa 3", idade: 30 }

    return (
        <>
            <Pessoa nome={pessoa1.nome} sobrenome={pessoa1.sobrenome} idade={pessoa1.idade} />
            <Pessoa nome={pessoa2.nome} sobrenome={pessoa2.sobrenome} idade={pessoa2.idade} />
            <Pessoa nome={pessoa3.nome} sobrenome={pessoa3.sobrenome} idade={pessoa3.idade} />
        </>
    );
}

function ElementoQuimico(props) {
    return (
        <p className="elemento">
            <span>{props.nmr}</span>
            <span>{props.simbulo}</span>
            <span>{props.nome}</span>
        </p>
    );
}

const nome = "Leonardo";
const sobrenome = "Ribeiro";
const idade = 76;

const frutas = ["Maçã", "Banana", "Abacate"];
const paragrafosFrutas = [];
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    const paragrafo = <p>{fruta}</p>;
    paragrafosFrutas.push(paragrafo);
}

const paragrafosFrutasUsandoMap = frutas.map((texto) => { return <p>{texto}</p> });

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
            { serieDosLantanideios.map((elemento) => (<td> <ElementoQuimico nmr={elemento.nmr} simbulo={elemento.simbulo} nome={elemento.nome}/> </td>)) }
        </tr>
    </table>
);

function App() {
    return (
        <>
            <h1>Meu primeiro app React.</h1>
            <section>
                <article>
                    <h2>Tabela criada com JSX</h2>
                    {tabela}
                </article>
                <article>
                    <h2>Agrupando parágrafos com uma div</h2>
                    {doisParagrafos}
                </article>
                <article>
                    <h2>Agrupando parágrafos com fragment</h2>
                    {doisParagrafosComFragment}
                </article>
                <article>
                    <h2>Criando componentes React</h2>
                    <CarroComClasse cor="Vermelho"/>
                    <Carro cor="Azul"/>
                </article>
                <article>
                    <h2>Componente referenciando outro componente.</h2>
                    <Garagem />
                </article>
                <article>
                    <h2>Prática (primeiro componente)</h2>
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
                    <h2>Atividade guiada: componente elemento para tabela periódica</h2>
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
                    <h2>Usando variáveis para enviar propriedades para os componentes</h2>
                    <Pessoa nome={nome} sobrenome={sobrenome} idade={idade}/>
                </article>
                <article>
                    <h2>Componente passando dados para outros componente interno</h2>
                    <TresPessoas />
                </article>
                <article>
                    <h2>Renderizando lista de frutas com parágrafos</h2>
                    {paragrafosFrutas}
                </article>
                <article>
                    <h2>Renderizando lista de frutas com paragráfos criados usando a função map dos arras</h2>
                    {paragrafosFrutasUsandoMap}
                </article>
                <article>
                    <h2>Série dos Lantanídeos da tabela periódica criada usando list de objetos e o método map dos arrays</h2>
                    {serieLantanideosTabelaPeriodica}
                </article>
            </section>
        </>
    );
}

export default App;

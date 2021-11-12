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

function ElementoQuimico(props) {
    return (
        <p className="elemento">
            <span>{props.nmr}</span>
            <span>{props.simbulo}</span>
            <span>{props.nome}</span>
        </p>
    );
}

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
                        </tr>
                    </table>
                </article>
            </section>
        </>
    );
}

export default App;

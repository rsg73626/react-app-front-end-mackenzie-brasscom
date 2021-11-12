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
            </section>
        </>
    );
}

export default App;

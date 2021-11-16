
import Definicoes from "./Definicoes";

function Dicionario({secoes}) {
    return (
        <section>
            {secoes.map(({letra, definicoes}) => (
                <>
                    <h3>Palavras com a letra {letra}</h3>
                    <Definicoes lista={definicoes} />
                </>
            )
            )}
        </section>
    );
}

export default Dicionario;
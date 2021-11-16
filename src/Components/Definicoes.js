
function Definicoes({lista}) {
    return (
        <dl>
            {
                lista.map(({termo, definicao}) => (
                    <>
                        <dt> - {termo}</dt>
                        <dd>{definicao}</dd>
                    </>
                ))
            }
        </dl>
    );
}

export default Definicoes;
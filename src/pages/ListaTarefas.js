
import { useState, useEffect } from "react";

function ListaTarefas() {

    const [id, setId] = useState(0);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const clicouNaTarefa = (idTarefa) => {
        for (let tarefa of tarefas) {
            if (tarefa.id == idTarefa) {
                tarefa.concluido = !tarefa.concluido;
                break;
            }
        }
        setTarefas([...tarefas]);
    }

    const getTarefasJSX = () => {
        return tarefas.map((tarefa) => {
            return (
                <label key={tarefa.id}>
                    <input type="checkbox" onClick={ () => { clicouNaTarefa(tarefa.id) } }/>
                    {tarefa.nome}
                </label>
            )
        })
    }

    const mudouNovaTarefa = (evento) => {
        const nomeTarefa = evento.target.value;
        setNovaTarefa(nomeTarefa);
    }

    const adicionar = () => {
        const novaTarefaObjeto = {
            id: id,
            nome: novaTarefa,
            concluido: false
        }
        setId(id + 1);
        setTarefas([...tarefas, novaTarefaObjeto]);
        setNovaTarefa("");
    }

    return (
        <>
            <h1>Lista de tarefas</h1>
            <form>
                { getTarefasJSX() }
            </form>
            <form>
                <label htmlFor="tarefa">Tarefa: </label>
                <input type="text" placeholder="insira o nome da tarefa" id="tarefa" onChange={mudouNovaTarefa} value={novaTarefa}/>
                {"   "}<button type="button" onClick={adicionar}>Adicionar</button>
            </form>
        </>
    );
}

export default ListaTarefas;
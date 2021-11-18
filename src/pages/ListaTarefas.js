
import { useState, useEffect } from "react";
import "./ListaTarefas.css";

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
                    <input type="checkbox" onClick={ () => { clicouNaTarefa(tarefa.id) } } checked={tarefa.concluido ? "checked" : ""} />
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
        if (novaTarefa == "") { return }
        if (novaTarefa.trim() == "") { return }
        const novaTarefaObjeto = {
            id: id,
            nome: novaTarefa,
            concluido: false
        }
        setId(id + 1);
        setTarefas([...tarefas, novaTarefaObjeto]);
        setNovaTarefa("");
    }

    useEffect(() => {
        const idSalvo = localStorage.getItem("ultimo-id-tarefa");
        if (idSalvo != undefined && idSalvo != "") {
            const idNumero = Number(idSalvo);
            setId(idNumero);
        }
        const tarefasSalva = localStorage.getItem("tarefas");
        if (tarefasSalva != undefined && tarefasSalva != "") {
            const arrayDeTarefas = JSON.parse(tarefasSalva);
            setTarefas(arrayDeTarefas);
        }
    }, []);

    useEffect(() => {
        console.log("Executou ação do use effect!");
        localStorage.setItem("ultimo-id-tarefa", id + "");
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    return (
        <>
            <h1>Lista de tarefas</h1>
            <form id="lista-tarefas">
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
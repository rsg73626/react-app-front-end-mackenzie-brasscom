import ReactStudies from "../../pages/ReactStudies";
import Atividades from "../../pages/Atividades";
import Header from "../Header/Header";
import TerceiraPagina from "../../pages/TerceiraPagina";
import ListaTarefas from "../../pages/ListaTarefas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<ReactStudies />} />
                    <Route path="atividades" element={<Atividades />} />
                    <Route path="parte3" element={<TerceiraPagina />} />
                    <Route path="tarefas" element={<ListaTarefas />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

import ReactStudies from "../../pages/ReactStudies";
import Atividades from "../../pages/Atividades";
import Header from "../Header/Header";
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
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

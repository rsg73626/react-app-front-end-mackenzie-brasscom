
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="atividades">Atividades</Link></li>
                    <li><Link to="parte3">Parte 3</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="atividades">Atividades</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
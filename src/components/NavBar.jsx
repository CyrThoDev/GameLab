import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import "../styles/NavBar.css"

export default function NavBar () {
    return (
        <nav id="navBar">
            <Link to="/"><img src={Logo} alt="logo Gamelab" id="logo"/></Link>
            <ul>
                <li><Link to="/ressources">Ressources</Link></li>
                <li><Link to="https://odyssey.wildcodeschool.com" target="_blank">Odyssey</Link></li>
            </ul>
        </nav>
    )
}
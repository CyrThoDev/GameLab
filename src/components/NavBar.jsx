import Logo from "../assets/logo.png"
import "../styles/NavBar.css"

export default function NavBar () {
    return (
        <nav id="navBar">
            <img src={Logo} alt="logo Gamelab" id="logo"/>
            <ul>
                <li>Ressources</li>
                <li>Odyssey</li>
            </ul>
        </nav>
    )
}
import './Navbar.css'
import logo from './logo2.png'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navb">
            <div className="navbar-brand container-fluid">
                <img className="navbar-brand" width="150px"  src={logo}/>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-ul">
                        <li className="nav-item nav-li">
                            <button className="nav-link active nav-button" aria-current="page">INICIO</button>
                        </li>
                        <li className="nav-item nav-li">
                            <button className="nav-link nav-button">PRODUCTOS</button>
                        </li>
                        <li className="nav-item dropdown nav-li">
                            <button className="nav-link dropdown-toggle nav-button" id="navbarDropdown"
                                data-bs-toggle="dropdown">SERVICIOS</button>
                        </li>
                        <li className="nav-item nav-li">
                            <button className="nav-link nav-button">
                            <CartWidget />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
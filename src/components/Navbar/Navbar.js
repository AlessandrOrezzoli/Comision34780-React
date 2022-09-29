import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navb">
            <div className="container-fluid">
                <h1 className="navbar-brand">ACZU STETIC NAILS</h1>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-ul">
                        <li className="nav-item nav-li">
                            <button className="nav-link active nav-button" aria-current="page" href="index.html">INICIO</button>
                        </li>
                        <li className="nav-item nav-li">
                            <button className="nav-link nav-button" href="pages/mi.portafolio.html">MI PORTAFOLIO</button>
                        </li>
                        <li className="nav-item dropdown nav-li">
                            <button className="nav-link dropdown-toggle nav-button" href="pages/servicios.html" id="navbarDropdown"
                                data-bs-toggle="dropdown">SERVICIOS</button>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
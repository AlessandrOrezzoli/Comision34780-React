import './Navbar.css'
import logo from './logo2.png'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navb">
            <div className="navbar-brand container-fluid">
                <Link to='/'>
                    <img className="navbar-brand" alt="" width="150px" src={logo} />
                </Link>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-ul">
                        <li className="nav-item nav-li">
                            <Link to='/' className='link'>
                                <p className="nav-link active nav-button" aria-current="page">INICIO</p>
                            </Link>
                        </li>
                        <li className="nav-item nav-li">
                            <Link to={'/category/Producto'} className='link'>
                                <p className="nav-link nav-button">PRODUCTOS</p>
                            </Link>
                        </li>
                        <li className="nav-item nav-li">
                            <Link to={'/category/Servicio'} className='link'>
                                <p className="nav-link nav-button">SERVICIOS</p>
                            </Link>
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
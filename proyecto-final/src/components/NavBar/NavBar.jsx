import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom"



function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark" style={{ backgroundColor: "#06395e" }}>
            <div className="container-fluid">
                <Link to="/" className="nav-item">
                    <span className="navbar-brand">VarShoes</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item">
                            <span className="nav-link" aria-current="page" >Inicio</span>
                        </Link>
                        <Link to="/catalog" className="nav-item">
                            <span className="nav-link" aria-current="page" >Catalogo</span>
                        </Link>
                        <Link to="/about" className="nav-item">
                            <span className="nav-link" >Nosotros</span>
                        </Link>
                        <Link to="/contact" className="nav-item">
                            <span className="nav-link" >Contacto</span>
                        </Link>
                    </ul>
                    <Link to="/cart" className="nav-item">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
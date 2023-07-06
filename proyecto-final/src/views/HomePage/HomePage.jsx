import './HomePage.css';
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="home-container">
      <h1>Bienvenido a VarShoes</h1>
      <p>Encuentra las mejores zapatillas para ti</p>
      <div className="center-link">
        <Link to="/catalog" className="btn-shop-now">Comprar ahora</Link>
      </div>
    </div>
  );
}

export default HomePage;
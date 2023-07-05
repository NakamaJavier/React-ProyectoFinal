import './App.css'
import { StockProvider } from "./context/StockContext"
import { CartProvider } from './context/CartContext'
import {BrowserRouter as Router, Route, Routes, Navigate, useParams} from "react-router-dom"

//Components
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'

//Views
import Home from "./views/HomePage"
import About from "./views/AboutPage"
import Contact from "./views/ContactPage"
import ErrorPage from "./views/ErrorPage"
import DetailPage from './views/DetailPage'
import CatalogPage from './views/CatalogPage'


////////////////////////////////////////////////////////////////////////////////////////
// fetch('../public/productos_bd.json')
//     .then(response => response.json())
//         .then(productosParseados=> {
//             const productos =productosParseados
//             console.log("Cargo por el json productos_bd:",productos);
//             cargarDatos(productos)
//         })

////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <StockProvider>
      <CartProvider>
        <Router>
          <div className='body'>
              <NavBar/>
              <AppRoutes/>
          </div>
        </Router>
      </CartProvider>
    </StockProvider>
  )
}

export default App

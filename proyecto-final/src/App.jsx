import './App.css'
import { StockProvider } from "./context/StockContext"
import { CartProvider } from './context/CartContext'
import {BrowserRouter as Router} from "react-router-dom"

//Components
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/AppRoutes'


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
        <Router basename="/React-ProyectoFinal">
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

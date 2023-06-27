import './App.css'
import cargarDatos from "./firebase/firebaseConfig"
////////////////////////////////////////////////////////////////////////////////////////
// fetch('../public/productos_bd.json')
//     .then(response => response.json())
//         .then(productosParseados=> {
//             const productos =productosParseados
//             console.log("Cargo por el json productos_bd:",productos);
//             cargarDatos(productos)
//         })

////////////////////////////////////////////////////////////////////////////////7
function App() {
  console.log(import.meta.env);
  return (
    <div className= "body">
      <h1>Hola</h1>
    </div>
  )
}

export default App

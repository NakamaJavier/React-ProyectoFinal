import "./product.css"

function Product({ data }) {
    console.log(data)
    const opciones1 = ['Opción 1', 'Opción 2', 'Opción 3']; // Ejemplo de opciones1
    return (
        <div className="card cardHover" style={{ width: '20rem' }}>
            <img src={data.sprites.back_default} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">
                    <strong>{data.name}</strong>
                </h4>
                <p className="card-text ml8px">
                    <strong>Tipo:</strong> {data.types[0].type.name} <br /> <strong>Precio:</strong>
                </p>
                {/* <div className="text-center">
                    <a href="#" id={`producto-${data.id}`} data-id={data.id} className="btn btn-primary btnAdd">
                        Añadir <i className="fa-solid fa-cart-plus"></i>
                    </a>
                    <div className="menues">
                        <select className="menu1" id={`menu1-${data.id}`} data-id={data.id}>
                            <option value="0">Talle</option>
                            {opciones1.map((opcion, index) => (
                                <option key={index} value={opcion}>
                                    {opcion}
                                </option>
                            ))}
                        </select>
                        <select className="menu2" id={`menu2-${data.id}`} disabled>
                            <option value="0">Cantidad</option>
                        </select>
                        <label id={`cantidadMax-${data.id}`} htmlFor={`menu2-${data.id}`}></label>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Product
function CartItem({ data }) {
    return (
        <div className="card cardHover" style={{ width: '20rem', height: '18rem' }}>
            <div>
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">
                        {data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)}
                    </h2>
                    <h3>
                        <strong>Price: ${data.precio} </strong>
                    </h3>
                    <h4>
                        Talle: {data.talle}
                    </h4>
                    <h4>
                        Cantidad: {data.cantidad}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default CartItem
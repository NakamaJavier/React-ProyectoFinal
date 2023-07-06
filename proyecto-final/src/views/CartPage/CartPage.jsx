import CartItemContainer from "../../components/CartItemContainer/CartItemContainer"

function CartPage() {
    return (
        <div className="contenedor d-flex justify-content-evenly flex-wrap  gap-3">
            <CartItemContainer/>
        </div>
    )
}

export default CartPage
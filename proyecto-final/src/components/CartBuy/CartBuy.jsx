import React, { useContext, useEffect, useState } from 'react';
import "./cartbuy.css"
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

function CartBuy() {
    const { cartItems, clearCart } = useContext(CartContext)
    const [precioEnvio, setPrecioEnvio] = useState(0);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        ciudad: '',
        email: '',
        confirmarEmail: ''
    });
    const [formErrors, setFormErrors] = useState({
        emailMismatch: false,
        emptyFields: false
    });
    const [modalOpen, setModalOpen] = useState(false)

    const totalPrice = cartItems.reduce((acumulador, item) => {
        acumulador = item.cantidad * item.precio
        return acumulador
    }, 0)

    let sumaCantidades = 0
    if (cartItems.length > 0) {

        sumaCantidades = cartItems.reduce((acumulador, item) => {
            return acumulador + item.cantidad;
        }, 0)
    }

    useEffect(() => {
        if (cartItems.length > 0)
            setPrecioEnvio(300)
        else
            setPrecioEnvio(0)
    }, [cartItems])

    const handleBtnBuy = () => {
        setModalOpen(true); // Abrir el modal al hacer clic en el botón "Añadir"
    };
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleBtnFinishBuy = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "purchasesCollection"), {
                nombre: formData.nombre,
                apellido: formData.apellido,
                ciudad: formData.ciudad,
                email: formData.email,
                cartItems: cartItems,
            });
            clearCart()
            alert("Se concretó la compra con el ID: " + docRef.id);

            setFormData({
                nombre: "",
                apellido: "",
                ciudad: "",
                email: "",
                confirmarEmail: "",
            });
            setFormErrors({
                emailMismatch: false,
                emptyFields: false,
            });
            setModalOpen(false); 
        } catch (error) {
            console.error("Error al guardar los datos:", error);
        }
    };


    const isFormValid = () => {
        return (
            formData.nombre.trim() !== '' &&
            formData.apellido.trim() !== '' &&
            formData.ciudad.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.confirmarEmail.trim() !== '' &&
            formData.email === formData.confirmarEmail
        );
    };

    return (
        <div className="card card-cartBuy">
            <div className='cartBuyTitle'>
                <h2>Resumen de compra</h2>
            </div>
            <div className='buyDetailContainer'>
                <div className='detail1Container'>
                    <h4>Productos ({sumaCantidades})</h4>
                    <h4>$ {totalPrice}</h4>
                </div>
                <div className='detail2Container'>
                    <h4>Envío</h4>
                    <h4>$ {precioEnvio}</h4>
                </div>
                <div className='detail3Container'>
                    <h3>Total</h3>
                    <h3>$ {totalPrice + precioEnvio}</h3>
                </div>
                <button onClick={handleBtnBuy} className="btn btn-primary btnBuy">Añadir</button>
            </div>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Finalizar compra</h3>
                        <form>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input
                                    type="text"
                                    name="ciudad"
                                    value={formData.ciudad}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirmar Email</label>
                                <input
                                    type="email"
                                    name="confirmarEmail"
                                    value={formData.confirmarEmail}
                                    onChange={handleInputChange}
                                />
                                {formErrors.emailMismatch && <p className="error">Los correos no coinciden</p>}
                            </div>
                        </form>
                        <button
                            onClick={handleBtnFinishBuy}
                            className="btn btn-primary btnFinishBuy"
                            disabled={!isFormValid()}
                        >
                            Finalizar compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartBuy
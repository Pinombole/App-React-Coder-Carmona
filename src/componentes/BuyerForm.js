import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { firestore } from '../firebase.js'

const BuyerForm = () => {
    const { carrito } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")

    const cliente = { nombre, mail, direccion }

    const pedido = { carrito, cliente }

    const guardaNombre = (e) => {
        setNombre(e.target.value)
    }

    const guardaMail = (e) => {
        setMail(e.target.value)
    }

    const guardaDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const enviarOrden = (e) => {
        e.preventDefault()
        console.log("Se realizó el pedido")
        const collection = firestore.collection("pedidos")
        collection.add(pedido);
    }

    return (
        <form className="needs-validation" method="POST" action="php/email.php" novalidate>
            <div className="form-row justify-content-center align-items-center">
                <div className="col-12 ">
                    <input name="inp_nombre" onChange={guardaNombre} type="name" className="form-control" placeholder="Ingresa tu nombre completo" required></input>
                </div>
                <div className="col-12 mx-0 my-2">
                    <input name="inp_email" onChange={guardaMail} type="email" className="form-control" placeholder="Ingresa tu mail" required></input>
                </div>
                <div className="col-12 mx-0 my-2">
                    <input name="inp_direccion" onChange={guardaDireccion} type="direccion" className="form-control" placeholder="Dirección de Envio" required></input>
                </div>
                <div className="w-100 mt-2"></div>
                <div className="col-12 botones-dobles m-0 p-0 d-flex justify-content-center">
                    <input className="btn btn-primary btn-lg pull-right" type="submit" value="Confirma tu Compra" onClick={enviarOrden}></input>
                    <input className="btn btn-primary btn-lg pull-right mr-2" type="reset" value="Borrar Datos"></input>
                </div>
            </div>
        </form >

    );
}

export default BuyerForm;
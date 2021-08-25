import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { id: 10, nombre: "Remera Hombre XL", precio: 800, pictureURL: "../img/productos/remera-H-XL.jpg" },
                { id: 20, nombre: "Remera Mujer M", precio: 600, pictureURL: "../img/productos/remera-M-M.jpg" },
                { id: 30, nombre: "Buzo Unisex L", precio: 1400, pictureURL: "../img/productos/Buzo-U-L.jpg" },
                { id: 40, nombre: "Gorra Anime", precio: 400, pictureURL: "../img/productos/gorrAnme.jpg" },
            ])
        }, 3000);
    });

    let [dataToShow, setDataShow] = useState([]);

    useEffect(() => {
        promesa.then((data) => {
            setDataShow(data);
        })
        console.log("Aca viene el listado:")
        console.log(dataToShow)
    }, [])



    return (
        dataToShow.length == 0 ? (
            <h4>Cargando Producto...</h4>
        ) : (
            <div id="itemListContainer">
                <ItemList listado={dataToShow} />
            </div>
        )
    );
}

export default ItemListContainer;
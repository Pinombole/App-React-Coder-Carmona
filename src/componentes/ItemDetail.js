const ItemDetail = (prop) => {
    console.log(prop)
    return (
        <div className="offset-2 col-8 no-gutters">
            <div className="producto detalle border-primary" id={prop.detail.id}>
                <h3>{prop.detail.title}</h3>
                <div className="containerImg">
                    <img src={prop.detail.image} alt={prop.detail.title} />
                </div>
                <div>
                    <p className="precio">${prop.detail.price}</p>
                    <p className="descripcion titulo">Descripción</p>
                    <p className="descripcion">{prop.detail.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
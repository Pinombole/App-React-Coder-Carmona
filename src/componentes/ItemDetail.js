const ItemDetail = (prop) => {
    console.log(prop)
    return (
        <div className="offset-2 col-8 no-gutters">
            <div className="producto border-primary" id={prop.detail.id}>
                <h4>{prop.detail.title}</h4>
                <div className="containerImg">
                    <img src={prop.detail.image} alt={prop.detail.title} />
                </div>
                <div>
                    <p className="precio">${prop.detail.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
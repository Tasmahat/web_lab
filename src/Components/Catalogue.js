import Header from "./Header";
import {useEffect, useState} from "react";

function Catalogue() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true);

        fetch("api/products/all")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    };

    let productsList = products.map(product => {
        const image = require("./images/" + product.image.key + '.jpg');

        return(
            <div className={"catalogue-block"}>
                <img src={image} alt={product.name}/>
                <div className={"catalogue-block-title"}>
                    <h3>{product.name}</h3>
                    <p>{product.price} руб.</p>
                </div>
            </div>
        )
    })

    return(
        <body>
            <Header/>
            <div className={"page-body"}>
                <h2 className={"page-main-name"}>
                    Каталог товаров
                </h2>
                <a href={"/create_product"}>
                    <button className={"catalogue-create-product"}>Создать товар</button>
                </a>
                <div className={"catalogue-body"}>
                    {productsList}
                </div>
            </div>
        </body>
    )
}

export default Catalogue;
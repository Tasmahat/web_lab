import {useEffect, useState} from "react";

function RedactProduct() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [chosenProduct, setChosenProduct] = useState(<></>)
    let loadingImage = false;
    let imageId, file, name, price;

    function fileListener(e) {
        file = e.target.files[0];
    }

    useEffect(() => {
        fetch("api/api/products/all")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [])


    if (loading) {
        return <p>Loading...</p>;
    }

    let productsListName = products.map(product => {
        return(
            <option key={product.id} value={product.id}>
                {product.name}
            </option>
        )
    })

    //
    // function PostRequestUpdate(e) {
    //     // name = document.getElementById("updateProductName" + e.target.key).value;
    //     // price = document.getElementById("updateProductPrice" + e.target.key).value;
    //
    //     // console.log(name)
    //     // console.log(price)
    //     console.log(e.target.id + "popa")
    //
    //     return;
    //
    //     if(name === "") {
    //         alert("Напишите название чая!");
    //         return;
    //     }
    //
    //     if(price === "") {
    //         alert("Напишите цену чая!");
    //         return;
    //     }
    //
    //     if (file !== undefined) {
    //         loadingImage = true;
    //         const data = new FormData();
    //
    //         data.append("file", file);
    //
    //         const xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;
    //
    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === this.DONE) {
    //                 console.log(this.responseText);
    //                 imageId = this.response.substring(6).split(',',1).toString();
    //                 loadingImage = false;
    //             }
    //         });
    //
    //         xhr.open("POST", "api/api/images/save?=");
    //
    //         xhr.send(data);
    //
    //     }
    //
    //     uploadProduct();
    // }
    //
    // async function uploadProduct() {
    //     while(loadingImage) {
    //         await new Promise(r => setTimeout(r, 500));
    //     }
    //
    //     const data = new FormData();
    //     data.append("name", name);
    //     data.append("price", price);
    //     data.append("imageId", imageId)
    //
    //     const xhr = new XMLHttpRequest();
    //     xhr.withCredentials = true;
    //
    //     xhr.addEventListener("readystatechange", function () {
    //         if (this.readyState === this.DONE) {
    //             console.log(this.response);
    //             if(!this.response.includes("error")) {
    //                 alert("Чай был создан!");
    //             } else {
    //                 alert("Что-то пошло не так!\nЧай не был создан")
    //             }
    //         }
    //     });
    //
    //     xhr.open("POST", "api/api/products/save?=");
    //
    //     xhr.send(data);
    // }

    // let productsList = products.map(product => {
    //     const image = require("./images/" + product.image.key + '.jpg')
    //
    //     return(
    //         <tr id={"product_" + product.id}>
    //             <td>{product.id}</td>
    //             <td><input type={"text"} placeholder={product.name} id={"updateProductName" + product.id}/></td>
    //             <td><input type={"number"} placeholder={product.price} id={"updateProductPrice" + product.id}/></td>
    //             <td>
    //                 <img src={image} alt={product.name} className={"order-table-img"}/>
    //             </td>
    //             <td>
    //                 <input type={"file"} onChange={fileListener} className={"change-img"}/>
    //             </td>
    //             <td><button id={"updateProduct" + product.id}>Подтвердить</button></td>
    //         </tr>
    //     )
    // })

    function updateProduct(e) {
        let selectedIndex = e.target.options.selectedIndex;
        let idChosen = e.target.options[selectedIndex].value


        setChosenProduct(
            <div>
                popa
            </div>
        )
    }


    return(
        <div className={"tab-content redact-product-table"} id={"redact_product"}>
            <select onChange={updateProduct}>
                <option>--</option>
                {productsListName}
            </select>
            {chosenProduct}
        </div>
    )
}

export default RedactProduct
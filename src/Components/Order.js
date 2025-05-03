import Header from "./Header";
import {useEffect, useState} from "react";

function Order() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

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

    function PostRequest() {
        let name = document.getElementById("name_ord").value;
        let surname = document.getElementById("surname_ord").value;
        let age = document.getElementById("age_ord").value;
        let date = document.getElementById("date_ord").value;
        let time = document.getElementById("time_ord").value;
        let is_prepaid = document.getElementById("is_prepaid_ord").checked;
        let address = document.getElementById("address_ord").value;
        let payment = document.getElementById("payment_ord").value;
        let total = document.getElementById("total_ord").value;

        let listOfProducts = []
        let listOfQuantity  = []
        products.map(i => {
            let quantity = +document.getElementById("quantity_" + i.id).value;
            if (quantity === null) {
                quantity = 0
            }
            if (quantity > 0) {
                listOfProducts.push(i.id)
                listOfQuantity.push(quantity)
            }
        })

        console.log(listOfProducts)
        console.log(listOfQuantity)

        if (name === "") {
            alert("Напишите ваше имя!");
            return;
        }
        if (surname === "") {
            alert("Напишите вашу фамилию!");
            return;
        }
        if (age === "") {
            alert("Укажите ваш возраст!");
            return;
        } else if (age < 0) {
            alert("Возраст не может быть отрицательным!");
            return;
        }
        if (date === "") {
            alert("Укажите дату доставки!");
            return;
        }
        if (time === "") {
            alert("Укажите время доставки!");
            return;
        }
        if (is_prepaid === true && payment === "Наличные") {
            alert("Нельзя внести предоплату наличными!")
            return;
        }
        if (address === "") {
            alert("Укажите адрес доставки!");
            return;
        }
        if (total === 0) {
            alert("Нужно заказать хотя бы один товар!");
            return;
        }

        const data = new FormData();

        data.append("name", name);
        data.append("surname", surname);
        data.append("age", age);
        data.append("dateDelivery", date);
        data.append("timeDelivery", time);
        data.append("isPrepaid", is_prepaid);
        data.append("address", address);
        data.append("paymentType", payment);
        data.append("listOfProduct", listOfProducts);
        data.append("listOfQuantity", listOfQuantity);
        data.append("totalCost", total);

        console.log(data)

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                if(!this.response.includes("error")) {
                    alert("Ваш заказ оформлен!");
                } else {
                    alert("Что-то пошло не так!\nЗаказ не был создан")
                }
            }
        });

        xhr.open("POST", "api/api/orders/save?=");

        xhr.send(data);
    }

    let productsList = products.map(product => {
        const image = require("./images/" + product.image.key + '.jpg');

        return(
            <tr id={"product_" + product.id}>
                <td>{product.name}</td>
                <td>{product.price} руб.</td>
                <td><img src={image} alt={product.name} className={"order-table-img"}/></td>
                <td>
                    <input type="number" min="0" id={"quantity_" + product.id} onChange={updateTotalCost} defaultValue={0} className={"input-box"}/>
                </td>
            </tr>
        )
    })

    function updateTotalCost() {
        let totalElement = document.getElementById("total_ord");
        let total = 0;

        products.map(i => {
            let quantity = +document.getElementById("quantity_" + i.id).value;
            let price = +i.price;
            total += (price * quantity)
        })

        totalElement.value = total
    }

    return(
        <body>
            <Header/>
            <div className={"page-body"}>
                <h1 className={"page-main-name"}>Заказ</h1>
                <form className={"order-grid"}>
                    <input type="text" id="name_ord" placeholder={"Ваше имя"} className={"input-box"}/>
                    <input type="text" id="surname_ord" placeholder={"Ваша фамилия"} className={"input-box"}/>
                    <input type="number" id="age_ord" placeholder={"Ваш возраст"} min="0" className={"input-box"}/>
                    <h2>Введите дату и время доставки заказа:</h2>
                    <input type="date" id="date_ord" className={"input-box"}/>
                    <input type="time" id="time_ord" className={"input-box"}/>
                    <h2>Желаете внести предоплату?</h2>
                    <input type="checkbox" id="is_prepaid_ord" className={"order-checkbox"}/>
                    <input type="text" id="address_ord" placeholder={"Ваш адрес"} className={"input-box"}/>
                    <h2>Как желаете оплатить?</h2>
                    <select id={"payment_ord"} className={"order-select"}>
                        <option>Карта мир</option>
                        <option>Карта visa</option>
                        <option>Наличные</option>
                        <option>Оформить кредит</option>
                        <option>СБП</option>
                        <option>Криптовалюта</option>
                    </select>
                    <h2>Выберите нужные товары</h2>
                    <table className={"order-table"}>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Стоимость</th>
                            <th>Изображение</th>
                            <th>Желаемое количество</th>
                        </tr>
                        </thead>
                        {productsList}
                    </table>
                    <h2>Итого:</h2>
                    <input type="number" className={"input-box"} id="total_ord" disabled={"true"} defaultValue={0}></input>
                    <button type='button' onClick={PostRequest} className={"create-form-button"}>Оформить заказ</button>
                </form>
            </div>
        </body>
    )
}

export default Order;
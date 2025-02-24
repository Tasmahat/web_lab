import Header from "./Header";

function Order() {
    return(
        <body>
            <Header/>
            <div className={"page-body"}>
                <h1 className={"page-main-name"}>Заказ</h1>
                <div className={"order-grid"}>
                    <div className={"order-address-block"}>
                        <h2>Напишите полный адрес доставки:</h2>
                        <input type={"text"} placeholder={"Введите адрес"}/>
                        <button>Ввод</button>
                    </div>
                    <div className={"order-block-all-orders"}>
                        <h2>Выбранные товары:</h2>
                        <p>Пока не доступно(</p>
                    </div>
                    <div className={"order-payment-type-block"}>
                        <h2>Выбирите способ оплаты:</h2>
                        <select>
                            <option selected={true} disabled={true}>Выберите из списка:</option>
                            <option>При получении</option>
                            <option>По карте</option>
                            <option>По СБП</option>
                        </select>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Order;
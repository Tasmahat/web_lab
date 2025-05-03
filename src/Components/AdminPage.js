import CreateProduct from "./CreateProduct";
import RedactProduct from "./RedactProduct";


function AdminPage() {
    return(
        <body id={"body-admin"}>
            <AdminHeader/>
            <CreateProduct/>
            <RedactProduct/>
        </body>
    )
}

function AdminHeader() {
    return(
        <header className={"header-admin"}>
            <div className={"header-menu-admin"}>
                <a href={"/"}>
                    <button>
                        Вернуться к основной странице
                    </button>
                </a>
                <a href={"#add_product"}>
                    <button>
                        Добавить товар
                    </button>
                </a>
                <a href={"#redact_product"}>
                    <button>
                        Редактировать товар
                    </button>
                </a>
                <a href={"#delete_product"}>
                    <button>
                        Удалить товар
                    </button>
                </a>
                <a href={"#all_orders"}>
                    <button>
                        Все заказы
                    </button>
                </a>
                <a href={"#delete_order"}>
                    <button>
                        Удалить заказ
                    </button>
                </a>
            </div>
        </header>
    )
}


export default AdminPage;
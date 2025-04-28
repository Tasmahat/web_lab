import logo from "./images/logo.png"

function Header() {
    return(
        <header className={"header"}>
            <img src={logo} alt={"Логотип"}></img>
            <h1 className={"header-company-name"}>Чайная<br/>лавка</h1>
            <Menu/>
        </header>
    )
}

function Menu() {
    return(
        <div className={"header-menu"}>
            <a href={"/"}>
                <button>
                    Новости
                </button>
            </a>
            <a href={"/catalogue"}>
                <button>
                    Каталог товаров
                </button>
            </a>
            <a href={"/contacts"}>
                <button>
                    Контакты
                </button>
            </a>
            <a href={"/order"}>
                <button>
                    Форма заказа
                </button>
            </a>
        </div>
    )
}

export default Header;
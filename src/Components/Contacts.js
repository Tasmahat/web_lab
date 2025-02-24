import Header from "./Header";
import image1 from "./images/img_13.png"
import image2 from "./images/img_14.png"
import image3 from "./images/img_15.png"

function Contacts() {
    return(
        <body>
            <Header/>
            <div className={"page-body"}>
                <h2 className={"page-main-name"}>
                    Контакты
                </h2>
                <div className={"contacts-block"}>
                    <img src={image1} alt={"ЗолдикА.И."}/>
                    <div className={"contacts-block-text-block"}>
                        <h2>Золдик Алина Игнатовна</h2>
                        <h3>Генеральный директор</h3>
                        <h4>Телефон: +88005553535</h4>
                        <h5>Телеграмм: @ilovecha</h5>
                        <p>“Чай успокаивает душу и наполняет теплом серце!”</p>
                    </div>
                </div>
                <div className={"contacts-block"}>
                    <img src={image2} alt={"ЛаринМ.Е."}/>
                    <div className={"contacts-block-text-block"}>
                        <h2>Ларин Матвей Евгениевич</h2>
                        <h3>Начальник отдела кадров</h3>
                        <h4>Телефон: +89365707401</h4>
                        <h5>Телеграмм: @chaymanager</h5>
                        <p>
                            “Наши сотрудники выпивают по 5 чашек в день,
                            в нашей компании только истинные ценители чая!”
                        </p>
                    </div>
                </div>
                <div className={"contacts-block"}>
                    <img src={image3} alt={"МуринМ.Д."}/>
                    <div className={"contacts-block-text-block"}>
                        <h2>Мурин Максим Демидович</h2>
                        <h3>Глава техподдержки</h3>
                        <h4>Телефон: +89570348412</h4>
                        <h5>Телеграмм: @teaceo</h5>
                        <p>“Если не знаете какой чай выбрать, выбирайте все! ”</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Contacts;
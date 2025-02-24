import Header from "./Header";
import image1 from "./images/img_4.png";
import image2 from "./images/img_5.png";
import image3 from "./images/img_6.png";
import image4 from "./images/img_7.png";
import image5 from "./images/img_8.png";
import image6 from "./images/img_9.png";
import image7 from "./images/img_10.png";
import image8 from "./images/img_11.png";
import image9 from "./images/img_12.png";

function Catalogue() {
    return(
        <body>
            <Header/>
            <div className={"page-body"}>
                <h2 className={"page-main-name"}>
                    Каталог товаров
                </h2>
                <div className={"catalogue-body"}>
                    <div className={"catalogue-block"}>
                        <img src={image1} alt={"Улун"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Улун</h3>
                            <p>420 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image2} alt={"Анчан"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Анчан</h3>
                            <p>600 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image3} alt={"Сенча"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Сенча</h3>
                            <p>290 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image4} alt={"СихуЛунцзинь"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Сиху Лунцзинь</h3>
                            <p>800 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image5} alt={"БайхаоИнчжень"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Байхао Инжчэнь</h3>
                            <p>1000 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image6} alt={"Пуэр"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Пуэр</h3>
                            <p>200 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image7} alt={"ЧжэньШань"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Чжэнь Шань Сяо Чжун</h3>
                            <p>900 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image8} alt={"МэнДин"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Мэн Дин Хуан Я</h3>
                            <p>500 руб.</p>
                        </div>
                    </div>
                    <div className={"catalogue-block"}>
                        <img src={image9} alt={"БиЛоЧунь"}/>
                        <div className={"catalogue-block-title"}>
                            <h3>Би Ло Чунь</h3>
                            <p>830 руб.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Catalogue;
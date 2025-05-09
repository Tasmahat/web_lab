import Header from "./Header";
import image1 from "./images/img_1.png";
import image2 from "./images/img_2.png";
import image3 from "./images/img_3.png"

function News() {
    return (
        <body>
            <Header/>
            <div className={"page-body"}>
                <h2 className={"page-main-name"}>Новости</h2>
                <div className={"news-block"}>
                    <img src={image1} alt={"Картинка1"}/>
                    <h3>А вы знали?</h3>
                    <p>
                        Что для сборки годится не все листья чая,
                        а только молодой (еще не одревесневевший)
                        зелёный чайный побег, на конце которого не
                        более 2-3 листьев и почка (типса).
                        Почка может быть либо только завязавшейся, либо
                        полураспустившейся. Полностью распустившиеся цветы для
                        чая ценности не имеют, т.к. совершенно не передают заварке
                        свой аромат.
                    </p>
                </div>
                <div className={"news-block"}>
                    <img src={image2} alt={"Картинка2"}/>
                    <h3>Это не фотошоп!</h3>
                    <p>
                        Это настоящий вид чая. Чай анчан или น้ำอัญชัน -
                        вид тайского травянистого чая, приготовленный из
                        отвара или настоя цветочных лепестков или целого
                        цветка растения клитории тройчатой (Clitoria ternatea).
                        Одной из особенностей чая является тот факт, что он
                        меняет цвет в зависимости от уровня pH добавленного в него
                        вещества, например, добавление лимонного сока в чай
                        сделает его фиолетовым.
                    </p>
                </div>
                <div className={"news-block"}>
                    <img src={image3} alt={"Картинка2"}/>
                    <h3>Чайная церемония</h3>
                    <p>
                        Китайская чайная церемония – это особая философия и культура,
                        зародившаяся в древние времена. Китайцы не просто не спеша пьют
                        чай, а наслаждаются им, вдыхая его аромат, ощущая вкус и
                        изменение цвета напитка в процессе его настаивания. По
                        древним традициям чайная церемония позволяет достичь
                        гармонии, умиротворения и хорошего здоровья. Чайная
                        церемония готовится по определенным правилам с учетом
                        мельчайших нюансов. Чтобы напиток полностью раскрыл свои
                        полезные свойства для тела и души, не рекомендуется пить
                        слишком горячий чай, так как высокая температура напитка не
                        даст возможности в полной мере оценить его аромат и вкус.
                        Следит за этим мастер, который проводит это мероприятие.
                    </p>
                </div>
            </div>
        </body>
    )
}

export default News;
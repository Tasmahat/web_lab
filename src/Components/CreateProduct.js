function CreateProduct() {
    let loadingImage = false;
    let imageId, file, name, price;

    function fileListener(e) {
        file = e.target.files[0];
    }

    function PostRequest() {
        name = document.getElementById("name").value;
        price = document.getElementById("price").value;

        if(name === "") {
            alert("Напишите название чая!");
            return;
        }

        if(price === "") {
            alert("Напишите цену чая!");
            return;
        } else if(isNaN(+price)) {
            alert("Цена пишется цифрами!");
            return;
        }

        if (file === undefined) {
            alert("У чая обязательно должна быть картинка!");
            return;
        }

        loadingImage = true;
        console.log(loadingImage+"B")
        const data = new FormData();

        data.append("file", file);

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                imageId = this.response.substring(6).split(',',1).toString();
                loadingImage = false;
            }
        });

        xhr.open("POST", "api/api/images/save?=");

        xhr.send(data);

        uploadProduct();
    }

    async function uploadProduct() {
        while(loadingImage) {
            await new Promise(r => setTimeout(r, 500));
        }

        const data = new FormData();
        data.append("name", name);
        data.append("price", price);
        data.append("imageId", imageId)

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.response);
                if(!this.response.includes("error")) {
                    alert("Чай был создан!");
                } else {
                    alert("Что-то пошло не так!\nЧай не был создан")
                }
            }
        });

        xhr.open("POST", "api/api/products/save?=");

        xhr.send(data);
    }

    return(
        <div className={"tab-content create-tea-form"} id={"add_product"}>
            <input type="text" id="name" placeholder={"Название чая"} className={"input-box"}/>
            <input type="text" id="price" placeholder={"Стоимость чая"} className={"input-box"}/>
            <input type={"file"} id={"file"} onChange={fileListener} className={"add-file"}></input>
            <button type='button' onClick={PostRequest} className={"create-form-button"}>Добавить чай</button>
        </div>
    )
}

export default CreateProduct
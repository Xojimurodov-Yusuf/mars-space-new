let mahsulot = [
    {
        modelName: "Mars Rug",
        price: "100 coin",
        qoldiq: "24 dona mavjud",
        rasmi: "mars-img/image 10 (1).svg"
    },

    {
        modelName: "Keyboard Sticker",
        price: "49 coin",
        qoldiq: "11 dona mavjud",
        rasmi: "mars-img/image 22 (2).svg"
    },

    {
        modelName: "Smart watch",
        price: "899 coin",
        qoldiq: "4 dona mavjud",
        rasmi: "mars-img/watch.svg"
    },

    {
        modelName: "Wireless keyboard",
        price: "350 coin",
        qoldiq: "0 dona mavjud",
        rasmi: "mars-img/keyvoard.svg"
    },

    {
        modelName: "Mouse",
        price: "359 coin",
        qoldiq: "24 dona mavjud",
        rasmi: "mars-img/sichqon.svg"
    },

    {
        modelName: "Airpods",
        price: "499 coin",
        qoldiq: "4 dona mavjud",
        rasmi: "mars-img/airpods.svg"
    },

    {
        modelName: "Powerbank",
        price: "899 coin",
        qoldiq: "5 dona mavjud",
        rasmi: "mars-img/powerbank.svg"
    },

    {
        modelName: "USB Flash drive",
        price: "299 coin",
        qoldiq: "21 dona mavjud",
        rasmi: "mars-img/usb.svg"
    },

    {
        modelName: "Smartphone",
        price: "3699 coin",
        qoldiq: "2 dona mavjud",
        rasmi: "mars-img/smartphone.svg"
    },

    {
        modelName: "Play Station 5",
        price: "7449 coin",
        qoldiq: "1 dona mavjud",
        rasmi: "mars-img/play.svg"
    },

    {
        modelName: "Yandex Station",
        price: "1999 coin",
        qoldiq: "21 dona mavjud",
        rasmi: "mars-img/alisa.svg"
    },

    {
        modelName: "Samsung Planshet",
        price: "4999 coin",
        qoldiq: "24 dona mavjud",
        rasmi: "mars-img/planshet.svg"
    },

]

function kartachqar(kartalar) {
    let boxFather = document.querySelector(".box-father")
    boxFather.innerHTML = "";
    let newcard = kartalar.map((element) => {
        let creatediv = document.createElement("div")
        creatediv.innerHTML = `
        <div class="box">
                        <img src="${element.rasmi}" alt="image">

                        <div class="items">
                            <p class="model-name">${element.modelName}</p>
                            <div class="coin-item">
                                <img src="mars-img/Coin 1 (1).svg" alt="coin">
                                <p class="price">${element.price}</p>
                            </div>

                            <p class="kolichestva">${element.qoldiq}</p>
                        </div>
                    </div>
        `
        boxFather.append(creatediv)
    })


}

kartachqar(mahsulot)

let input = document.querySelector(".input")

input.addEventListener("input", () => {
    function qidiruv(qidir) {
        let input = document.querySelector(".input")
        let inputQiymati = input.value.toLowerCase()
        let topdi = qidir.filter((malumot) => malumot.modelName.toLowerCase().includes(inputQiymati))
        kartachqar(topdi)
    }

    qidiruv(mahsulot)
})
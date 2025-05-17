let oquvchi = document.getElementById("oquvchi")
let otaOna = document.getElementById("otaOna")

oquvchi.addEventListener("click", () => {
    let bos = oquvchi.classList.add("active")
    let ochir = otaOna.classList.remove("active")
})

otaOna.addEventListener("click", () => {
    let bosing = otaOna.classList.add("active")
    let ochiring = oquvchi.classList.remove("active")
})


let logID = [
    {
        name: "Yusuf Xojimurodov",
        daraja: "⭐⭐⭐⭐",
        coin: 590,
        id: 455545,
        password: 7777,
        teacherName: "F2-2394|Ertan Emirhan",
        rank: "Bronza"
    },

    {
        name: "Emirhan Ertan",
        daraja: "⭐⭐⭐⭐⭐",
        coin: 1090,
        id: 3434,
        password: 5555,
        teacherName: "F2-2394|Ertan Emirhan",
        rank: "Gold"
    },

    {
        name: "Abdurasul Ubaydullayev",
        daraja: "⭐⭐⭐⭐⭐",
        coin: 49,
        id: 5565,
        password: 34325,
        teacherName: "Teacher Name : Mironshox",
        rank: "Bronza"
    },

    {
        name: "Aziz Xudoyorov",
        daraja: "⭐",
        coin: 0,
        id: 23332,
        password: 20102010,
        teacherName: "F2-2394|Ertan Emirhan",
        rank: "Gey"
    },

    {
        name: "Jasur Rustamov",
        daraja: "⭐⭐⭐⭐⭐",
        coin: -90,
        id: 20102010,
        password: 2394,
        teacherName: "Teacher Name : Mironshox",
        rank: "Silver"
    },
];



let form = document.getElementById("form");
let inputID = document.getElementById("login");
let inputPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let idValue = inputID.value;
    let passwordValue = inputPassword.value;

    let user = logID.find(logid => logid.id == idValue && logid.password == passwordValue);

    if (user) {
        let saqla = localStorage.setItem('logID', JSON.stringify(user));
        window.location.href = "space.html";
    } else {
        let xato = document.getElementById("xato")
        xato.textContent = "Login yoki Parol xato"
        xato.style.color = "rgb(255, 134, 134)"
        xato.style.fontSize = "18px"
        setTimeout(() => {
            xato.remove()
        }, 3000);

    }
});

let getInfo = JSON.parse(localStorage.getItem("logID"))
let studentname = document.querySelector(".student-name")
let yulduz = document.querySelector(".yulduz")
let coin = document.querySelector(".coin-number")
let rank = document.querySelector(".rank-number")
let teacher = document.querySelector(".teacher-name")

yulduz.textContent = getInfo.daraja
studentname.textContent = getInfo.name
coin.textContent = getInfo.coin
rank.textContent = getInfo.rank
teacher.textContent = getInfo.teacherName


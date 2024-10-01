 const one = prompt("Ведіть 1")
 const two = prompt("Ведіть 2")

 if (one){
     console.log(one)
 } else {
     alert("Текст не введено")
 }

 if (two){
     alert("Обидва поля заповнені")
     console.log(two)
 } else {
     alert("Текст не введено")
 }
//-------------------------------------------------
 let three = Number(prompt("Ведіть число від 5"))
 let four = Number(prompt("Ведіть число від 5"))


 if ((three + four) > 10){
 alert("Сума більша за 10")
 } else {
     alert("Сума менша або дорівнює 10")
 }
///-------------------------------------------------
 let five = prompt("Ведіть текст який містить javascript")
 let upFive = five.toUpperCase()
 let check = upFive.includes("JAVASCRIPT")

 if (check){
     alert("Текст містить слово JavaScript")
 } else {
     alert("Текст не містить слово JavaScript")
 }
//-------------------------------------------------
 let text = Number(prompt("Ведіть цифру до 20"))

 if (text >= 10 && text < 20){
     alert("Число входить в діапазон від 10 до 20")
 } else {
     alert("Число не входить в діапазон від 10 до 20")
 }
//-------------------------------------------------
let first = prompt("Ведіть ім'я").length
let secont = prompt("Ведіть пошту").includes("@gmail.com")
let third = prompt("Ведіть пароль").length
console.log(first)
console.log(secont)
console.log(third)

if (first >= 6 && secont === true && third >= 5) {
    alert("Успішна реєстрація")
} else{
    alert("Не все введено")
}
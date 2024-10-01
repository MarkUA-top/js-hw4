// const one = prompt("Ведіть 1")
// const two = prompt("Ведіть 2")

// if (one){
//     console.log(one)
// } else {
//     alert("Текст не введено")
// }

// if (two){
//     alert("Обидва поля заповнені")
//     console.log(two)
// } else {
//     alert("Текст не введено")
// }
//-------------------------------------------------
// let one = Number(prompt("one"))
// let two = Number(prompt("two"))


// if (one + two > 10){
// alert("Сума більша за 10")
// } else {
//     alert("Сума менша або дорівнює 10")
// }
//-------------------------------------------------
// let text = prompt("Ведіть текст")
// let check = text.includes("JavaScript")

// if (check){
//     alert("Текст містить слово JavaScript")
// } else {
//     alert("Текст не містить слово JavaScript")
// }
//-------------------------------------------------
// let text = Number(prompt("Ведіть текст"))

// if (text >= 10 && text < 20){
//     alert("Число входить в діапазон від 10 до 20")
// } else {
//     alert("Число не входить в діапазон від 10 до 20")
// }
//-------------------------------------------------
let one = prompt("Ведіть ім'я").length
let two = prompt("Ведіть пошту").includes("@gmail.com")
let three = prompt("Ведіть пароль").length
console.log(one)
console.log(two)
console.log(three)

if (one >= 6 && two === true && three >= 5) {
    alert("Успішна реєстрація")
} else{
    alert("Не все введено")
}
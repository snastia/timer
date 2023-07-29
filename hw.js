// 1

// let count = 0

// const intervalId = setInterval(() => {
//     count += 1
//     if (count === 5) {
//         clearInterval(intervalId)
//     } else {
//        alert("Hey!") 
//     }
// }, 1500)

// 2

const text = document.querySelector(".text")

const intervalSetId = setInterval(() => {
  const color = Math.floor(Math.random()*16777215).toString(16);
  text.style.color = `#${color}`
}, 2000)

// 3

const classicBtn = document.querySelector(".btn")
const btnJs = document.querySelector(".btn-js")
const sec = document.querySelector(".seconds")

let setTime = 0

const timerId = setInterval(() => {
  setTime += 1
  sec.textContent = setTime
  const left = Math.random()*100
  const top = Math.random()*100
  btnJs.style.left = `${left}%`
  btnJs.style.top = `${top}%`
}, 1000)

let score = 0

classicBtn.addEventListener("click", () => {
 score ++
 sec.textContent = score
})


// 4

const input = document.querySelector(".input-js")
const btnSend = document.querySelector(".send-btn")

btnSend.addEventListener("click", alrt)
function alrt(){setTimeout(() => {alert("hi")}, input.value*1000)}
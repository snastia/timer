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



// 3

const classicBtn = document.querySelector(".btn")
const btnJs = document.querySelector(".btn-js")
const sec = document.querySelector(".seconds")

let setTime = 0

const timerId = setInterval(() => {
  setTime += 1
  sec.textContent = setTime

  
}, 1000)

// 4

const input = document.querySelector(".input-js")
const btnSend = document.querySelector(".send-btn")


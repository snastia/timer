const classicBtn = document.querySelector(".btn")
const btnJs = document.querySelector(".btn-js")
const sec = document.querySelector(".seconds")

let setTime = 60

const timerId = setInterval(() => {
  setTime -= 1
  sec.textContent = setTime
  const left = Math.random()*100
  const top = Math.random()*100
  btnJs.style.left = `${left}%`
  btnJs.style.top = `${top}%`

  if(setTime === 30){
    alert("залишилося менше половини часу")
  }
}, 1000)

// 2

const secEl = document.querySelector(".sec")

let setTimer = 30

const timer = setInterval(() => {
  setTimer -= 0.1
  secEl.textContent = setTimer
  const left = Math.random()*100
  const top = Math.random()*100
  btnJs.style.left = `${left}%`
  btnJs.style.top = `${top}%`
}, 1000)
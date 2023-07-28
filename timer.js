const alertEl = document.querySelector(".js-alert")

alertEl.addEventListener("click", onNotificationClick)

showNotification()

setTimeout(hideNotification, 3000)

function showNotification() {
    alertEl.classList.add("is-visible")
}

function hideNotification() {
    alertEl.classList.remove("is-visible")
}

function onNotificationClick() {
    hideNotification()
}

// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, 
//  * починаючи від from і закінчуючи to.

function printNumbers(from, to) {
    let num = from
    setInterval(function(){
        if (num <= to) {
            clearInterval()
        } else{
            num ++
            console.log(num)
        }
    }, 1000)
}

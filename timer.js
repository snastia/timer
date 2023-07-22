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

/**
 * Коли запуститься запланована функція?
 * 1.Після циклу.
 * 2. До циклу.
 * 3. На початку циклу.
 * Що буде показувати в консолі?
 */

// let a = 0;

// setTimeout(() => console.log('а в setTimeout', a), 100); // ?

// припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 10000; i++) {
//   a += 1;
//   console.log('а всередині циклу', a);
// }
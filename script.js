const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

console.log(hours)

const relogio = setInterval(function time() {
    let dataToday = new Date();

    let hora = dataToday.getHours();
    let min = dataToday.getMinutes();
    let sec = dataToday.getSeconds();

    if (hora < 10) hora = "0" + hora;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    hours.textContent = hora;
    minutes.textContent = min;
    seconds.textContent = sec;
})
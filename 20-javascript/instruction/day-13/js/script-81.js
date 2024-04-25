
const hourEl = document.querySelector("#clock li:nth-child(1)");
const secondEl = document.querySelector("#clock li:nth-child(2)");
const minuteEl = document.querySelector("#clock li:nth-child(3)");


const setClock = () => { 
    const dateTime = new Date();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    hourEl.innerHTML = hour;
    minuteEl.innerHTML = String(minute).length === 1 ? `0${minute}` : minute;

    secondEl.classList.toggle("hidden");
}

setInterval(setClock, 1000);
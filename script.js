const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    || window.navigator.standalone === true;

if(isStandalone){
    document.documentElement.classList.add("standalone");
}

const colours = [
    "purple",
    "red",
    "blue",
    "green",
    "orange"
];

let colourIndex = 0;

function updateClock(){

    const now = new Date();

    const yyyy = now.getFullYear();

    const mm = String(now.getMonth()+1).padStart(2,"0");

    const dd = String(now.getDate()).padStart(2,"0");

    const hh = String(now.getHours()).padStart(2,"0");

    const min = String(now.getMinutes()).padStart(2,"0");

    const ss = String(now.getSeconds()).padStart(2,"0");

    dateElement.innerHTML = `${yyyy}/${mm}/${dd}`;

    timeElement.innerHTML = `${hh}:${min}:${ss}`;

    dateElement.style.color = colours[colourIndex];
    timeElement.style.color = colours[colourIndex];

    colourIndex++;

    if(colourIndex >= colours.length){
        colourIndex = 0;
    }

}

updateClock();

setInterval(updateClock,1000);

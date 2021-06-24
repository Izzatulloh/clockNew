const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const h = document.querySelector(".h");
const m = document.querySelector(".m");
const s = document.querySelector(".s");

console.log((h.style.transform = "rotate(90deg)"));

let date2 = new Date();
let newSek =date2.getSeconds();
let oursek = newSek * 6;

function clock() {

  let date = new Date();
let sek = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
  oursek +=0.25

  if (min < 10) {
    minutes.innerHTML = "0" + min;
  } else {
    minutes.innerHTML = min;
  }
  if (hour < 10) {
    hours.innerHTML = "0" + hour;
  } else {
    hours.innerHTML = hour;
  }

  s.style.transform = `rotate(${oursek }deg)`;
  m.style.transform = `rotate(${min * 6}deg)`;
  h.style.transform = `rotate(${hour * 30}deg)`;
  setTimeout(clock, 1000/24);
}
clock();

const links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");
// addEventlistener - elementga voqea qowadi('voqea turi', voqea sodir bolgandagi amal)

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    // e - element haqida barca malumot beradigan argument
    // prevenDefoult funksiyasi silka boyica bowqa joyga otib ketwni oldini oladi
    // this bu degani ma'nodagi kalit so'zi bolib, hozirgi aynan holatda bosilgan elementimizni qaytarib bervotti
    e.preventDefault();
    // classList - elementning class iga ulanadi
    // add - class qowadi
    // remove - classni ociradi
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove("active");
      tabs[x].classList.remove("active");
    }
    tab(i);
  });
}

function tab(i) {
  links[i].classList.add("active");
  tabs[i].classList.add("active");
}



const stopwatchHours = document.querySelector('.stopwatch__hours')

const stopwatchMinutes = document.querySelector('.stopwatch__minutes')
const stopwatchSeconds = document.querySelector('.stopwatch__seconds')
const stopwatchBtn = document.querySelector('.stopwatch__btn')
const point = document.querySelector('.tabsLink__span')


stopwatchBtn.addEventListener('click', function(){
  if(stopwatchBtn.innerHTML == 'start'){
    stopwatchBtn.innerHTML = 'stop'
    point.classList.add('active')
  } else if( stopwatchBtn.innerHTML == 'stop'){
    point.classList.remove('active')
    point.classList.add('active_clear')
    stopwatchBtn.innerHTML= 'clear'
  } else if (stopwatchBtn.innerHTML== 'clear'){
    stopwatchBtn.innerHTML= 'start'
    point.classList.remove('active_clear')
  }
})



function watch(){
  if( stopwatchBtn.innerHTML == 'stop'){
    stopwatchSeconds.innerHTML++
    if(stopwatchSeconds.innerHTML>59){
      stopwatchSeconds.innerHTML = 0
      stopwatchMinutes.innerHTML++
      if(stopwatchMinutes.innerHTML > 59){
        stopwatchMinutes.innerHTML = 0
        stopwatchHours.innerHTML++
      }
    }
  }else if (stopwatchBtn.innerHTML== 'start'){
    stopwatchSeconds.innerHTML=0
    stopwatchMinutes.innerHTML=0
    stopwatchHours.innerHTML=0
  }
  setTimeout(() => watch(), 1000)
}
watch()
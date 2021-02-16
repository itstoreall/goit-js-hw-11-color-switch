import colors from "./colors.js";

/**
 * 
 * Есть массив цветов в hex-формате и 
 * кнопки Start и Stop.
 * 
 * Напиши скрипт, который после нажатия кнопки 
 * Start, раз в секунду меняет цвет фона body 
 * на случайное значение из массива используя 
 * инлайн-стиль. При нажатии на кнопку Stop, 
 * изменение цвета фона должно 
 * останавливаться
 * 
 * https://github.com/goitacademy/javascript-homework/blob/master/homework-11/color-switch/README.md
 * 
 */

const refs = {
   startBtn: document.querySelector('button[data-action="start"]'),
   stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', switchOn);

let isActive = false;
let switchId = null;

// Изменяет цвета
function setColor() {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.setAttribute("style", `background-color: ${currentColor}`);
};

// Функция рандом
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Запускает функцию
function switchOn() {
  if (isActive) {
    return;
  };

  refs.stopBtn.addEventListener('click', switchOff);
  isActive = true;
  switchId = setInterval(() => setColor(), 1000);
};

// Отключает функцию
function switchOff() {
    clearInterval(switchId);
    isActive = null;
    refs.stopBtn.removeEventListener('click', switchOff);
  };
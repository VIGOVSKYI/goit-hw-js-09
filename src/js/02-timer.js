import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateFormRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let timerId = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notiflix.Notify.failure('Please choose a date in the future!'),
        (btnStartRef.disabled = true))
      : (btnStartRef.disabled = false);

    userDate = selectedDates[0];
  },
};

const getConvertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const getDifferenceDate = () => userDate - new Date();

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const setTimeToHTML = () => {
  const { days, hours, minutes, seconds } = getConvertMs(getDifferenceDate());
  daysRef.textContent = addLeadingZero(days);
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);
};

const onStartTimer = () => {
  timerId = setInterval(() => {
    if (getDifferenceDate() <= 0) {
      clearInterval(timerId);
      return;
    }
    setTimeToHTML();
  }, 1000);

  Notiflix.Notify.success('The countdown has started!');
};

flatpickr(dateFormRef, options);
btnStartRef.disabled = true;
btnStartRef.addEventListener('click', onStartTimer);



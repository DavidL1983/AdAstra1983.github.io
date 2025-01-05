// VARIABLE DECLARATIONS - countdown: Refers to the entire countdown container (<div id="countdown">). daysEl, hoursEl, minutesEl, and secondsEl: Point to the individual HTML elements for displaying the number of days, hours, minutes, and seconds left.
const countdown = document.getElementById('countdown');
const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

// FUNCTION TO UPDATE COUNTDOWN
// 1.Current Date and New Year Date
function updateCountdown(){
  const currentDate = new Date();
  const newYearDate = new Date(currentDate.getFullYear() +1, 0, 1);
// 2.Calculate Time Remaining
  const timeRemaining = newYearDate - currentDate;
// 3.Convert Time Remaining into daysE1, Hours, Minutes, and secondsE1. 
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours =Math.floor((timeRemaining % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((timeRemaining % (1000*60*60))/(1000*60));
  const seconds = Math.floor((timeRemaining % (1000*60))/1000);
// 4.Update Countdown Elements
  daysE1.innerHTML = days;
  hoursE1.innerHTML = hours;
  minutesE1.innerHTML = minutes;
  secondsE1.innerHTML = seconds;
}

// INITIALIZE COUNTDOWN AND UPDATE EVERY SECOND - 'updateCountdown()': Runs the 'updateCountdown function' once immediately to display the initial countdown. 'setInterval(updateCountdown, 1000)': Sets a timer to call the updateCountdown function every 1000 milliseconds (1 second) to continuously update the countdown.
  updateCountdown();
  setInterval(updateCountdown, 1000);
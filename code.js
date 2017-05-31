var timeinterval;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


function initializeClock(id, endtime) {
  if (timeinterval) {
    clearInterval(timeinterval);
  }
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total >= 0) {
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    } else {
      clearInterval(timeinterval);
    }
  }

  updateClock(); // removed } - unnecessary curly brace
  timeinterval = setInterval(updateClock, 1000); // removed () - unnecessary braces after updateClock
}
//initializeClock.call(id, endtime);
//updateClock.call();

function startTimer(id) {
  var clock = document.getElementById(id);
  var days = parseInt(clock.querySelector('#days input').value) || 0;
  var hours = parseInt(clock.querySelector('#hours input').value) || 0;
  var minutes = parseInt(clock.querySelector('#minutes input').value) || 0;
  var seconds = parseInt(clock.querySelector('#seconds input').value) || 0;

var deadline = new Date(Date.now() + (days * 86400 + hours * 3600 + minutes * 60 + seconds) * 1000);
initializeClock('clockdiv', deadline);
}

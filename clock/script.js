const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const alarmStatus = document.getElementById("alarmStatus");

let alarmTime = null;

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;

  timeElement.textContent = `${pad(hour12)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  checkAlarm(hour12, minutes, seconds, ampm);
}

// Function to pad numbers below 10 with a leading zero
function pad(number) {
  return number < 10 ? `0${number}` : number;
}

// Alarm functionality
setAlarmButton.addEventListener("click", () => {
  const alarmValue = alarmTimeInput.value;
  if (alarmValue) {
    alarmTime = alarmValue;
    alarmStatus.textContent = `Alarm set for ${alarmValue}`;
  } else {
    alarmStatus.textContent = "Please select a valid time.";
  }
});

function checkAlarm(hour, minute, second, ampm) {
  if (alarmTime) {
    const [alarmHour, alarmMinute] = alarmTime.split(":").map(Number);
    const alarmPeriod = alarmHour >= 12 ? "PM" : "AM";
    const alarmHour12 = alarmHour % 12 || 12;

    if (
      hour === alarmHour12 &&
      minute === alarmMinute &&
      second === 0 &&
      ampm === alarmPeriod
    ) {
      alert("⏰ Alarm ringing!");
      alarmTime = null; // Reset the alarm
      alarmStatus.textContent = "";
    }
  }
}

// Start the clock
setInterval(updateClock, 1000);
updateClock();

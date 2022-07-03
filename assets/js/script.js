let currentDayEl = $("#currentDay");

function getCurrDay() {
  let currDay = moment().format("dddd, MMMM Do");
  currentDayEl.text(currDay);
}

getCurrDay();
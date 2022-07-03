let currentDayEl = $("#currentDay");
let textAreaEl = $("textarea");
let textAreas = [
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#13"),
  $("#14"),
  $("#15"),
  $("#16"),
  $("#17"),
];

function getCurrDay() {
  let currDay = moment().format("dddd, MMMM Do");
  currentDayEl.text(currDay);
}

function textAreaColor() {
    let currHour = moment().hour();
  
    for (let i = 0; i < textAreas.length; i++) {
      if (currHour == textAreas[i].attr("id")) {
        textAreas[i].addClass("present");
      } else if (currHour > textAreas[i].attr("id")) {
        textAreas[i].addClass("past");
      } else {
        textAreas[i].addClass("future");
      }
    }
  }

getCurrDay();
textAreaColor();
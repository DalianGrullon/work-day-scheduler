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

function storageCommit(textArea, hour) {
  let eventData = textArea.val().trim();
  localStorage.setItem(hour, eventData);

  if (eventData === "") {
    localStorage.removeItem(hour);
  }
}

function storageDisplay() {
  for (let i = 0; i < textAreas.length; i++) {
    let storageKey = textAreas[i].siblings("div").text();
    textAreas[i].text(localStorage.getItem(storageKey));
  }
}

getCurrDay();
textAreaColor();
storageDisplay();

$(".saveBtn").click(function() {
    let siblingEl = $(this).siblings("textarea");
    let siblingElHour = $(this).siblings("div").text();
    storageCommit(siblingEl, siblingElHour);
});
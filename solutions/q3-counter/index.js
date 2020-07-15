$(function() {
  $("#increase-link").click(function() {
    let currentNumber = $("#counter").text();
    currentNumber = parseInt(currentNumber);
    currentNumber += 1;
    $("#counter").text(currentNumber);
  });

  $("#decrease-link").click(function() {
    let currentNumber = getNumber();
    currentNumber -= 1;
    $("#counter").text(currentNumber);
  });

  $("#reset-link").click(function() {
    $("#counter").text("0");
  });
});

function getNumber() {
  let currentNumber = $("#counter").text();
  currentNumber = parseInt(currentNumber);
  return currentNumber;
}

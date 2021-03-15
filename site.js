var attempt1 = document.getElementById("password");
var attempt2 = document.getElementById("again");

function myEvent() {
  if(attempt1.value != attempt2.value)
  alert("Passwords do not match. Please try again.");
}

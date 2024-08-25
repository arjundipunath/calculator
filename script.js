const screen = document.getElementById("display");

function clicks(input) {
  display.value += input;
}

function clears() {
  display.value = " ";
}

function calcu() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

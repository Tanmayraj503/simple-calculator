const display= document.getElementById("display");

function append(value) {
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}
function clearAll() {
    display.value = "0";
}

function calculateResult() {
    try{
        display.value=eval(display.value);
    } catch {
        display.value = "Error";
    }
    return display.value;
}


let bracketToggle = true;

function togglebracket() {
  if (display.value === "0") {
    display.value = "";
  }

  if (bracketToggle) {
    display.value += "(";
  } else {
    display.value += ")";
  }

  bracketToggle = !bracketToggle; // flip the state
}
   




let screenElement = document.getElementById("calculator-screen");
localStorage.removeItem("firstNumber");
localStorage.removeItem("secondNumber");
localStorage.removeItem("operator");

const pushDigits = (digit) => {
  if (!localStorage.getItem("operator")) {
    if (!localStorage.getItem("firstNumber")) {
      localStorage.setItem("firstNumber", digit);
      screenElement.innerHTML = digit;
    } else {
      if (localStorage.getItem("firstNumber").length == 10) {
        alert("First number overflow error");
      } else {
        console.log(typeof digit);
        localStorage.setItem(
          "firstNumber",
          localStorage.getItem("firstNumber") + digit
        );
        screenElement.innerHTML = localStorage.getItem("firstNumber");
      }
    }
  } else {
    if (!localStorage.getItem("secondNumber")) {
      localStorage.setItem("secondNumber", digit);
      screenElement.innerHTML = digit;
    } else {
      if (localStorage.getItem("secondNumber").length == 10) {
        alert("Second number overflow error");
      } else {
        localStorage.setItem(
          "secondNumber",
          localStorage.getItem("secondNumber") + digit
        );
        screenElement.innerHTML = localStorage.getItem("secondNumber");
      }
    }
  }
};

const pushOperators = (event) => {
  let operator = event.target.id.split("-")[1];


  if (operator != "result") {
    localStorage.setItem("operator", operator);
  } else {
    if (!localStorage.getItem("firstNumber")) {
      alert("Enter first number");
    } else if (!localStorage.getItem("secondNumber")) {
      alert("Enter second number");
    } else {
      let firstNumber = Number(localStorage.getItem("firstNumber"));
      let secondNumber = Number(localStorage.getItem("secondNumber"));
      let mathOperator = localStorage.getItem("operator");

      let result = 0;

      switch (mathOperator) {
        case "divide":
          result = firstNumber / secondNumber;
          break;
        case "substract":
          result = firstNumber - secondNumber;
          break;
        case "add":
          result = firstNumber + secondNumber;
          break;
        case "multiply":
          result = firstNumber * secondNumber;
          break;
        default:
          break;
      }

      screenElement.innerHTML = result;

      localStorage.removeItem("secondNumber");
      localStorage.removeItem("operator");
      localStorage.setItem("firstNumber", result);
    }
  }
};

const convertFloatNumber = () => {
  let firstNumber = localStorage.getItem("firstNumber");
  let secondNumber = localStorage.getItem("secondNumber");

  if (!firstNumber && !secondNumber) {
    // If any number hasn't entered yet
    localStorage.setItem("firstNumber", "0.");
    screenElement.innerHTML = "0.";
  } else if (firstNumber && !secondNumber) {
    if (!localStorage.getItem("operator")) {
      // If second number hasn't entered yet but first number has entered

      if (firstNumber.includes(".")) {
        alert("You already set first number as float");
        return;
      }

      localStorage.setItem("firstNumber", firstNumber + ".");
      screenElement.innerHTML = localStorage.getItem("firstNumber");
    } else {
      // If first number has entered but second number hasn't entered yet
      localStorage.setItem("secondNumber", "0.");
      screenElement.innerHTML = localStorage.getItem("secondNumber");
    }
  } else {
    // If first number and second number has entered

    if (secondNumber.includes(".")) {
      alert("You already set second number as float");
      return;
    }

    localStorage.setItem("secondNumber", secondNumber + ".");
    screenElement.innerHTML = localStorage.getItem("secondNumber");
  }
};

const clearCalculator = () => {
  localStorage.removeItem("firstNumber");
  localStorage.removeItem("secondNumber");
  localStorage.removeItem("operator");
  screenElement.innerHTML = "";
};

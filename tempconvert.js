function convertTemp() {
    const input = parseFloat(document.getElementById('inputTemp').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    let result;
  
    if (isNaN(input)) {
      document.getElementById('result').textContent = "Please enter a valid number.";
      return;
    }
  
    // Convert to Celsius first
    let celsius;
    if (from === "celsius") {
      celsius = input;
    } else if (from === "fahrenheit") {
      celsius = (input - 32) * 5 / 9;
    } else if (from === "kelvin") {
      celsius = input - 273.15;
    }
  
    // Convert from Celsius to target unit
    if (to === "celsius") {
      result = celsius;
    } else if (to === "fahrenheit") {
      result = (celsius * 9 / 5) + 32;
    } else if (to === "kelvin") {
      result = celsius + 273.15;
    }
  
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)}°`;
  }
  
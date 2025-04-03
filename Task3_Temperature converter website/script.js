function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultDiv = document.getElementById("result");

    // Validate input
    if (temp === "" || isNaN(temp)) {
        resultDiv.innerHTML = "❌ Please enter a valid number!";
        resultDiv.style.color = "red";
        return;
    }

    temp = parseFloat(temp);
    let convertedTemperatures = "";

    if (unit === "C") {
        convertedTemperatures = `🌡️ ${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F | ${(temp + 273.15).toFixed(2)}K`;
    } else if (unit === "F") {
        convertedTemperatures = `🌡️ ${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (unit === "K") {
        convertedTemperatures = `🌡️ ${temp}K = ${(temp - 273.15).toFixed(2)}°C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    resultDiv.innerHTML = convertedTemperatures;
    resultDiv.style.color = "black";
}

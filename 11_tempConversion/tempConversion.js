function convertToCelsius(Fnumber) {
    const Celed = Math.round(((Fnumber - 32) * 5/9) * 10) / 10;
    return Celed;
}

function convertToFahrenheit(Cnumber) {
    const Fahed = Math.round((Cnumber * 9/5 + 32) * 10) / 10;
    return Fahed;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

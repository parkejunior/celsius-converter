const celsiusInput = document.querySelector('#celsiusInput')
const kelvinIndicator = document.querySelector('#kelvinIndicator')
const fahrenheitIndicator = document.querySelector('#fahrenheitIndicator')

changeIndicators()

celsiusInput.addEventListener('keyup', (e) => {
  console.log("Key Pressed: " + celsiusInput.value)
  changeIndicators()
})

celsiusInput.addEventListener('change', function (e) {
  console.log("Changed: " + celsiusInput.value)
  changeIndicators()
})

function changeIndicators() {
  const celsius = Number(celsiusInput.value)

  kelvinIndicator.innerHTML = convertToKelvin(celsius)
  fahrenheitIndicator.innerHTML = convertToFahrenheit(celsius)
}

function convertToKelvin(celsius) {
  return roundDecimal(celsius + 273.15)
}

function convertToFahrenheit(celsius) {
  return roundDecimal(celsius * 1.8 + 32)
}

function roundDecimal(number) {
  return Math.round(number * 100) / 100
}
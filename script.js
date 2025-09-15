// variables
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const btnConvert = document.getElementById('btn-convert');

// Formula
function convertCtoF(celsius) {
   const formula = celsius * (9/5) + 32;
   return formula;
};

// event listener
btnConvert.addEventListener('click', function() {
   const celsiusTextValue = celsiusInput.value;
   fahrenheitInput.value = convertCtoF(celsiusTextValue);
});

celsiusInput.addEventListener('input', function() {
   if (celsiusInput.value === '') {
      fahrenheitInput.value = '';
   }
})
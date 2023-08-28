// Referencia el id "inputCard" del html y lo guarda en una constante.
const inputCard = document.querySelector("#inputCard");
// Referencia el id "inputDate" del html y lo guarda en una constante.
const inputDate = document.querySelector("#inputDate");
// Referencia el id "inputCVV" del html y lo guarda en una constante.
const inputCVV = document.querySelector("#inputCVV");

// Creación de la estructura de la tarjeta.
const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

//  Constantes que asegura que se cumpla el formato de la tarjeta.
let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

// Función que maneja la entrada de números en un campo según la máscara proporcionada.
function handleInput(mask, key, arr) {
  // Lista de números válidos.
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Si se presiona "Backspace" y hay elementos en el arreglo, elimina el último elemento.
  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }

  // Si la tecla ingresada es un número válido y no se excede la longitud de la máscara, agrega el número al arreglo.
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    // Si la posición actual de la máscara es un guión o barra, agrega ese carácter antes del número.
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      arr.push(mask[arr.length], key);
    } else {
      // Si no, simplemente agrega el número al arreglo.
      arr.push(key);
    }
  }
}
// Evento de escucha para la tecla en el campo de entrada de la tarjeta.
inputCard.addEventListener("keydown", (e) => {
  // Si se presiona la tecla "Tab", no realiza ninguna acción y sale del evento.
  if (e.key === "Tab") {
    return;
  }
  // Evita el comportamiento predeterminado de la tecla
  e.preventDefault();
  // Llama a la función "handleInput" para manejar la entrada en el campo de la tarjeta.
  handleInput(maskNumber, e.key, cardNumber);
  // Actualiza el valor del campo de entrada con los números ingresados, siguiendo la máscara.
  inputCard.value = cardNumber.join("");
});

// Evento de escucha para la tecla en el campo de entrada de la fecha.
inputDate.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    // Actualiza el valor del campo de entrada de la fecha con los números ingresados, siguiendo la máscara.
    inputDate.value = dateNumber.join("");
});
  
// Evento de escucha para la tecla en el campo de entrada del CVV.
inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      return;
    }
    e.preventDefault();
    handleInput(maskCVV, e.key, cvvNumber);
    // Actualiza el valor del campo de entrada del CVV con los números ingresados, siguiendo la máscara.
    inputCVV.value = cvvNumber.join("");
  });
  
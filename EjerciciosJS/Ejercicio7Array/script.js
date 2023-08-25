/*1. A partir de la pizza sustituías todos los elemento del array por
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩*/

let emojiArray1 = ["🍕", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];

// Encuentra el índice del emoji de la pizza
const pizzaIndex = emojiArray1.indexOf("🍕");

// Si se encuentra el emoji de la pizza, reemplaza los elementos restantes con el emoji de la cerveza
if (pizzaIndex !== -1) {
  const replacementArray = Array(emojiArray1.length - pizzaIndex).fill("🍺");
  emojiArray1 = emojiArray1.slice(0, pizzaIndex + 1).concat(replacementArray);
}

console.log("Ejercicio1\n\n", emojiArray1);

/*2. Encontrar si existe un elemento en el array que sea una piña.
🍕🍕🍍🍕🍕*/

let emojiArray2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];

const existePina = emojiArray2.includes("🍍");

if (existePina) {
  console.log("Ejercicio2 \n\n Se encontró una piña en el array.\n\n");
} else {
  console.log("No se encontró una piña en el array.");
}

/*3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕*/
let emojiArray3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];

const index = emojiArray3.indexOf("🍍"); // Encuentra el índice de la piña
if (index > -1) {
  emojiArray3.splice(index, 1); // Elimina 1 elemento a partir del índice encontrado
}

console.log("Ejercicio3\n\n", emojiArray3);

/*4. A partir del siguiente array 🍓🍋🍓🍋🍓 convierte todas las fresas
en 🍄*/

let fruitArray = ["🍓", "🍋", "🍓", "🍋", "🍓"];

const newArray = fruitArray.map((fruit) => {
  if (fruit === "🍓") {
    return "🍄"; // Reemplaza la fresa por una seta
  } else {
    return fruit; // Mantiene los otros elementos sin cambios
  }
});

console.log("\n\nEjercicio4\n\n", newArray);

/*5. Añade el siguiente icono 🥵 inmediatamente después del cada 🌶
en el siguiente array: 🌶🥛🌶🥛🌶🥛*/

let fruitArray1 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];

const newArray1 = fruitArray1.map((fruit1) => {
  if (fruit1 === "🌶️") {
    return [fruit1 + "🥵"] // Agrega al final del arreglo el nuevo elemento
  } else {
    return fruit1;
  }
})

console.log("\n\nEjercicio5\n\n", newArray1);

/*6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴*/

let array = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

const newArray2 = [];
for (let i = 0; i < array.length; i++) {
  newArray2.push(array[i]); // Agrega el emoji de paisaje al nuevo array

  if (array[i] === "🎴") {
    newArray2.push("🃏"); // Agrega la carta comodín después de cada emoji de paisaje
  }
}

console.log(newArray2);

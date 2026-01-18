/**
 * Main function: Robot ko milk lene bhejne ke liye
 * @param {number} money - Jitne paise robot ko diye gaye hain
 */
function getMilk(money) {   
  console.log("leaveHouse"); // Ghar se nikalna
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  // Yahan hum calcBottles function ko call kar rahe hain calculation ke liye
  console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse"); // Ghar wapas aana

  // Return value: Function khatam hone par bache hue paise (change) wapas karega
  return calcChange(money, 1.5);
}

/**
 * Helper function 1: Kitni bottles aayengi ye calculate karne ke liye
 */
function calcBottles(startingMoney, costPerBottle) {
  // Math.floor use kiya hai kyunki hum adhi bottle nahi kharid sakte (e.g., 3.33 becomes 3)
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

/**
 * Helper function 2: Bache hue paise (change) calculate karne ke liye
 */
function calcChange(startingAmount, costPerBottle) {
  // Modulo (%) operator remainder nikalta hai (bache hue paise)
  var change = startingAmount % costPerBottle;
  return change;
}

// Function call: Robot ko 5 rupaye dekar bheja gaya
getMilk(5);
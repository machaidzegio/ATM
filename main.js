let userLogin = 0;
let divElement = document.getElementById("insertDiv");
let divElement2 = document.getElementById("atmDiv");
let logElement = document.getElementById("dNone");
let userBalance = {
  firstName: "გოგა",
  lastName: "თურაძე",
  balance: 1000,
  cardNumber: 1234,
  pin: 1234,
};
//
function login() {
  let inputCardNumber = parseInt(prompt("შეიყვანეთ ბარათის ნომერი:"));
  let inputPin = parseInt(prompt("შეიყვანეთ პინი:"));
  if (
    inputCardNumber === userBalance.cardNumber &&
    inputPin === userBalance.pin
  ) {
    userLogin = 1;
    document.getElementById(
      "greetings"
    ).innerHTML = `მოგესალმებით ${userBalance.firstName} ${userBalance.lastName}`;
    document.getElementById(
      "checkBalanceTxt"
    ).innerHTML = `თქვენი ბალანსია ${userBalance.balance} ₾`;
    divElement.style.display = "flex";
    divElement2.style.display = "flex";
    logElement.style.display = "none";
  } else {
    alert("არასწორი მონაცემები");
  }
}
//
let insertMonay = document.getElementById("insertMonay").value;
let addMonay = parseInt(insertMonay);
function addBalanceFromInput() {
  let inputAmount = parseFloat(prompt("გთხოვთ შეიყვანეთ თანხა:"));
  userBalance.balance += inputAmount;
  alert(`ბალანსზე თანხა შეადგენს: ${userBalance.balance} ₾`);
}
//

function returnBills(amount) {
  const billDenominations = [
    { bill: 100, quantity: 1 },
    { bill: 50, quantity: 1 },
    { bill: 20, quantity: 15 },
    { bill: 10, quantity: 30 },
    { bill: 5, quantity: 25 },
  ];

  let resultBills = [];
  for (let i = 0; i < billDenominations.length; i++) {
    const bill = billDenominations[i].bill;

    const quantity = Math.min(
      billDenominations[i].quantity,
      Math.floor(amount / bill)
    );

    if (quantity > 0 && userLogin === 1) {
      for (let j = 0; j < quantity; j++) {
        resultBills.push(bill);
      }

      amount -= quantity * bill;
      billDenominations[i].quantity -= quantity;
    }
  }
  let sum = 0;
  for (let i = 0; i < resultBills.length; i++) {
    sum += resultBills[i];
  }
  userBalance.balance -= sum;
  document.getElementById("sum").innerHTML =
    "გამოტანილი თანხის ოდენობა: " + sum + "₾";
  document.getElementById("bills").innerHTML =
    "დაბრუნებული კუპიურები:" + "<br>" + resultBills + " ₾";
}

function withdraw() {
  let withdrawNumber = parseInt(document.getElementById("billNumber").value);

  returnBills(withdrawNumber);
}

function checkMonay() {
  if (userLogin == 1) {
    document.getElementById("remAmount").innerHTML =
      "დარჩა:" + userBalance.balance + " ₾";
  } else {
    alert("გთხოვთ გაიაროთ რეგისტრაცია");
  }
}

num1El = document.getElementById("num1-el")
num2El = document.getElementById("num2-el")

let result = document.getElementById("result")

function add() {
    result.textContent = "sum:" + (JSON.parse(num1El.value) + JSON.parse(num2El.value))
}

function subtract() {
    result.textContent = "subtract:" + JSON.parse()
}

function multiply() {
    result.textContent = "multiply:" + (num1 * num2)
}

function divide() {
    result.textContent = "divide:" + (num1 / num2)
}
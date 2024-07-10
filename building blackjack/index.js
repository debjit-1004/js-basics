//create two variables firstcard adn secondcard
//set their value to a random numbeer between 2 and 11


let cards = [] // array ordered
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
    //let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

// let playerName = "debjit"
// let PlayerChips = "2000"

let player = {
    name: "debjit",
    chips: 2000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "Rs" + player.chips

function getRandomCard() {
    x = Math.floor(Math.random() * 13 + 1) //but ace is 11 in blackjacl and king queen and joker is 10 
    if (x == 1) {
        return 11
    } else if (x > 10) {
        return 10
    } else return x

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstCard, secondcard]
    sum = firstCard + secondcard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "sum:" + sum
        //render out first and second card
    cardsEl.textContent = "cards:" + cards[0] + " " + cards[1]
        //render out all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) { //why ===? because triple equals is strict. 100=="100" is true but 100==="100" is false
        message = "wohooo!! you have wo a blackjack"
        hasBlackJack = True
    } else {
        message = "you have lost!"
        isAlive = false
    }
    messageEl.textContent = message
}
if (isAlive === true && hasBlackJack === false) {

    function newCard() {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
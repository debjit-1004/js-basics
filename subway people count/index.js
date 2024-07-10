// document.getElementById("count-el").innerText = 5

// let count = 0

//  console.log(count) 
//  console.log(myage)
//  let myage = 20
// console.log(myage)

// let firstbatch = 5
// let secondbatch = 10

// let count = firstbatch + secondbatch
// console.log(count)


//create two variables myAge and humanDogRatio
//multiply both and sstore in myDogAge
//log myDogAge to the console

// let myAge = 18
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


// let count = 5
// count++
// console.log(count)
// count = 18
// console.log(count)

//initialize a count as 0
//listen on clicks
//increment the count variable
// change the count-el in html

// function increment1() {
//     console.log("the button was clicked")
// }

// this shit is not working idk why 


//create a fn that logs out the number 42 to the console
//call or invoke the function

// function debjit() {
//     console.log(42)
// }

// debjit()


//create a fn that logs out the sum of all three lap times
// let lap1 = 1
// let lap2 = 5
// let lap3 = 6

// function sum() {
//     console.log(lap1 + lap2 + lap3)
// }
// sum()


//cretae a fn that increments the lapscompleted variable with one
//run in three times
// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)
// strings
// let username = "debjit"
// let message = "you have new notifications"
// let messageToUser = username + "," + message + "!"
// console.log(messageToUser)

//challenge
//1. Grab the welcom,e-el paragraph and store in iot the variable called welcomeEl
//2. create two variables name and grreting that contains your name and greeting we want to render on the page
//3. render the messgae using welcomeEl.innertext
// let welcomeEl = document.getElementById("welcome-el")
// let name = "debjit kundu, "
// let greeting = "welcome back "
// welcomeEl.innerText = name + greeting
//4. add an emoji but with extra code and not modify bprevious ones
// welcomeEl.innerText = welcomeEl.innerText + ":)"

















//actual app of how many people entered and left in a subway
//new one
//initialize count as 0
//listen on clicks
//increment count
//change count-el on html
//create a save entry

let countEl = document.getElementById("count-el")
let show = document.getElementById("show")

let count = 0
let entry = "Previous entries:"

function increment1() {
    console.log("clicked")
    count++
    countEl.innerText = count
    console.log(count)
}

function decrement1() {
    if (count > 0) {
        console.log("clicked")
        count--
        countEl.innerText = count
        console.log(count)
    }

}

function save() {
    console.log(count)
    entry += "-" + count
    show.innerText = entry
    countEl.textContent = 0 //for website showcase
    count = 0 //for javascript count variable 
}
// // create two variables firstname and lastname
// // concatinates  both to fullname 
// //log fullname to console

// let firstname = "debjit"
// let lastname = " kundu"
// let fullname = firstname + lastname
// console.log(fullname)

// //create a function that logs out hi there linda when called 
// let name = "linda"
// let greeting = "hi there"

// function practice() {
//     console.log(name + greeting)
// }

// practice()

// //create two functions add3Points( and removelPoint() from myPoints variable
// myPoints = 3

// function add3Points() {
//     myPoint += 3
// }

// function removelPoint() {
//     myPoint_ = 1
// }
// add3Points()
// removelPoint
// console.log(myPoints)

// //output practice

// console.log("3" + 2) //32
// console.log(11 + 7) //18
// console.log(6 + '5') //65
// console.log('my points:' + 5 + 9) //my points : 59
// console.log(2 + 2) //4
// console.log('11' + '14') //1114






//when user clicks purchase button render out
//something went wrong please try again" in the paragraph that has the id error

let errorParagraph = document.getElementById("error")
console.log("errorParagraph")

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "something went wrong, please try again!!!!"
}
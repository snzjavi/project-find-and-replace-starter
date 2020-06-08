// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

///////////////////////////////////////// YOUR CODE GOES HERE ///////////////////////////////////////////////////////
userinput = document.getElementsByClassName("grid");
let x = document.getElementById(".div")
const gridid = [""]
let foundword = gridid
let myinput = []

replaceAllButton.addEventListener('click', function () {
    let replaceme = replaceInput.value
    let findme = findInput.value
    for (let innertext = 0; innertext < rowElements.length; innertext += 1) {
        let innercells = getCellElements(rowElements[innertext])
        for (let insidecells = 0; insidecells < innercells.length; insidecells += 1) {
            console.log(innercells[insidecells])
            if (innercells[insidecells].innerText.includes(findme)) {
                innercells[insidecells].innerHTML = innercells[insidecells].innerHTML.replace(findme, replaceme)
            }
        }
    }
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.

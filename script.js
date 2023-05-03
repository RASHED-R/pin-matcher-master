// generate pin display

let generatePin = document.getElementById("generator-input")
let matchPin = document.getElementById("matchPin")
let submit = document.querySelector(".submit-btn")
let generatorBtn = document.querySelector(".generate-btn").addEventListener("click", () => {
    let randomNumber = parseInt((Math.random() * 10000 + "").split(".")[0]);
    generatePin.value = randomNumber;
    console.log(randomNumber);
})

// submit btn with matching

submit.addEventListener('click', function () {
    if (generatePin.value == matchPin.value) {
        document.getElementById("dntMatch").style.display = "none"
        document.getElementById("match").style.display = "block"
        generatePin.value = ""; //if matching then input field will be empty
        matchPin.value = "";
    } else {
        document.getElementById("match").style.display = "none"
        document.getElementById("dntMatch").style.display = "block"

    }
});

//add event listener to all classes by using innerText

let calculatorBtn = document.querySelectorAll(".button");
calculatorBtn.forEach(button => {
    button.addEventListener('click', function handleClick(event) {
        let element = event.target.innerText;
        matchPin.value = matchPin.value + element; // initially input is empty, if i click one button it will store in input field and then i click another button 
    })
})



//by using data-value type 

// let calculatorBtn=document.querySelectorAll(".button");

// calculatorBtn.forEach(button=> {
//         button.addEventListener('click', function handleClick(event) {
//                 // let elementValue = event.target.innerText;
//                 let elementValue=event.target.getAttribute('data-value');
//                 if (elementValue=="C") { //to clear all data from input 
//                     matchPin.value=""
//                 }
//                 else if (elementValue=="<") { //to clear last data from input 
//                     matchPin.value=matchPin.value.slice(0, -1);
//                 }
//                 else {
//                     matchPin.value=matchPin.value + elementValue; // initially input is empty, if i click one button it will store in input field and then i click another button 
//                 }
//             }
//         )
//     }
// )
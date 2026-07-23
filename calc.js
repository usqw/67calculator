var Continue = 1
let resultDiv = document.getElementById('display');
let meme = document.getElementById('meme')

   //operate on __ stages : 
    //once false 
    //// take input n store as operator 
    // take input n store as num2 

    //if = button is clicked call on function calculate

    //calc() if statements to call on respective functions 

function displayValue(a) {
    const newNumber = document.createElement("p");
    newNumber.textContent = a;
    resultDiv.appendChild(newNumber);
    sixSeven();
    
}

let currentNum = ""; // why without wld it cause NaN
let num1; 
let num2;
let operator;

function storeValue(n) {
    currentNum += n;
} // make variables exist outside function without using const

function operateOn(value){  
    if (Continue === 2) {
        const accepted = multipleOperators(value);
        if (accepted) {
            num1 = parseInt(currentNum);
        //cannot put return before naything since it exits early 
        //error let currentNum = null since will only look at enclosed n currentNum wld not be initialised yet 
            currentNum = "";
        }
        Continue -= 1
    }
    else {
        storeValue(value);
        displayValue(value);
        } 
}
    

function multipleOperators(value) {
    if (operator === undefined){
        operator = value;
        displayValue(value); 
        return true
    } else {
        alert("Error: multiple operators");
        return false
    }
}
// error debug 1. 11 = 11 (num1 not stored since + is never clicked) --
//2. when two operators are put in throw an error - it must not display - it must alert - it will not be stored as operator 3. cannot divide by zero
//4. terminate after the first one 


function equalsTo(value) {
    if (Continue === 3) {
        displayValue(value);
        num2 = parseInt(currentNum);
        calc(num1 , num2);
    } else {
        operateOn(value)
    }

}

function calc(num1 , num2){
    if (operator === "+"|| operator === undefined){
        displayValue (add(num1 , num2))
    }
    if (operator === "-"){
        displayValue (subtract(num1 , num2))
    }
    if (operator === "*"){
        displayValue (multiply(num1 , num2))
    }
    if (operator === "/"){
        if (divide(num1 , num2) === Infinity) {
            alert("Error: Cannot divide by zero!")
            currentNum = "";
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            Continue = 1;
            resultDiv.innerHTML = "";
        } else {
            displayValue (divide(num1 , num2))
        }
    }
}


function sixSeven(){
    let pElements = resultDiv.querySelectorAll('p');
        
    for (let i=0 ; i<pElements.length - 1; i++) { //-1 boundary protect (i+1)
        const firstNum = pElements[i].textContent;
        const secondNum = pElements[i+1].textContent;
            if (firstNum === "6" && secondNum === "7"){
                meme.classList.add('active')
            } 
        }
    for (let i=0 ; i<pElements.length; i++) {
            if (pElements[i].textContent === "67") {
                meme.classList.add('active')
            }
        }
            
    
    }




//queryselectros for ecah button is placed outside 
//update text content in div for each number clicked 



const One = document.querySelector('.One')
One.addEventListener ('click' , function() {equalsTo(1)} )

const Two = document.querySelector('.Two')
Two.addEventListener ('click' , function() {equalsTo(2)} )

const Three = document.querySelector('.Three')
Three.addEventListener ('click' , function() {equalsTo(3)} )

const Four = document.querySelector('.Four')
Four.addEventListener ('click' , function() {equalsTo(4)} )

const Five = document.querySelector('.Five')
Five.addEventListener ('click' , function() {equalsTo(5)} )

const Six = document.querySelector('.Six')
Six.addEventListener ('click' , function() {equalsTo(6)} )

const Seven = document.querySelector('.Seven')
Seven.addEventListener ('click' , function() {equalsTo(7)} )

const Eight = document.querySelector('.Eight')
Two.addEventListener ('click' , function() {equalsTo(8)} )

const Nine = document.querySelector('.Nine')
Nine.addEventListener ('click' , function() {equalsTo(9)} )

const Zero = document.querySelector('.Zero')
Zero.addEventListener ('click' , function() {equalsTo(0)} )

const Plus = document.querySelector('.Plus')
Plus.addEventListener ('click' , () => {Continue = 2})
Plus.addEventListener ('click' , function() {equalsTo('+')} )

const Subtract = document.querySelector('.Subtract')
Subtract.addEventListener ('click' , () => {Continue = 2})
Subtract.addEventListener ('click' , function() {equalsTo('-')} )

const Multiply = document.querySelector('.Multiply')
Multiply.addEventListener ('click' , () => {Continue = 2})
Multiply.addEventListener ('click' , function() {equalsTo('*')} )

const Divide = document.querySelector('.Divide')
Divide.addEventListener ('click' , () => {Continue = 2})
Divide.addEventListener ('click' , function() {equalsTo('/')} )

const Equal = document.querySelector('.Equal')
Equal.addEventListener ('click' , () => {Continue = 3})
Equal.addEventListener ('click' , function() {equalsTo('=')} )




function add(num1 , num2){
    if (operator === undefined){
        num1 = 0
    }
    return(num1 + num2)
}

function subtract(num1 , num2){
    return(num1 - num2)
}

function multiply(num1 , num2){
    return(num1 * num2)
}

function divide(num1 , num2){
    return(num1 / num2)
}



 
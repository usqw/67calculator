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
        operator = value;
        displayValue(value);   
        num1 = parseInt(currentNum);
        //cannot put return before naything since it exits early 
        //error let currentNum = null since will only look at enclosed n currentNum wld not be initialised yet 
        currentNum = "";
        Continue -= 1
    }
    else {
        storeValue(value);
        displayValue(value);
        }} 
       

function equalsTo(value) {
    if (Continue === 3) {
        displayValue(value);
        num2 = parseInt(currentNum);
        calc(num1 , num2); // see if num1 can be put in here cant 
    } else {
        operateOn(value)
    }

}

function calc(num1 , num2){
    if (operator === "+") {
        displayValue(add(num1 , num2))
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

const Six = document.querySelector('.Six')
Six.addEventListener ('click' , function() {equalsTo(6)} )

const Seven = document.querySelector('.Seven')
Seven.addEventListener ('click' , function() {equalsTo(7)} )

const Plus = document.querySelector('.Plus')
Plus.addEventListener ('click' , () => {Continue = 2})
Plus.addEventListener ('click' , function() {equalsTo('+')} )

const Equal = document.querySelector('.Equal')
Equal.addEventListener ('click' , () => {Continue = 3})
Equal.addEventListener ('click' , function() {equalsTo('=')} )



function add(num1 , num2){
    return(num1 + num2)
}

function subtract(){
    return(num1 - num2)
}

function multiply(){
    return(num1 * num2)
}

function divide(){
    return(num1 / num2)
}


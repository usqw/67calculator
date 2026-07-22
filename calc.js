var Continue = 1
   //operate on __ stages : 
    //once false 
    //// take input n store as operator 
    // take input n store as num2 

    //if = button is clicked call on function calculate

    //calc() if statements to call on respective functions 

function displayValue(a) {
    const resultDiv = document.getElementById('display');
    const newNumber = document.createElement("p");
    newNumber.textContent = a;
    resultDiv.appendChild(newNumber);
}

let currentNum = ""; 
let num1; 

function storeValue(n) {
    currentNum += n;
} // make variables exist outside function without using const

function operateOn(value){  
    if (Continue === 2) {
        displayValue(value);   
        num1 = currentNum;
        //cannot put return before naything since it exits early 
        //error let currentNum = null since will only look at enclosed n currentNum wld not be initialised yet 
        currentNum = "";
        Continue -= 1
    }
    else {
        storeValue(value);
        displayValue(value);
        }} 

function operatorChoice(value) {
    const operator = value;
        return operator;
}

function A(value) {
    if (Continue === 3) {
        displayValue(value);
        const num2 = currentNum;
        console.log(num1); // see if num1 can be put in here cant 
    } else {
        operateOn(value)
    }

}




//queryselectros for ecah button is placed outside 
//update text content in div for each number clicked 



const One = document.querySelector('.One')
One.addEventListener ('click' , function() {A(1)} )

const Two = document.querySelector('.Two')
Two.addEventListener ('click' , function() {A(2)} )

const Plus = document.querySelector('.Plus')
Plus.addEventListener ('click' , () => {Continue = 2})
Plus.addEventListener ('click' , function() {A('+')} )

const Equal = document.querySelector('.Equal')
Equal.addEventListener ('click' , () => {Continue = 3})
Equal.addEventListener ('click' , function() {A('=')} )



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


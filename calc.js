var Continue = true
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
// make variables exist outside function without using const

function storeValue(n) {
    currentNum += n;
}

function operateOn(value){  
    if (Continue === false) {
        const operator = value 
        displayValue(value)
        console.log(currentNum)
    } else {
        storeValue(value);
        displayValue(value);
        }}



//queryselectros for ecah button is placed outside 
// update text content in div for each number clicked 



const One = document.querySelector('.One')
One.addEventListener ('click' , function() {operateOn(1)} )

const Plus = document.querySelector('.Plus')
Plus.addEventListener ('click' , () => {Continue = false})
Plus.addEventListener ('click' , function() {operateOn('+')} )



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


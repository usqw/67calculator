//function operateOn(num1, num2, operator){
    
if (continue === false) {
    console.log
}

    //take input n store as num 1 -- treat everything clicked before operator as input so operator ends thee loop n returns the eventual number to num  
    //once false 
    //// take input n store as operator 
    // take input n store as num2 

    //if = button is clicked call on function calculate




    //calc() if statements to call on respective functions 




function storeValue(number) {
    const resultDiv = document.getElementById('display');
    const newNumber = document.createElement("p");
    newNumber.textContent = number;
    resultDiv.appendChild(newNumber);
}

//queryselectros for ecah button is placed outside 
// update text content in div for each number clicked 
const One = document.querySelector('.One')
One.addEventListener ('click' , function() {storeValue(1)} )

const Plus = document.querySelector('.Plus')
Plus.addEventListener ('click' , function() {storeValue('+')} )
Plus.addEventListener ('click' , () => {continue = false})


function add(){
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


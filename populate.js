let beforeOp = '' ;
let afterOp = "";
let operationVariable = ''
let operationCalled = false;


function populate(){
    const displayELement = document.getElementById("displayElement");

   numberButtonCaller(displayELement);
   operationButtonsCaller(displayELement);
   clearButtonCaller(displayELement);
   EnterFunction(displayELement);
}

function operationButtonsCaller(displayELe){
    const operationButtons = document.querySelectorAll(".operationInput");
     operationButtons.forEach(button =>{
        button.addEventListener("click",()=>{
            operationVariable += button.innerHTML;
            displayELe.innerHTML= button.innerHTML;
            console.log(button.innerHTML)
            operationCalled = true;
        })})}
        
function clearButtonCaller(displayELe){
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", ()=>{
        clearItems(displayELe);
    })
}

function numberButtonCaller(displayELe){
    const numberButtons = document.querySelectorAll(".numberInput");
    numberButtons.forEach(button =>{
        button.addEventListener("click", () => {
            if (!operationCalled){
                beforeOp += button.innerHTML; 
                parseFloat(beforeOp)
                console.log(beforeOp)
            }
            else if (operationCalled){
                afterOp += button.innerHTML;
                parseFloat(afterOp)
                console.log(afterOp)
            }
            displayELe.innerHTML += button.innerHTML; //! Using beforeOp makes it so 2 and then 3 is 2 23
        })
    })
}

const operationOptions = ["+","-" ,"*","÷" ]
const operationNames = ["add", "subtract","multiply" ,"divide"]


function EnterFunction(displayELe){
    const enterBtn = document.getElementById("enterButton");
    enterBtn.addEventListener("click",()=>{
        console.log(beforeOp + operationVariable + afterOp) //* Logic here to do the operation on before op and after op
        for(let i=0;i<operationNames.length; i++){
            if (operationVariable === operationOptions[i] ){console.log(beforeOp + parseInt(operationOptions[i]) + afterOp)} //? how to make it so it uses the operations? maybe a new function andcall it here
        //clearItems(displayELe);
        operationCalled = false;
    }})
}

function clearItems(displayELe){
    displayELe.innerHTML = ""
        beforeOp = ""
        afterOp = ""
        operationVariable = ""
}

export{populate}

// ? If operationButtons called then -> switch to after op 
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
        displayELe.innerHTML = ""
        beforeOp = ""
        afterOp = ""
        operationVariable = ""
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

const add = (x,y) => Number(x)+Number(y);
const subtract =(x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => (y!== 0? x/y:NaN);

const operations = [add,subtract,multiply,divide];

function EnterFunction(displayELe){
    const enterBtn = document.getElementById("enterButton");

    enterBtn.addEventListener("click",()=>{ //todo: clear the beforeOp afterOp and Operation; each tiem i do it, it doesnt want to return anything anymore
        for(let i=0;i<operationNames.length; i++){
            if (operationVariable === operationOptions[i]){
                displayELe.innerHTML = operations[i](beforeOp,afterOp);
            } 
        operationCalled = false;
    }})
}


export{populate}

// ? If operationButtons called then -> switch to after op 
let beforeOp = '' ;
let afterOp = "";
let operationVariable = '';
let operationCalled = false;



function populate(){
    const displayELement = document.getElementById("displayElement");
    const prevDisplayElement = document.getElementById("displayPrevElement");

   numberButtonCaller(displayELement);
   operationButtonsCaller(displayELement);
   clearButtonCaller(displayELement);
   EnterFunction(displayELement);
   undoFunctionality(displayELement);
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
        displayELe.innerHTML = "";
        beforeOp = "";
        afterOp = "";
        operationVariable = "";
        //prevElement = "";
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
                displayELe.innerHTML = beforeOp
            }
            else if (operationCalled){
                displayELe.innerHTML = "" 
                afterOp += button.innerHTML;
                parseFloat(afterOp)
                console.log(afterOp)
                displayELe.innerHTML = afterOp
            }
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

    enterBtn.addEventListener("click",()=>{
        for(let i=0;i<operationNames.length; i++){
            if (operationVariable === operationOptions[i]){
                displayELe.innerHTML = operations[i](beforeOp,afterOp);
                beforeOp = "";
                afterOp = "";
                operationVariable = "";
            } 
        operationCalled = false;
        console.log(`afterOp: ${afterOp} beforeOp: ${beforeOp} operation: ${operationVariable}`);
        

    }})
}

function undoFunctionality(dispalyEle){
    const undoButton = document.getElementById("backspaceButton");
    
    undoButton.addEventListener("click",()=>{ //* update dispaly element for the new number
        if(!operationCalled){
        const beforeOpSplit = beforeOp.split("")
        beforeOpSplit.pop()
        beforeOp = beforeOpSplit.join(""); 
        console.log(beforeOp)
        }
        else if (operationCalled){
            const afterOpSplit = afterOp.split("")
            afterOpSplit.pop()
            afterOp =afterOpSplit.join("")
            console.log(afterOp)
        }
    })
}
export{populate}

// ? If operationButtons called then -> switch to after op 

//todo: make the small part above displayEle that shows the previous number put in
// todo: Keybr support and backspace button
//todo: Make a squared function
//todo: Prettify the damn thing
//todo !! When undoing, it needs to update display because rn it updates the array but not the actual display values
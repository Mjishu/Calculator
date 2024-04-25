let beforeOp = '' ;
let afterOp = "";
let operationVariable = '';
let operationCalled = false;
let afterOpCalled = false;
let enterCalled = false;
let operationTouched = false;



function populate(){
    const displayELement = document.getElementById("displayElement");
    const prevDisplayElement = document.getElementById("displayPrevElement");

   numberButtonCaller(displayELement);
   operationButtonsCaller(displayELement);
   clearButtonCaller(displayELement,prevDisplayElement);
   EnterFunction(displayELement);
   undoFunctionality(displayELement);

   document.addEventListener("click",()=>{
        dispalyPrevious(prevDisplayElement);
        
   })
   
}

function operationButtonsCaller(displayELe){
    const operationButtons = document.querySelectorAll(".operationInput");
     operationButtons.forEach(button =>{
        button.addEventListener("click",()=>{
            operationVariable += button.innerHTML;
            displayELe.innerHTML= button.innerHTML;
            console.log(button.innerHTML)
            operationCalled = true;
            operationTouched = true;
        })})}
        
function clearButtonCaller(displayELe,prevElement){
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", ()=>{
        displayELe.innerHTML = "";
        beforeOp = "";
        afterOp = "";
        operationVariable = "";
        prevElement = "";
    })
}

function numberButtonCaller(displayELe){
    const numberButtons = document.querySelectorAll(".numberInput");
    numberButtons.forEach(button =>{
        button.addEventListener("click", () => {
            if (!operationCalled){
                enterCalled = false;
                console.log(enterCalled)
                beforeOp += button.innerHTML; 
                parseFloat(beforeOp)
                console.log(beforeOp)
                displayELe.innerHTML = beforeOp
            }
            else if (operationCalled){
                displayELe.innerHTML = "" 
                afterOp += button.innerHTML;
                parseFloat(afterOp)
                displayELe.innerHTML = afterOp
                afterOpCalled = true;
                operationTouched = false;
            }
        })
    })
}

const operationOptions = ["+","-" ,"*","÷", "Power"]
const operationNames = ["add", "subtract","multiply" ,"divide","Power"]

const add = (x,y) => Number(x)+Number(y);
const subtract =(x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => (y!== 0? x/y:NaN);
const power = (x,y) => x**y

const operations = [add,subtract,multiply,divide,power];

function EnterFunction(displayELe){
    const enterBtn = document.getElementById("enterButton");

    enterBtn.addEventListener("click",()=>{
        for(let i=0;i<operationNames.length; i++){
            if (operationVariable === operationOptions[i]){
                displayELe.innerHTML = operations[i](beforeOp,afterOp);
                beforeOp = "";
                afterOp = "";
                operationVariable = "";
            } }
        operationCalled = false;
        enterCalled = true;
        console.log("enterCalled status: " + enterCalled)
        afterOpCalled = false
        console.log(`afterOp: ${afterOp} beforeOp: ${beforeOp} operation: ${operationVariable}`);
        

    })
}

function undoFunctionality(dispalyEle){
    const undoButton = document.getElementById("backspaceButton");
    
    undoButton.addEventListener("click",()=>{ //* update dispaly element for the new number
        if(!operationCalled){
            const beforeOpSplit = beforeOp.split("")
            beforeOpSplit.pop()
            beforeOp = beforeOpSplit.join(""); 
            console.log(beforeOp)
            dispalyEle.innerHTML = beforeOp;
        }
        else if (operationCalled){
            const afterOpSplit = afterOp.split("")
            afterOpSplit.pop()
            afterOp =afterOpSplit.join("")
            console.log(afterOp)
            dispalyEle.innerHTML = afterOp;
        }
       
    })
}

function dispalyPrevious(prevEle){ 
    if (operationTouched === true){
        prevEle.innerHTML = ""
        prevEle.innerHTML = beforeOp;
    }
    else if (afterOpCalled ===true){
        prevEle.innerHTML ="";
        prevEle.innerHTML = operationVariable;
    }
    /*else if (enterCalled === true){ //! either this isn't getting called, or afterOp is empty due to the way im clearing it on enter called
        prevEle.innerHTML = "";
        console.log(afterOp)
        prevEle.innerHTML = afterOp
    }*/
}

export{populate}

//todo: make the small part above displayEle that shows the previous number put in
// todo: Keybr support and backspace button
//todo: Make a squared function
//todo: Prettify the damn thing
//todo !! Make undo work on operations(limit button click to only once for operations? maybe with a true/false statement?)

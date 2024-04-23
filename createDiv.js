
const content = document.getElementById("content");

const operations = ["+", "-", "*", "÷"]

function createInput(){
    const numberWrapper = document.createElement("div");
    numberWrapper.setAttribute("id","numberWrapper");
  

    const operationWrapper = document.createElement("div");
    operationWrapper.setAttribute("id", "operationWrapper");
    content.append(numberWrapper,operationWrapper);

    for (let i=0;i<10;i++){ //? Should i make an array first so that 0 ennds up at the bottom?
        const numberInput = document.createElement('button');
        numberInput.className = "numberInput";
        numberInput.setAttribute("id", `numberInput_${i}`);
        numberInput.innerHTML = i;
        numberWrapper.append(numberInput)
    }

    for(let i=0;i<operations.length;i++){
        const operationInput = document.createElement("button");
        operationInput.className = "operationInput";
        operationInput.innerHTML = operations[i];

        operationWrapper.append(operationInput)
    }
}

function createDisplay(){
    const displayEle = document.createElement("p");
    displayEle.setAttribute("id","displayElement");
    

    const clearBtn = document.createElement("button");
    clearBtn.setAttribute('id', "clearButton")
    clearBtn.innerHTML = "clear"
    content.append(displayEle,clearBtn)
}


export {createInput,createDisplay}
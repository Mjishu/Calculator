function populate(){
    const displayELement = document.getElementById("displayElement");
    const clearButton = document.getElementById("clearButton")

    const numberButtons = document.querySelectorAll(".numberInput")
    const operationButtons = document.querySelectorAll(".operationInput")

    numberButtons.forEach(button =>{
        button.addEventListener("click", () => {
            displayELement.innerHTML += button.innerHTML;
        })
    })
    
    clearButton.addEventListener("click", ()=>{
        displayELement.innerHTML = ""
    })

    operationButtons.forEach(button =>{
        button.addEventListener("click",()=>{
            console.log(button.innerHTML)
        })
    })
}

export{populate}
function populate(){
    const displayELement = document.getElementById("displayElement");
    const clearButton = document.getElementById("clearButton")

    const buttons = document.querySelectorAll(".numberInput")

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            displayELement.innerHTML += button.innerHTML;
        })
    })
    
    clearButton.addEventListener("click", ()=>{
        displayELement.innerHTML = ""
    })

    //todo : get operations 
}

export{populate}
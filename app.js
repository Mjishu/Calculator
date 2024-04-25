import {createInput, createDisplay, createDisplayButtons } from "./createDiv.js";
import { populate } from "./populate.js";

createDisplay();
createInput();
createDisplayButtons();

populate();

/*// todo : Logic on storing a,b in their own variables, 
    create 2 arrays or holders for the input before and after an operation is called;
    once an operation is called switch to second element and then once a button is pressed calculate;
    //? instead of automatically putting input into displayELe should I push it to an array and then from the array put it in the displayele?
    //todo: add decimal functionality;
*/
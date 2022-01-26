const container = document.querySelector("#container");
const div = document.createElement("div");
let operator;
div.textContent = "";
let num1, num2;
let disable = 0;
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gridTemplateRows = "repeat(3, 1fr)";


// Create a dummy variable where you add up all the variable and operation symbols in string form, then using split, get the array and then use the operation on it.
let dummyVariable = "";
// let search = dummyVariable.search("+");
const add = document.createElement("button");
add.textContent = "+";
add.addEventListener("click", () => { 
    if(dummyVariable.includes("+") == true || dummyVariable.includes("-") == true || dummyVariable.includes("*") == true || dummyVariable.includes("/") == true){
                div.textContent = operate(dummyVariable, operator);}
    operator = "+";
    dummyVariable += "+";
    disable = 1;
    add.disabled = true;
    periods.disabled = false;
})

container.appendChild(add);

const subtract = document.createElement("button");
subtract.textContent = "-";
subtract.addEventListener("click", () => {
    operator = "-";
    dummyVariable += "-";
    subtract.disabled = true;
    periods.disabled = false;
})
container.appendChild(subtract);

// const multiply = document.createElement("button");
// multiply.textContent = "*";
// multiply.addEventListener("click", () => {
//     operator = "*";
//     dummyVariable += "*";
//     multiply.disabled = true;
//     periods.disabled = false;
// })
// container.appendChild(multiply);

// const divide = document.createElement("button");
// divide.textContent = "/";
// divide.addEventListener("click", () => {
//     operator = "/";
//     dummyVariable += "/";
//     divide.disabled = true;
//     periods.disabled = false;
// })
// container.appendChild(divide);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {
    div.textContent = operate(dummyVariable, operator);
    dummyVariable = operate(dummyVariable, operator);
    // disable = 0;
    add.disabled = false;
    subtract.disabled = false;
    multiply.disabled = false;
    // periods.disabled = false;
    divide.disabled = false;
})

container.appendChild(equals);

for(let i = 9; i >= 0; i--){
    const button = document.createElement("button");
    button.textContent = i;
    
        
    if(dummyVariable.includes("+") == true){
            div.textContent = "";
            // button.addEventListener("click", () => {
                button.addEventListener("click", () => {
                    // break;
                    div.textContent += button.textContent;
                    dummyVariable += button.textContent;
                // }
        })}else{
            button.addEventListener("click", () =>{
                div.textContent += button.textContent;
                // div.textContent += "-";
                dummyVariable += button.textContent;
            })
            

            }
        
    // })}else{
    //     button.addEventListener("click", () => {
            // break;
            // div.textContent += button.textContent;
            // dummyVariable += button.textContent;
        // }else{   
            // dummyVariable.includes(operator) = false; 
        
        // div.textContent += button.textContent;
            // dummyVariable += button.textContent;
        
        // else{
        //     div.textContent = "";
        //     div.textContent += button.textContent;
        //     dummyVariable += button.textContent;
        // }
        
            

    num1 = div.textContent;
    container.appendChild(button);}



// const periods = document.createElement("button");
// periods.textContent = ".";
// periods.addEventListener("click", () => {
    
//     div.textContent += ".";
//     dummyVariable += ".";
//     disable = 1;
//     periods.disabled  = true;

// })
// container.appendChild(periods);




// container.appendChild(periods);

container.appendChild(div);
// function operate(num1, num2, operator){
//     if(operator == "+"){
//         num1 + num2
//     }
// }
// const clearAll = document.createElement("button");
// clearAll.textContent = "Clear";
// clearAll.addEventListener("click", () => {
//     div.innerHTML = "";
//     operator = "";
//     dummyVariable = "";
//     add.disabled = false;
//     subtract.disabled = false;
//     multiply.disabled = false;
//     periods.disabled = false;
//     divide.disabled = false;
// })
// container.appendChild(clearAll);

function operate(string, operator){
        let number, result;
        number = string.split(operator);
        num1 = Number(number[0]);
        num2 = Number(number[1]);
        if(operator == "+"){
            result = num1 + num2;
        }
        else if(operator == "-"){
            result =  num1 - num2;
        }
        else if(operator == "*"){
            result =  num1 * num2;
        }
        else if(operator == "/"){
            if(num2 == 0){
                result = "ERROR";
            }else{
                result = num1/num2;
            }
        }
        console.log(result);
        return Number(result.toFixed(12));
}
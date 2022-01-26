const bigContainer = document.querySelector("#bigContainer");
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");
const div = document.createElement("div");

let operator;
div.textContent = "0";
div.style.padding = "1.5%";
let num1, num2;
let counter = 0;

// container3.style.displa
// Create a dummy variable where you add up all the variable and operation symbols in string form, then using split, get the array and then use the operation on it.
let dummyVariable = "";

container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gridTemplateRows = "repeat(3, 1fr)";


const clearAll = document.createElement("button");
clearAll.textContent = "C";
clearAll.addEventListener("click", () => {
    div.textContent = "0";
    operator = null;
    dummyVariable = "";
    add.disabled = false;
    subtract.disabled = false;
    multiply.disabled = false;
    periods.disabled = false;
    divide.disabled = false;
    counter = 0;
})
clearAll.style.borderBottom = "2px solid grey";
container.appendChild(clearAll);

//Needs to be fixed(subtraction part)
let counter2 = 0;
const changeSigns = document.createElement("button");
changeSigns.textContent = "+/-";
changeSigns.style.borderBottom = "2px double grey";
changeSigns.addEventListener("click", () =>{

    //Prob with subtraction symb
    if(dummyVariable.includes(operator) != true){
        if(dummyVariable.startsWith("-") != true){
            dummyVariable = "-" + String(dummyVariable);
            // dummyVariable = Number(dummyVariable);
            div.textContent = "-" + String(div.textContent);
        }
        else if(div.textContent.startsWith("-") == true){
                div.textContent = String(div.textContent.substring(1, div.textContent.length));
                dummyVariable = String(dummyVariable.substring(1, dummyVariable.length));  
    }}

    if(dummyVariable.includes(operator) == true){
        let temp = dummyVariable.split(operator);
        // let array = [];
        // let counter2 = 0;
        if(operator == "-"){
            counter2 = 0;
            for(let i = 0; i <= dummyVariable.length; i++){
                if(dummyVariable[i] == "-"){
                    counter2 += 1;
                    // array.push(i);
                }
            }
            // if(counter2 == 1 && ){

            // }
            if(counter2 == 1 || counter2 == 2){
                dummyVariable = String(dummyVariable.substring(0, dummyVariable.lastIndexOf(operator))) + "-" + String(dummyVariable.substring(dummyVariable.lastIndexOf(operator)),dummyVariable.length);
                div.textContent = "-" + div.textContent;
                // console.log(dummyVariable);
            }
            else if (counter2 == 3){
                dummyVariable = String(dummyVariable.substring(0, dummyVariable.lastIndexOf(operator))) + String(dummyVariable.substring(dummyVariable.lastIndexOf(operator) + 1),dummyVariable.length);
                div.textContent = div.textContent.substring(1, div.textContent.substring.length)
                console.log(dummyVariable);
                // counter2 -= 1;
            }
            
        }
        
        else{
            if(String(temp[1]).includes("-")!= true){
                temp[1] = Number("-" + String(temp[1]));
                div.textContent = String(temp[1]);
                console.log(temp);
                dummyVariable = temp.join(operator);
                console.log(dummyVariable);
            }else if(String(temp[1]).includes("-") == true){
                temp[1] = Number(String(temp[1]).substring(1, temp[1].length));
                div.textContent = temp[1];
                dummyVariable = temp.join(operator);
                console.log(dummyVariable);
            }
        }   
    }

})
container.appendChild(changeSigns);

const backspaces = document.createElement("button");
backspaces.textContent = "<--";
backspaces.addEventListener("click", () => {
    
    if(div.textContent.length == 1){
        div.textContent = "0";
    }else{
        div.textContent = String(div.textContent.substring(0, div.textContent.length -1));
    }
    dummyVariable = String(dummyVariable.substring(0, dummyVariable.length -1));
    // if(div.textContent.length = 1){
    //     div.textContent = "0";
    // }
    console.log(dummyVariable);
}) 
backspaces.style.borderBottom = "2px solid grey";
container.appendChild(backspaces);

for(let i = 9; i >= 0; i--){
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("c" + i);
    button.style.backgroundColor = "#2b8878fb";
    button.style.buttonRadius = "25px";
    // button.style.borderStyle = "none";
    // button.style.marginLeft = "0.25%";
    // button.style.width = "80%";
    button.style.borderRight = "0.5px solid #000";
    button.style.borderBottom = "1px solid rgba(56, 148, 105, 0.301)";
    button.addEventListener("click", () => {
    
        
    if(dummyVariable.includes(operator) == true){
        if(counter == 0){
            div.textContent = "";
            
            counter += 1;
        }
            div.textContent += String(button.textContent);
            dummyVariable += String(button.textContent);

            
            if(dummyVariable.endsWith(operator) != true){
                add.disabled = false;
                subtract.disabled = false;
                divide.disabled = false;
                multiply.disabled = false;
            }}   
        else{
            if(div.textContent.startsWith("0") == true){
                div.textContent = button.textContent;    
            }else{
                div.textContent += button.textContent;
            }
            
            dummyVariable += button.textContent;
    }

    
})

// button.addEventListener("keydown", (e) =>{
//     e.key = ""
// })
    
    num1 = div.textContent;
    container.appendChild(button);
}
c10 = document.querySelector(".c0");
    // c10.textContent = "3";
    c10.style.gridColumnStart = 1;
    c10.style.gridColumnEnd = 3;
    c10.style.borderTop = "1px solid #000";
// button.classList("c0").textContent = "i"

const periods = document.createElement("button");
periods.textContent = ".";
periods.addEventListener("click", () => {
    if(dummyVariable.endsWith(operator) == true){
        if(counter == 0){
            div.textContent = "";
            // dummyVariable += ".";
            counter += 1;
        }
    }
    
    div.textContent += ".";
    dummyVariable += ".";
    disable = 1;
    periods.disabled = true;

})
periods.style.borderRight = "1px solid #000";
periods.style.borderTop = "1px solid #000";
changeSigns.style.borderRight = "1px solid #000";
backspaces.style.borderRight = "1px solid #000";
clearAll.style.borderRight = "1px solid #000";
container.appendChild(periods);

periods.style.float = "right";
//Issue when using operators, 0 is num2 for in operations after operator is entered.
const add = document.createElement("button");
add.textContent = "+";
add.addEventListener("click", () => { 
    
    if(dummyVariable.endsWith(operator) != true){
        if(dummyVariable.includes(operator) == true){
            div.textContent = String(operate(dummyVariable, operator));
            dummyVariable = String(operate(dummyVariable, operator));
            console.log(dummyVariable);
        }
    }
    operator = "+";
    dummyVariable += "+";
    counter = 0;
    add.disabled = true;
    subtract.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    periods.disabled = false;
    if(dummyVariable.endsWith(operator)==true){
        // if(dummyVariable.endsWith("+") == true){
            
        // }
        div.textContent = String(operate(dummyVariable, operator));

        //Error code
        dummyVariable = String(operate(dummyVariable, operator)) + "+";

    }
    
})

container3.appendChild(add);

const subtract = document.createElement("button");
subtract.textContent = "-";
subtract.addEventListener("click", () => {
    if(dummyVariable.endsWith(operator) != true){
        if(dummyVariable.includes(operator) == true){
            div.textContent = String(operate(dummyVariable, operator));
            dummyVariable = String(operate(dummyVariable, operator));
        }
    }
    operator = "-";
    dummyVariable += "-";
    add.disabled = true;
    subtract.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    periods.disabled = false;
    counter = 0;
    if(dummyVariable.endsWith(operator)==true){
        div.textContent = String(operate(dummyVariable, operator));

        //Error code
        dummyVariable = String(operate(dummyVariable, operator)) + "-";
    }
})
container3.appendChild(subtract);

const multiply = document.createElement("button");
multiply.textContent = "*";
multiply.addEventListener("click", () => {
    if(dummyVariable.endsWith(operator) != true){
        if(dummyVariable.includes(operator) == true){
            div.textContent = String(operate(dummyVariable, operator));
            dummyVariable = String(operate(dummyVariable, operator));
            console.log(dummyVariable);
        }
    }
    
    if(dummyVariable.endsWith(operator)==true){
        div.textContent = String(operate(dummyVariable, operator));

        //Error code
        dummyVariable = String(operate(dummyVariable, operator)) + "*";
    }
    operator = "*";
    dummyVariable += "*";
    add.disabled = true;
    subtract.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    periods.disabled = false;
    counter = 0;
})
container3.appendChild(multiply);

const divide = document.createElement("button");
divide.textContent = "/";
divide.addEventListener("click", () => {
    if(dummyVariable.endsWith(operator) != true){
        if(dummyVariable.includes(operator) == true){
            div.textContent = String(operate(dummyVariable, operator));
            dummyVariable = String(operate(dummyVariable, operator));
        }
    }
    
    if(dummyVariable.endsWith(operator)==true){
        div.textContent = String(operate(dummyVariable, operator));

        //Error code
        dummyVariable = String(operate(dummyVariable, operator)) + "/";
        
    }
    operator = "/";
    dummyVariable += "/";
    add.disabled = true;
    subtract.disabled = true;
    multiply.disabled = true;
    divide.disabled = true;
    periods.disabled = false;
    counter = 0;
})
container3.appendChild(divide);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {
    div.textContent = String(operate(dummyVariable, operator));

    dummyVariable = String(operate(dummyVariable, operator));

    add.disabled = false;
    subtract.disabled = false;
    multiply.disabled = false;
    periods.disabled = false;
    divide.disabled = false;
    counter = 0;
})

container3.appendChild(equals);

add.style.backgroundColor = "orange";
subtract.style.backgroundColor = "orange";
divide.style.backgroundColor = "orange";
multiply.style.backgroundColor = "orange";
periods.style.backgroundColor = "orange";
equals.style.backgroundColor = "orange";
clearAll.style.backgroundColor = "orange";
changeSigns.style.backgroundColor = "orange";
div.style.backgroundColor = "#00000091";
div.style.color = "white";
div.style.textAlign = "right";
// div.style.padding = "3%";
div.style.border = "solid grey 2px";
// container.style.border = "solid black 2px";
// container3.style.border = "solid grey 2px";
// add.style.marginBottom = "1%";
// add.style.marginTop = "1%";
// subtract.style.marginBottom = "1%";
// multiply.style.marginBottom = "1%";
// divide.style.marginBottom = "1%";
container3.style.backgroundColor = "#00000003";
// subtract.style.borderBottom = "2px double grey";
// multiply.style.borderBottom = "2px double grey";
// changeSigns.style.borderBottom = "2px double grey";

function operate(string, operator){
        let number, result;
        number = string.split(operator);
        num1 = Number(number[0]);
        num2 = Number(number[1]);
        if(operator == "+"){
            
            result = num1 + num2;
        }else if(dummyVariable.includes("--")){
            number = string.split("--");
            num1 = Number(number[0]);
            num2 = Number(number[1]);
            result = num1 + num2;
        }
        else if(operator == "-"){
             if(dummyVariable.startsWith("-")){
                let temp = string.substring(1, string.length);
                number = temp.split(operator);
                num1 = Number(number[0]);
                num2 = Number(number[1]);
                result =  num2 - num1;

            }else{
                result =  num1 - num2;
            }
            
            // console.log(number);
        }
        else if(operator == "*"){
            result =  num1 * num2;
            // console.log(num1);
        }else if(operator == "--"){
            result =  num1 + num2;
            console.log(num1);
        }
        else if(operator == "/"){
            if(num2 == 0){
                result = "ERROR";
                div.textContent = "ERROR";
                return result;
            }else{
                result = num1/num2;
            }
        }
        console.log(result);
        return String(Number(result.toFixed(12)));
}

container2.appendChild(div);

//Need to add keyboard support.
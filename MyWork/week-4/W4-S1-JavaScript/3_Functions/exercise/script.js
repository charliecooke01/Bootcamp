//Declare variables
var number1 = 7;
var number2 = 8;
var operation = "multiply";

calculator(1,2,"divide")

function calculator(number1, number2, operation){
    let result;

    //Switch case calculator
    switch(operation) {
        case "add":
            console.log("add result : " + (parseInt(number1) + parseInt(number2)));
            break;
        case "subtract":
            console.log("subtract result : " + (parseInt(number1) - parseInt(number2)));
            break;
        case "multiply":
            console.log("multiply result : " + (parseInt(number1) * parseInt(number2)));
            break;
        case "divide":
            console.log("divide result : " + (parseInt(number1) / parseInt(number2)));
            break;
        default:
        console.log("not working");
    } 
    return result;
}
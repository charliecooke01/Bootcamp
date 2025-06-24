// create your coffee object array here
var coffee = [
    {
    type: "Latte",
    milk: true,
    customer: "Alan",
    },
    {
    type: "Flat White",
    milk: true,
    customer: "Ben",
    },
    {
    type: "Espresso",
    milk: false,
    customer: "Chris",
    },
];

var coffee2 = [
    {
    type: "Mocha",
    milk: true,
    customer: "Derek",
    },

];

// create your print order function here
function printOrders(coffee)
{
    //another way to do it
    //for (let order of coffee)

    for (var i = 0; i < coffee.length; i++) {
    console.log(`Customer: ${coffee[i].customer}, Coffee: ${coffee[i].type}, Milk: ${coffee[i].milk}`);
    }
}

printOrders(coffee);
printOrders(coffee2);
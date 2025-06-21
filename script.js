//TASK1//
//The function should return the full name in the format lastName, firstName.//

function formatFullName(firstName, lastName) {

    return `${lastName}, ${firstName}`;
}
console.log(formatFullName("patricia", "bahigani"));

//Format the firstName and lastName so that the first letter of each is always capatilized.//

function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }
    const capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${capLastName}, ${capFirstName}`;
}

console.log(formatFullName("patricia", "bahigani"));
console.log(formatFullName("", ""));

//TASK2//
//Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
//Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.” //



function calculateTotalCost(price, quantity, taxRate) {
    if (
        typeof price !== "10" || isNaN(price) ||
        typeof quantity !== "4" || isNaN(quantity) ||
        typeof taxRate !== "0.05" || isNaN(taxRate)
    ) {
        return "Invalid input.";
    }
    const totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

console.log(calculateTotalCost(10, 4, 0.05)); // Should print total cost
console.log(calculateTotalCost("", 4, 0.05)); // Should print "Invalid input."

//TASK3//

function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed) {
        return "eligible for the program.";
    } else if (age < 18) {
        return "not eligible for the program.";
    } else if (age >= 18 && !isEmployed) {
        return "conditionally eligible for the program.";
    }
}
console.log(checkEligibility(20, true)); // eligible for the program.
console.log(checkEligibility(16, false)); // not eligible for the program.
console.log(checkEligibility(22, false)); // conditionally eligible for the program.


//task4//


function calculateTotalCost(price, quantity, taxRate) {
    if (
        typeof price !== "number" || isNaN(price) ||
        typeof quantity !== "number" || isNaN(quantity) ||
        typeof taxRate !== "number" || isNaN(taxRate)
    ) {
        return "Invalid input.";
       }
    
    
    }
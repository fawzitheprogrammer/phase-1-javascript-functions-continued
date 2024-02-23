// code your solution here
// 1) Saturday Fun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// 2) Monday Work function expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// 3) Wrap Adjective function
function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const enthusiasticPraise = wrapAdjective("!!!");
console.log(enthusiasticPraise("a hard worker")); // "You are !!!a hard worker!!!"

const gentleEncouragement = wrapAdjective("||");
console.log(gentleEncouragement("a dedicated programmer")); // "You are ||a dedicated programmer||"

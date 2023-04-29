// Task 1

counterForTaskOne = 20;
resultForTaskOne = '';

while (counterForTaskOne <= 30) {
    resultForTaskOne += `${counterForTaskOne} `;
    counterForTaskOne += 0.5;
}

alert(`№ 1\n${resultForTaskOne.slice(0, resultForTaskOne.length - 1)}`);

// Task 2

counterForTaskTwo = 10;
resultForTaskTwo = '';

while (counterForTaskTwo <= 100) {
    resultForTaskTwo += `${counterForTaskTwo} USD = ${counterForTaskTwo*27} UAH\n`;
    counterForTaskTwo += 10;
}

alert(`№ 2\n${resultForTaskTwo.slice(0, resultForTaskTwo.length - 1)}`)

// Task 3

numberFromUserForTaskThree = prompt('Please enter integer number?');
counterForTaskThree = 1;
resultForTaskThree = '';

while (counterForTaskThree <= 100) {
    if (counterForTaskThree ** 2 <= numberFromUserForTaskThree) {
        resultForTaskThree += `${counterForTaskThree}, `
    } else {
        break;
    }
    counterForTaskThree++;
}

alert(`№ 3\n${resultForTaskThree.slice(0, resultForTaskThree.length - 2)}`)

// Task 4

numberFromUserForTaskFour = prompt('Please enter integer number?');
counterForTaskFour = 1;
resultForTaskFour = 0;

if (numberFromUserForTaskFour <= 1) {
    resultForTaskFour = 1;
} else {
    while (counterForTaskFour <= numberFromUserForTaskFour) {
        if (numberFromUserForTaskFour % counterForTaskFour === 0) {
            resultForTaskFour++;
        }
        counterForTaskFour++;
    }
}

textResultForTaskFour = resultForTaskFour === 2 ? `The number ${numberFromUserForTaskFour} is prime` : `The number ${numberFromUserForTaskFour} is not prime`

alert(`№ 4\n${textResultForTaskFour}`)

// Task 5

numberFromUserForTaskFive = prompt('Please enter integer number?');
changeableNumberFromUserForTaskFive = numberFromUserForTaskFive;
counterOneForTaskFive = 1;
counterTwoForTaskFive = 0;
resultForTaskFive = false;

while (counterOneForTaskFive <= changeableNumberFromUserForTaskFive) {
    if (changeableNumberFromUserForTaskFive === 1) {
        break;
    } else if (changeableNumberFromUserForTaskFive % 3 === 0) {
        resultForTaskFive = true;
        changeableNumberFromUserForTaskFive /= 3;
        counterTwoForTaskFive++;
    } else {
        resultForTaskFive = false;
        break;
    }
    counterOneForTaskFive * 3;
}

textResultForTaskFive = resultForTaskFive ? `We can get the number ${numberFromUserForTaskFive} by raising 3 to the ${counterTwoForTaskFive}th power` 
    : `We can\'t get the number ${numberFromUserForTaskFive} by raising 3 to the power of n`;

alert(`№ 5\n${textResultForTaskFive}`);

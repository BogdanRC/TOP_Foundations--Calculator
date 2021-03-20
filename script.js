//variables
let operator;
let firstVal = ``;
let secondVal = ``;
let total;
let display = document.getElementById(`display_value`);



// for loop cu i, daca i <= 1 continue, daca i > 1 error

//constants
const addButtonClass = document.querySelectorAll("button");
const divideOperator = document.getElementById(`divide`);
const multiplyOperator = document.getElementById(`multiply`);
const addOperator = document.getElementById(`add`);
const subtractOperator = document.getElementById(`subtract`);
const numberButtons = Array.from(document.querySelectorAll(`.btn_nbr`));

const equalsBtn = document.getElementById(`controls_equals`);
const acBtn = document.getElementById(`controls_clear`);
const cBtn = document.getElementById(`controls_delete`);

// daca este firstval, secondval si operator call la functia operate
// pe butoanele de la operatii
divideOperator.addEventListener(`click`, () => {
    if (firstVal && secondVal && operator) {
        operate();
        secondVal = ``;
    } else operator = `/`;

});
multiplyOperator.addEventListener(`click`, () => {
    if (firstVal && secondVal && operator) {
        operate();
        secondVal = ``;
    } else operator = `*`;
});
addOperator.addEventListener(`click`, () => {
    if (firstVal && secondVal && operator) {
        operate();
        secondVal = ``;
    } else operator = `+`;
});
subtractOperator.addEventListener(`click`, () =>  {
    if (firstVal && secondVal && operator) {
        operate();
        secondVal = ``;
    } else operator = `-`;
});

equalsBtn.addEventListener(`click`, () => {
    if (firstVal && secondVal) {
        operate();
        secondVal = ``;

    } else return;
})

acBtn.addEventListener(`click`, () => {
    operator = ``;
    firstVal = ``;
    secondVal = ``;
    total = ``;
    display.textContent = ``;
})

cBtn.addEventListener(`click`, () => {
    if (firstVal && secondVal) {
        display.textContent = firstVal;
        operator = ``;
        return;

    }
    if (firstVal && !secondVal) {
        firstVal = ``
        display.textContent = ``;
        operator = ``;

    }
})

const updateFirstOperandValue = numberButtons.map(btn => {
    btn.addEventListener(`click`, () => {
        lengthCheck();
        if (operator) return;
        firstVal += String(btn.textContent);
        return (display.textContent = firstVal);
    })
})
const updateSecondOperandValue = numberButtons.map(btn => {
    btn.addEventListener(`click`, () => {
        lengthCheck();
        if (!firstVal && !operator) return;
        if (firstVal && operator) {
            secondVal += String(btn.textContent);
            return (display.textContent = secondVal);
        }
    })

})

for (const button of addButtonClass) {
    button.addEventListener('click', () => {
        button.classList.add(`clicked`);
        setTimeout(() => button.classList.remove(`clicked`), 100)
    })
}

//functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return +(a * b).toFixed(1);
}

function divide(a, b) {
    return +(a / b).toFixed(1);
}

function operate(a, b) {
    a = Number(firstVal);
    b = Number(secondVal);
    if (operator === `/`) {
        if (firstVal == `0` || secondVal == `0`) {
            display.textContent = `Error`;
        } else if (firstVal !== `0` || secondVal !== `0`) {
            display.textContent = divide(a, b);
        }
        firstVal = display.textContent;
    } else if (operator === `*`) {
        if (firstVal == `0` || secondVal == `0`) {
            display.textContent = `Error`;
        } else if (firstVal !== `0` || secondVal !== `0`) {
            display.textContent = multiply(a, b);
            firstVal = display.textContent;
        }
    } else if (operator === `+`) {
        display.textContent = add(a, b);
        firstVal = display.textContent;
        total = firstVal;
    } else if (operator === `-`) {
        display.textContent = subtract(a, b);
        firstVal = display.textContent;
    }
    if (total) { secondVal = `` }
}


function lengthCheck() {
    if (String(display.textContent).length >= 18) {
        firstVal = firstVal.substring(0, 17);
        secondVal = secondVal.substring(0, 17);
    }
}

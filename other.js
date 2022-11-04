// get btns of calculator body
const calc = document.querySelector('.calculator__btns');
// get screeen for output
const output = document.getElementById('output');
//get clear btn 
const clr = document.getElementById('clear');
//get dot btn 
const dotBtn = document.getElementById('dot');

//initial stats
let a = '';
let b = '';
let isDot = false;
let sign = '';
let secondSign = '';// this value for costant input wothout equal


// switch calculation function logic outside
//to be modified operators
function calculateBySwitch() {
    switch (sign) {
        case '+':
            a = +a + +b;
            b = '';
            output.value = a;
            break;
        case '-':
            a = +a - +b;
            b = '';
            output.value = a;
            break;
        case '*':
            a = +a * +b;
            b = '';
            output.value = a;
            break;
        case '/':
            a = +a / +b;
            b = '';
            output.value = a;
            break;

    }
}

//clear function
function claerAll() {
    a = '';
    b = '';
    sign = '';
    secondSign = '';
    output.value = '';
}


//clear function listener on btn
clr.addEventListener('click', claerAll)

//put click event on calculator
calc.addEventListener('click', e => {
    // variables to check that you click exact btns
    const isBtnCheck = e.target.classList.contains('btn');
    const isNumberCheck = e.target.classList.contains('num');
    const isEqualCheck = e.target.classList.contains('equal');
    const isSignCheck = e.target.classList.contains('sign');
    const isDotCheck = e.target.classList.contains('dot');
    // check if only btns clicked, not empty area
    if (!isBtnCheck) return;

    //get click value
    const input = e.target.innerText;


    //get FIRST number
    if (b == '' && sign == '' && isNumberCheck) {
        // dotChecker();
        a += input;
        output.value = a;
    }

    //get for MATH SYMBOL by click
    if (isSignCheck && a !== '' && b == '') {
        sign = input;
    }

    //get SECOND number
    if ((a !== '') && (sign !== '') && isNumberCheck) {
        b += input;
        output.value = b;
    }

    // +- PlusMinus symbol - placed inside for correct work 
    if (input == '∓') {
        if (b == '') {
            a = (a * -1);
        } else {
            b = (b * -1);
        }
        output.value = (output.value * -1);
    }

    // -----------  % Percents calculation ----------
    if (input == '%') {
        if (b == '') {
            a = (a / 100)
        } else { b = b / 100 }
        output.value = (output.value / 100);
    }

    // solve calculation on equal click
    if (isEqualCheck) {
        calculateBySwitch()
    }

    //solve calculation for signs (can be code reduced by transfering
    // this to equal check with || )
    if (isSignCheck && a !== '' && b !== '') {
        secondSign = input;
        calculateBySwitch();
        sign = secondSign;
        secondSign = '';
    }

    console.table(('First number is: ' + a), ('Math sign is: ' + sign), ('Second number is: ' + b))
});



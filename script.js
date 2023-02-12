const btns = document.querySelectorAll('.btn')
const input = document.getElementById('input')

// Calculator Object

const calc = {
    currentVal: '',
    prevVal: '',
    currentOperation: '',
    ans: '0',
    reset: () => {
        calc.currentVal = ''
        calc.prevVal = ''
        calc.currentOperation = ''
        calc.ans = '0'
        input.innerText = '0'
    },
    add: () => {
        calc.ans = (Number(calc.prevVal) + Number(calc.currentVal)).toString()
        calc.currentVal = calc.ans
        calc.currentOperation = ''
        calc.prevVal = ''
    },
    subtract: () => {
        calc.ans = (Number(calc.prevVal) - Number(calc.currentVal)).toString()
        calc.currentVal = calc.ans
        calc.currentOperation = ''
        calc.prevVal = ''
    },
    multiply: () => {
        calc.ans = (Number(calc.prevVal) * Number(calc.currentVal)).toString()
        calc.currentVal = calc.ans
        calc.currentOperation = ''
        calc.prevVal = ''
    },
    divide: () => {
        calc.ans = (Number(calc.prevVal) / Number(calc.currentVal)).toString()
        calc.currentVal = calc.ans
        calc.currentOperation = ''
        calc.prevVal = ''
    },
    swap: () => {
        calc.prevVal = calc.currentVal
        calc.currentVal = ''
    },
    display: () => {
        input.innerText = calc.ans
    },
}

// Button logic

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const val = btn.innerHTML.trim()
        if (Number(val) || val == '.' || val == 0) {
            calc.currentVal += val
            input.innerText = calc.currentVal
        } else {
            if (val.toUpperCase() === 'RESET') {
                calc.reset()
            } else if (val.toUpperCase() === 'DEL') {
                calc.currentVal = calc.currentVal.slice(
                    0,
                    calc.currentVal.length - 1
                )
                input.innerText = calc.currentVal || '0'
            } else if (val === '=') {
                switch (calc.currentOperation) {
                    case '+':
                        calc.add()
                        break
                    case '-':
                        calc.subtract()
                        break
                    case 'x':
                        calc.multiply()
                        break
                    case '/':
                        calc.divide()
                        break
                    default:
                        break
                }
                calc.display()
            } else if (val === '+') {
                handleAddtion()
            } else if (val === '-') {
                handleSubtraction()
            } else if (val === 'x') {
                handleMultiplication()
            } else if (val === '/') {
                handleDivision()
            }
        }
        console.log(calc)
    })
})

// functions

function handleAddtion() {
    if (calc.currentOperation) {
        checkOperation()
    }
    calc.currentOperation = '+'
    if (calc.prevVal && calc.currentVal) {
        calc.add()
        calc.display()
        calc.currentOperation = '+'
    } else {
        if (calc.currentVal) {
            calc.swap()
        }
    }
    if (calc.currentOperation && !calc.prevVal && calc.ans) {
        calc.swap()
    }
}

function handleSubtraction() {
    if (calc.currentOperation) {
        checkOperation()
    }
    calc.currentOperation = '-'
    if (calc.prevVal && calc.currentVal) {
        calc.subtract()
        calc.display()
        calc.currentOperation = '-'
    } else {
        if (calc.currentVal) {
            calc.swap()
        }
    }
    if (calc.currentOperation && !calc.prevVal && calc.ans) {
        calc.swap()
    }
}

function handleMultiplication() {
    if (calc.currentOperation) {
        checkOperation()
    }
    calc.currentOperation = 'x'
    if (calc.prevVal && calc.currentVal) {
        calc.multiply()
        calc.display()
        calc.currentOperation = 'x'
    } else {
        if (calc.currentVal) {
            calc.swap()
        }
    }
    if (calc.currentOperation && !calc.prevVal && calc.ans) {
        calc.swap()
    }
}

function handleDivision() {
    if (calc.currentOperation) {
        checkOperation()
    }
    calc.currentOperation = '/'
    if (calc.prevVal && calc.currentVal) {
        calc.divide()
        calc.display()
        calc.currentOperation = '/'
    } else {
        if (calc.currentVal) {
            calc.swap()
        }
    }
    if (calc.currentOperation && !calc.prevVal && calc.ans) {
        calc.swap()
    }
}

function checkOperation() {
    switch (calc.currentOperation) {
        case '+':
            calc.add()
            break
        case '-':
            calc.subtract()
            break
        case 'x':
            calc.multiply()
            break
        case '/':
            calc.divide()
            break
        default:
            break
    }
    calc.display()
}

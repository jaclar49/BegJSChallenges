// Q1

function additon(num1, num2) {
    return num1 + num2
}

console.log(additon(3, 5))

// Q2

function hoursIntoSeconds(num) {
    return num * 60 * 60
}

console.log(hoursIntoSeconds(2))

// Q3

function calcPerimeter(length, width) {
    return 2 * length + 2 * width
}

console.log(calcPerimeter(10, 20))

// Q4

function calcTriangleArea(base, height) {
    return 0.5 * base * height
}

console.log(calcTriangleArea(20, 20))

// Q5

function appendFrontend(string) {
    return string + "Frontend"
}

console.log(appendFrontend("Apple"))

// Q6

function sumGreaterThan100(num1, num2) {
    if(num1 + num2 > 100) {
        return true
    }
    else {
        return false
    }
}

console.log(sumGreaterThan100(100, -50))


// Q7

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))

// Q8

function oppositeBoolean(bool) {
    return !bool
}

console.log(oppositeBoolean(false))

// Q9

function isNotZero(element) {
    return element !== 0
}

console.log(isNotZero(null))

// Q10

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(9, 8))

// Q11

function isOdd(num) {
    return (num % 2) !== 0
}

console.log(isOdd(3))

// Q12

function booleanInteger(num) {
    if (num % 2 === 0)
    {
        return 1
    }
    return -1
}

console.log(booleanInteger(5))
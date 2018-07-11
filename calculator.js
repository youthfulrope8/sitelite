/* A Simple Calculator */
function calculator() {
    var x1 = prompt('Input first number')
    x1 = parseInt(x1);
    var z1 = prompt("Symbol (+, -, *, /)")
    var y1 = prompt('Input second number')
    y1 = parseInt(y1);

    if(z1 == '+'){
        alert(x1 + " plus " + y1 + " is " + (x1 + y1).toString())
    }
    else if(z1 == '-'){
        alert(x1 + " minus " + y1 + " is " + x1 - y1)
    }
    else if(z1 == '*'){
        alert(x1 + " multiply " + y1 + " is " + x1 * y1)
    }
    else if(z1 == '/'){
        alert(x1 + " split by " + y1 + " is " + x1 / y1)
    }
}

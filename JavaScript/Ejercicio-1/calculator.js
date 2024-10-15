let n1 = Number(prompt('Numero 1'));
let n2 = Number(prompt('Numero 2'));
let operator = prompt('Operacion (+, -, *, /)');

function operation (n1, n2, operator) {
    let result = null;
    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 == 0) {
                break;
            }
            result = n1 / n2;
            break;
    }

    return result;
}

let result = operation(n1,n2,operator);

if(result === null) {
    console.log('Error: se ingreso un operador incorrecto o se intento dividir entre 0.');
    alert('Error: se ingreso un operador incorrecto o se intento dividir entre 0.');
} else {
    console.log('El resultado es: ' + result);
    alert('El resultado es: ' + result);
}
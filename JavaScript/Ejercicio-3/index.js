const buttons = document.querySelectorAll('.calculator button');
const operationField = document.querySelector('.calculator h2');
const operationsHistory = document.querySelector('.operations-history');

buttons.forEach(button => {
    if (button.textContent == '=') {

        button.addEventListener('click', function () {

            try {
                let operation = operationField.innerHTML;
                let result = eval(operation);
                operationField.innerHTML = result;

                if (result == undefined) {
                    return;
                }
                
                let li = document.createElement('li');
                li.textContent = `${operation} = ${result}`;
                operationsHistory.prepend(li);
            } catch (error) {
                alert('Operacion Invalida');
            }

        });
    } else if (button.innerText == 'C') {
        button.addEventListener('click', function () {
            operationField.innerHTML = '';
        });
    } else {
        button.addEventListener('click', function () {
            operationField.innerHTML += button.innerHTML;
        });
    }

});
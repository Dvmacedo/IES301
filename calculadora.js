let operando1 = '';
let operando2 = '';
let operador = '';
let resultado = 0;
let decimal = false;

function atualizarDisplay() {
    document.getElementById('resultado').value = resultado;
}

function limpar() {
    operando1 = '';
    operando2 = '';
    operador = '';
    resultado = 0;
    decimal = false;
    atualizarDisplay();
}

function adicionarNumero(numero) {
    if (operador === '') {
        operando1 += numero;
        resultado = parseFloat(operando1);
    } else {
        operando2 += numero;
        resultado = parseFloat(operando2);
    }
    atualizarDisplay();
}

function adicionarDecimal() {
    if (!decimal) {
        decimal = true;
        if (operador === '') {
            operando1 += '.';
            resultado = parseFloat(operando1);
        } else {
            operando2 += '.';
            resultado = parseFloat(operando2);
        }
        atualizarDisplay();
    }
}

function adicionarOperador(op) {
    if (operador === '') {
        operador = op;
        decimal = false;
    } else {
        calcularResultado();
        operador = op;
        operando2 = '';
        decimal = false;
    }
}

function calcularResultado() {
    switch (operador) {
        case '+':
            resultado = parseFloat(operando1) + parseFloat(operando2);
            break;
        case '-':
            resultado = parseFloat(operando1) - parseFloat(operando2);
            break;
        case '*':
            resultado = parseFloat(operando1) * parseFloat(operando2);
            break;
        case '/':
            resultado = parseFloat(operando1) / parseFloat(operando2);
            break;
    }
    operando1 = resultado.toString();
    operando2 = '';
    operador = '';
    atualizarDisplay();
}

function alterarSinal() {
    if (operador === '') {
        operando1 = (parseFloat(operando1) * -1).toString();
        resultado = parseFloat(operando1);
    } else {
        operando2 = (parseFloat(operando2) * -1).toString();
        resultado = parseFloat(operando2);
    }
    atualizarDisplay();
}

atualizarDisplay();

let result = document.getElementById("result");

function input(num) {
    if (result.value === 'Erro! Adicione valores válidos.') {
        result.value = num;
    } else {
        result.value += num;
    }
}

function calc() {
    try {
        if (result.value !== "") {
            let expression = result.value;
            expression = expression.replace('%', '/100*');
            result.value = eval(expression);
        } else {
            alert("Erro! Adicione valores válidos.");
        }
    } catch (error) {
        result.value = 'Erro! Adicione valores válidos.';
    }
}

function reset() {
    result.value = "";
}

function del() {
    let currentValue = result.value;
    result.value = currentValue.substring(0, currentValue.length - 1);
}
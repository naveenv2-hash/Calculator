let result = document.getElementById('result');

function insert(num) {
    result.value += num;
}

function clearScreen() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = 'Error';
    }
}
function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function division(x, y) {
    return x / y;
}

function multiplication(x, y) {
    return x * y;
}

function operate(x, y, opp) {
    if (opp == 'addition') {
        return addition(x, y);
    } else if (opp == 'subtraction') {
        return subtraction(x, y);
    } else if (opp == 'division') {
        return division(x, y);
    } else if (opp == 'multiplication') {
        return multiplication(x, y);
    }
}
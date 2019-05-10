
// BASIC FUNCTIONS
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

function buildNum(x, y) {
    y = parseInt(y, 10);
    return x * 10 + y;
}

function operate(x, y, opp) {
    if (opp == 'addition') {
        return addition(x, y);
    } else if (opp == 'subtraction') {
        return subtraction(x, y);
    } else if (opp == 'division') {
        return (y == 0 ? 'T̸͚͙͔͓̙̺̹̋̔́͛̋̓̊͑͝H̶̨̦̯͖̤͛̐͗̃ͬ̆̚Ï͈̘̻̝̈́͋͒ͧ͒͠S͖̾̅ͬͩ͊ ̨̈́ͮ̓̊͊̇͋ͯͭ҉̹̳̩̙̬͖I͈̘̰̠̘͚̋͊̓ͅS͕͈͇͓̮̗̥͎̹ͨ̾̒̌̋̇ͩ͌͘͞ ̶̷͍̩͍͖̯͑́̚͠N̷͓̤͙̞͖͈̖̑ͩ̽ͫ̕̕O͓̱̘̟͕̖̪̪̍̓ͦͩͭ̎͛́ͅT͙̤͈͙̩̘͕̳͊̓̂̑͐ͭ̀͡ ̷̩̝̀ͪ͒̉͋͠A̻̘ͦ͌̕͟͜Ļ̛̼̼̖̦̝̑͂͗͌ͨ̈́̕L̻͕̪͙̎ͦ͛O̪͇̯͙̹ͧ́ͪ̌ͅW̴̨͈̰͗̃ͣ̐͆ͨͭE̳ͨ̔̔̈́̂͑͟Ḍ̢͔̹̱̲̝̞̜̾͂̔̿̄̓ͅ.͉̱̬̝̠͎̿ͭ͐ͣ̽̋ͫ̌ͮ' : x / y)
    } else if (opp == 'multiplication') {
        return multiplication(x, y);
    } else if (opp == 'skip') {
        return x;
    }
}

// MASTER FUNCTION
function checkAssign(e) {
    let val = e.target.getAttribute('data-key'); // THIS TOOK WAY TOO LONG. GETATTRIBUTE BLESS YOU I AM STUPID
    let num = '1234567890';
    if (num.includes(val) == true) {
        x = buildNum(x, val);
        document.getElementById('display').innerHTML = x;
    } else if (eventNum == 0) {
        savedOpp = val;
        savedVal = x;
        x = 0;
        eventNum++;
    } else if (val == 'multiplication' || val == 'addition' || val == 'subtraction' || val == 'division') {
        savedVal = operate(savedVal, x, savedOpp)
        savedOpp = val;
        x = 0;
        document.getElementById('display').innerHTML = savedVal;
        if (savedVal == 'T̸͚͙͔͓̙̺̹̋̔́͛̋̓̊͑͝H̶̨̦̯͖̤͛̐͗̃ͬ̆̚Ï͈̘̻̝̈́͋͒ͧ͒͠S͖̾̅ͬͩ͊ ̨̈́ͮ̓̊͊̇͋ͯͭ҉̹̳̩̙̬͖I͈̘̰̠̘͚̋͊̓ͅS͕͈͇͓̮̗̥͎̹ͨ̾̒̌̋̇ͩ͌͘͞ ̶̷͍̩͍͖̯͑́̚͠N̷͓̤͙̞͖͈̖̑ͩ̽ͫ̕̕O͓̱̘̟͕̖̪̪̍̓ͦͩͭ̎͛́ͅT͙̤͈͙̩̘͕̳͊̓̂̑͐ͭ̀͡ ̷̩̝̀ͪ͒̉͋͠A̻̘ͦ͌̕͟͜Ļ̛̼̼̖̦̝̑͂͗͌ͨ̈́̕L̻͕̪͙̎ͦ͛O̪͇̯͙̹ͧ́ͪ̌ͅW̴̨͈̰͗̃ͣ̐͆ͨͭE̳ͨ̔̔̈́̂͑͟Ḍ̢͔̹̱̲̝̞̜̾͂̔̿̄̓ͅ.͉̱̬̝̠͎̿ͭ͐ͣ̽̋ͫ̌ͮ') {
            reset();
        }
    } else if (val == 'run') {
        savedVal = operate(savedVal, x, savedOpp);
        savedOpp = 'skip';
        document.getElementById('display').innerHTML = savedVal;
        if (savedVal == 'T̸͚͙͔͓̙̺̹̋̔́͛̋̓̊͑͝H̶̨̦̯͖̤͛̐͗̃ͬ̆̚Ï͈̘̻̝̈́͋͒ͧ͒͠S͖̾̅ͬͩ͊ ̨̈́ͮ̓̊͊̇͋ͯͭ҉̹̳̩̙̬͖I͈̘̰̠̘͚̋͊̓ͅS͕͈͇͓̮̗̥͎̹ͨ̾̒̌̋̇ͩ͌͘͞ ̶̷͍̩͍͖̯͑́̚͠N̷͓̤͙̞͖͈̖̑ͩ̽ͫ̕̕O͓̱̘̟͕̖̪̪̍̓ͦͩͭ̎͛́ͅT͙̤͈͙̩̘͕̳͊̓̂̑͐ͭ̀͡ ̷̩̝̀ͪ͒̉͋͠A̻̘ͦ͌̕͟͜Ļ̛̼̼̖̦̝̑͂͗͌ͨ̈́̕L̻͕̪͙̎ͦ͛O̪͇̯͙̹ͧ́ͪ̌ͅW̴̨͈̰͗̃ͣ̐͆ͨͭE̳ͨ̔̔̈́̂͑͟Ḍ̢͔̹̱̲̝̞̜̾͂̔̿̄̓ͅ.͉̱̬̝̠͎̿ͭ͐ͣ̽̋ͫ̌ͮ') {
            reset();
        }
    } else if (val == 'clear') {
        reset()
    }
}



// HERES YOUR EVENT LISTENER
window.addEventListener('load', listen);
function listen() {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', checkAssign);
    }
}


// INITIALIZE AND RESET
let x = 0;
document.getElementById('display').innerHTML = x;
let savedOpp = 0;
let savedVal = 0;
let eventNum = 0;
function reset() {
    x = 0;
    savedOpp = 0;
    savedVal = 0;
    eventNum = 0;
}
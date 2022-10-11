let input = document.getElementById('input');
let range = document.getElementById('range');

let rangeDisplay = document.getElementById('rangeDisplay');
let tipAmount = document.getElementById('tipAmount');
let totalBill = document.getElementById('totalBill');
let inputValue = 0, rangeValue = 0, tipAmountVar = 0, totalAmountVar = 0;

input.addEventListener('input',tipCalculate);
range.addEventListener('input',tipCalculate);

function tipCalculate(x){
    inputValue = parseFloat(input.value);
    rangeValue = parseFloat(range.value);

    rangeDisplay.innerText = rangeValue + '%';

    tipAmountVar = (rangeValue * inputValue) / 100;
    if(isNaN(tipAmountVar)){
        tipAmount.innerText = '';
    }
    else{
        tipAmount.innerText = tipAmountVar;
    }

    totalAmountVar = parseFloat(inputValue + tipAmountVar);
    if(isNaN(totalAmountVar)){
        totalBill.innerText = '';
    }
    else{
        totalBill.innerText = totalAmountVar.toFixed(3);
    }
    
    x.preventDefault();
}

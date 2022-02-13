// generating pin and showing to display
function generatePin(){
    const pin = getPin();
    document.getElementById('pin-input').value = pin;
}
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } 
    else{
        return getPin();
    }
}

document.getElementById('input-numbers').addEventListener('click', function(event){
    const number = event.target.innerText;
    const previousInput = document.getElementById('calc-input');
    if(isNaN(number)){
        if(number == 'C'){
            previousInput.value = '';
        }
    }
    else{
        const previousNumber = previousInput.value;
        const newNumber = previousNumber + number;
        previousInput.value = newNumber;

    }
})

function verifyPin(){
    const pin = document.getElementById('pin-input').value;
    const typedNumber = document.getElementById('calc-input').value;

    const successMsg = document.getElementById('notify-success');
    const failMsg = document.getElementById('notify-fail');
    if(pin==typedNumber){
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }
    else{
        successMsg.style.display = 'none';
        failMsg.style.display = 'block';
    }
}
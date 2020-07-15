// STATE VARIABLE
let counter = 0;

function increaseCounter(n) {
    counter += n;
}

function decreaseCounter(n) {
    counter -= n;
}

$(function(){

    $("#increase-link").click(function(){
        increaseCounter(1);
        updateDisplay();
    })

    $('#reset-link').click(function(){
        decreaseCounter(-1);
        updateDisplay();
    })
})

function updateDisplay()
{
    $('#counter').text(counter);
}

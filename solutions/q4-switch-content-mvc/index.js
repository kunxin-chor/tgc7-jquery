// MODEL
let firstText="ABC";
let secondText="DEF";

function swap() {
    let t = firstText;
    firstText = secondText;
    secondText = t;
}

function updateFirst(newFirst) {
    firstText = newFirst;
}

function updateSecond(newSecond) {
    secondText = newSecond;
}

// CONTROLLER
$(function(){
    // update display when the JavaScript begins
    updateDisplay();

    $('#swap').click(function(){
        swap();
        updateDisplay();
    })

    $('#first').change(function(){
       let firstText = $('#first').val();
       updateFirst(firstText);
    });

    
    $('#second').change(function(){
       let newText = $('#second').val();
       updateSecond(newText);

    });

})

// VIEW
function updateDisplay()
{
    $("#first").val(firstText);
    $("#second").val(secondText);
}
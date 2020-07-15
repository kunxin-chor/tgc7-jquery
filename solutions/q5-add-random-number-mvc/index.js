// MODEL
let numbers = [1,2,3,4];

function addNumber(n) {
    numbers.push(n);
}

function calculateTotal() {
    let t = 0;
    for (let n of numbers) {
        t = t + n;
    }
    return t;
}

// CONTROLLER
$(function(){
    updateDisplay(numbers);

    $("#add-btn").click(function(){
        let n = Math.floor (Math.random()*10 ) + 1;
        addNumber(n);
        updateDisplay(numbers);
    })

    $("#calculate-btn").click(function(){
        let total = calculateTotal();
        alert(total);
    })

})

// VIEW
function updateDisplay(numberList) {
    // remove all children
    $("#numbers").empty();
    for (let n of numberList) {
        $("#numbers").append(`<p>${n}</p>`)
    }
}
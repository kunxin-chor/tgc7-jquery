$(function(){
    $("#add-btn").click(function(){
        // generate random number between 1 to 10
        let n = Math.floor(Math.random() * 10) + 1;

        // add the p with the number to the div
        $("#numbers").append(`<p>${n}</p>`)

    })

    $("#calculate-btn").click(function(){
        let numbers = $("#numbers p");
        let total = 0;
        for (let eachNumber of numbers) {
            total += parseInt(eachNumber.innerText);
        }
        alert(total);
    })
})
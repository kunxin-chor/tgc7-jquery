$(function(){

    $('#left').css('background-color', generateRandomColor());
    $('#right').css('background-color', generateRandomColor());

    $("#switch").click(function(){
        // extract out the current background-color and 
        // store inside the tempColor variable
        let tempColor = $("#left").css('background-color');
        let rightColor =  $("#right").css('background-color');
        $("#left").css('background-color', rightColor);
        $("#right").css('background-color', tempColor);
    })

})

function generateRandomColor() {
    // generate a random number from 0 to 255
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}
$(function(){
    $('#greet').click(function(){
        
        // extract out the value from the text input
        // with the id of `name-input`
        let name = $('#name-input').val();

        alert(`Hello ${name}`);

    })
})
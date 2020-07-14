// modify the css of our h1
// if using plain javascript: document.querySelector('#title').style.fontFamily = 'Verdana'
$("#title").css('font-family', 'Verdana');


// Use jquery to replicate the following:
// let specialElements = document.querySelectorAll('.special');
// for (let e of specialElements) {
//     e.style.backgroundColor = "yellow";
//     e.style.fontStyle = "italics";
// }
$(".special").css({
    'background-color': 'yellow',
    'font-style':'italic'
})

// change the attributes of links
$('#shopping-cart').attr('href', 'http://www.google.com')
$('#shopping-cart').attr('target', '_blank');
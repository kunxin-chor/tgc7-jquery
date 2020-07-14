// jQuery ready
$(function(){
    $('#reskin-btn').click(function(){
          $('.inner-dialogue').css('background-color', 'yellow');
          $('li').css('font-family', 'Verdana');
    })
});

// non-short form version
// jQuery(document).ready(function(){
//     $('.inner-dialogue').css('background-color', 'yellow');
//     $('li').css('font-family', 'Verdana');
// });
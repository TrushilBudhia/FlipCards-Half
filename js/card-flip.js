$(function () {
    $('#section-feature .card-wrap')
        .hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        })
        .click(function(event) {
 
                $(this).toggleClass('active');
    
        });
});
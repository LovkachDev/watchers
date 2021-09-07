
$(document).ready(function()
{
    $('.hbm').click(function(event)
    {
        $('.nav__menu').toggleClass('notshow');
        $('.nav__menu').toggleClass('menu');
        $('body').toggleClass('lock');
    });
});
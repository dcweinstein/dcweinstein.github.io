var curPageSelector = "#intro";
var prevPageSelector = "";

$('#header-content').hover(function() {
    $('#bottom-hr').css('bottom', '0');
    $('#bottom-hr').css('top', '-124px');
    $('#name-header').addClass('bounceOutLeft');
    $('#contact-header').removeClass('bounceOutLeft');
    $('#contact-header').css('display', 'block');
}, function() {
    $('#contact-header').addClass('bounceOutLeft');
    $('#name-header').removeClass('bounceOutLeft');
});

$('.ui.dropdown').dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
        switch(value) {
            case "intro":
                prevPageSelector = curPageSelector;
                curPageSelector = "#intro";
                break;
            case "reflection":
                prevPageSelector = curPageSelector;
                curPageSelector = "#reflection";
                break;
            case "experience":
                prevPageSelector = curPageSelector;
                curPageSelector = "#experience";
                break;
            case "projects":
                prevPageSelector = curPageSelector;
                curPageSelector = "#projects";
                break;
            case "resume":
                prevPageSelector = curPageSelector;
                curPageSelector = "#resume";
                break;
        }
        $(curPageSelector).addClass('active');
        $(prevPageSelector).addClass('bounceOutLeft');
        $(curPageSelector).removeClass('bounceOutLeft');
    }
});

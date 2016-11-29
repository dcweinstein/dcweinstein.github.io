var curPageSelector = "#intro-text";
var prevPageSelector = "";
var curActive = "#intro";
var prevActive = "";

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
                curPageSelector = "#intro-text";
                prevActive = curActive;
                curActive = "#intro";
                break;
            case "reflection":
                prevPageSelector = curPageSelector;
                curPageSelector = "#reflection-content";
                prevActive = curActive;
                curActive = "#reflection";
                break;
            case "experience":
                prevPageSelector = curPageSelector;
                curPageSelector = "#experience-content";
                prevActive = curActive;
                curActive = "#experience";
                break;
            case "projects":
                prevPageSelector = curPageSelector;
                curPageSelector = "#projects-content";
                prevActive = curActive;
                curActive = "#projects";
                break;
            case "resume":
                var win = window.open('/resume.pdf', '_blank');
                win.focus();
                window.location.reload(false);
                break;
        }
        $(prevActive).find('.footer').css('display', 'none');
        $(curActive).addClass('active');
        $(prevPageSelector).addClass('bounceOutLeft');
        $(curPageSelector).removeClass('bounceOutLeft');
        $(curActive).find('.footer').css('display', 'block');
    }
});

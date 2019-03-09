// debugger;

const hideAll = function() {
    $(".contentPage").addClass('hide');
};

const showAbout = function(e) {
    if (e) {
        e.preventDefault();
    } 
    hideAll();
    $("#home").removeClass('hide');
};

const showPortfolio = function(e) {
    e.preventDefault();
    hideAll();
    $("#portfolioPage").removeClass('hide');
};

const showContact = function(e) {
    e.preventDefault();
    hideAll();
    $("#contactPage").removeClass('hide');
};

showAbout();

$('#showHome').on('click', showAbout);
$('#showPortfolio').on('click', showPortfolio);
$('#showContact').on('click', showContact);
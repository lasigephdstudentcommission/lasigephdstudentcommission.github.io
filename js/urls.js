$(document).ready(function() {

    /*
    URLs
    */
    
    // WELCOME DAY
    var url = window.location.href;
    if (url.indexOf('?welcomeday') != -1) {
        $("#portfolioModalWD").modal('show');
    }

    var url = window.location.href;
    if (url.indexOf('?welcomeday2022') != -1) {
        $("#portfolioModalWD").modal('show');
        showWDInfo(2022)
    }

    // FORUM
    var url = window.location.href;
    if (url.indexOf('?forum') != -1) {
        $("#portfolioModal1").modal('show');
    }

    var url = window.location.href;
    if (url.indexOf('?forum2') != -1) {
        $("#portfolioModal1").modal('show');
        showWorkshopInfo(2)

    }

    // WORKSHOP
    var url = window.location.href;
    if (url.indexOf('?workshop') != -1) {
        $("#portfolioModalWorkshop").modal('show');
    }

    var url = window.location.href;
    if (url.indexOf('?workshop2023') != -1) {
        $("#portfolioModalWorkshop").modal('show');
        showWorkshopInfo(2023)
    }

});
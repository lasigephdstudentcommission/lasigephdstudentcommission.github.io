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

    var url = window.location.href;
    if (url.indexOf('?welcomeday2023') != -1) {
        $("#portfolioModalWD").modal('show');
        showWDInfo(2023)
    }
    
    var url = window.location.href;
    if (url.indexOf('?welcomeday2024') != -1) {
        $("#portfolioModalWD").modal('show');
    }

    // FORUM
    var url = window.location.href;
    if (url.indexOf('?forum') != -1) {
        $("#portfolioModalForum").modal('show');
    }

    var url = window.location.href;
    if (url.indexOf('?forum4') != -1) {
        $("#portfolioModalForum").modal('show');
        showForumInfo(4)

    }

    var url = window.location.href;
    if (url.indexOf('?forum3') != -1) {
        $("#portfolioModalForum").modal('show');
        showForumInfo(3)

    }

    var url = window.location.href;
    if (url.indexOf('?forum2') != -1) {
        $("#portfolioModalForum").modal('show');
        showForumInfo(2)

    }

    var url = window.location.href;
    if (url.indexOf('?forum1') != -1) {
        $("#portfolioModalForum").modal('show');
        showForumInfo(1)

    }

    // WORKSHOP
    var url = window.location.href;
    if (url.indexOf('?workshop') != -1) {
        $("#portfolioModalWorkshop").modal('show');
    }

    var url = window.location.href;
    if (url.indexOf('?workshop2024') != -1) {
        $("#portfolioModalWorkshop").modal('show');
        showWorkshopInfo(2024)
    }

    var url = window.location.href;
    if (url.indexOf('?workshop2023') != -1) {
        $("#portfolioModalWorkshop").modal('show');
        showWorkshopInfo(2023)
    }

    // COMMISSIONS
    var url = window.location.href;
    if (url.indexOf('?commissions') != -1) {
        $("#portfolioModalCommissions").modal('show');
    }

    // RECRUIT
    var url = window.location.href;
    if (url.indexOf('?join') != -1) {
        $("#portfolioModalRecruit").modal('show');
    }

    // TALKS
    var url = window.location.href;
    if (url.indexOf('?talks') != -1) {
        $("#portfolioModalTalks").modal('show');
    }

    // CLUBS
    var url = window.location.href;
    if (url.indexOf('?clubs') != -1) {
        $("#portfolioModalClubs").modal('show');
    }

    // RESOURCES
    var url = window.location.href;
    if (url.indexOf('?resources') != -1) {
        $("#portfolioModalTemplates").modal('show');
    }


});
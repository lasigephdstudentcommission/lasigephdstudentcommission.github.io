$(document).ready(function() {
    n_clubs = 3
    var club = Math.floor(Math.random() * n_clubs);
    showClubInfo(club);
});

/*
club => the club name
1 => football
2 => running
3 => tabletop
defines the following fields:
club_title
club_text
club_img
club_date
club_location
club_form
 */
function showClubInfo(club = -1) {
    switch (club) {
        case 0:
            $("#club_title").text("Futsal");
            $("#club_text").text("");
            $("#club_img").attr("src", "assets/img/events/Futsal.png");
            $("#club_date").text("Thurdays at 6pm");
            $("#club_location").text("Estádio Universitário de Lisboa");
            $("#club_form").text("");

            break;
        case 1:
            $("#club_title").text("Running");
            $("#club_text").text("In the Ph.D., we run and exercise mentally to achieve our goals, right? But we also don't always want to be sedentary winners. We propose teambuilding sessions through marathons and running. <br>Why? 'Mens sana in corpore sano '");
            $("#club_img").attr("src", "assets/img/events/Running.png");
            $("#club_date").text("");
            $("#club_location").text("");
            $("#club_form").text("");
            break;
        case 2:
            $("#club_title").text("Tabletop");
            $("#club_text").text("");
            $("#club_img").attr("src", "assets/img/events/Tabletop.png");
            $("#club_date").text("");
            $("#club_location").text("");
            $("#club_form").text("");
            break;

        default:
            break;
    }

}
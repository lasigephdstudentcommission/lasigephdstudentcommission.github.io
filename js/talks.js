/*
Talks Functions
 */

$(document).ready(function() {

    n_talks = 4;
    showTalksInfo(n_talks);

});

function showTalksInfo(talks = -1) {

    sessionStorage.setItem("talks_edition", talks);

    switch (talks) {
        case 1:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("1st Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_1.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 2:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("2nd Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_2.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 3:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("3rd Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_3.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 4:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("4th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_4.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        default:
            break;
    }

}
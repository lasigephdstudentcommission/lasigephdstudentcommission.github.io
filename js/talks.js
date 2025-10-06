/*
Talks Functions
 */

$(document).ready(function() {

    n_talks = 11;
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

        case 5:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("5th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_5.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;
        
        case 6:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("6th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_6.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 7:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("7th Edition");
             $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_7.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;
            
        case 8:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("8th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_8.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 9:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("9th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_9.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 10:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("10th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_10.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break; 
            
        case 11:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("11th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_11.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;
        case 12:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("12th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_12.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 13:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("13th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_13.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;

        case 14:
            $("#talks_title").text("LASIGE Talks");
            $("#talks_subtitle").text("14th Edition");
            $("#talks_poster").html(`<img width="100%" margin="0" src="assets/img/events/Talks/talks_14.png" alt="... " />`);
            $("#talks_form").text("");
            $("#talks_form").attr("href", "");
            break;


        default:
            break;
    }

}
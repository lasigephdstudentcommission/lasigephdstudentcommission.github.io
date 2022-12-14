/*
Welcome Day Functions
 */

$(document).ready(function() {

    //showSocialInfo(social);

    showWDInfo(2022);

});

function showWDInfo(wd = -1) {

    sessionStorage.setItem("wd_edition", wd);

    switch (wd) {
        case 2022:
            $("#wd_title").text("Welcome Day");
            $("#wd_subtitle").text("2022");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: Past Event");
            $("#wd_location").text("Location: C6.1.36");
            $("#more_form_text").text("Registrations Closed");
            $("#wd_form").text(" ");
            $("#wd_form").attr("href", " ");
            $("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


            $("#wd_tabs").html(`
                                        <a href="" onclick="showWDMain(0); return false; "> Program</a>
                                        <a href="" onclick="showWDMain(1); return false; "> Media</a>
                                        <a href="https://forms.gle/z7MTnEr1oGv6t5us6 " target="_blank"> Feedback</a>
                                `);

             $("#wd_media").html(``);
            break;

        default:
            break;
    }

}

function showWDMain(wd = -1) {

    edition = sessionStorage.getItem("wd_edition");

    switch (edition) {

        case '2022':

            switch (wd) {
                case 0:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2022/Welcome Day.png" alt="... " />`);
                    break;
                case 1:
                    $("#wd_media").html(`
                    <a href="" onclick="showWDMedia(0); return false; "> Aftermovie</a>
                    <a href="" onclick="showWDMedia(1); return false; "> Testimony</a>
                    <a href="" onclick="showWDMedia(2); return false; "> Group Photo</a>
                    `);
                    break;
        
                default:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2022/Welcome Day.png" alt="... " />`);
                    break;
            }

        break;

    }

}

function showWDMedia(wd = -1) {

    edition = sessionStorage.getItem("wd_edition");

    switch (edition) {

        case '2022':

            switch (wd) {
                case 0:
                    $("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
                case 1:
                    $("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/5wqCX9VnwMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
                case 2:
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2022/group_photo2022.JPG" alt="... " />`);
                    break;
        
                default:
                    $("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
            }

        break;

    }

}
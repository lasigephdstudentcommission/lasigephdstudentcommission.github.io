/*
Forum Functions
 */

$(document).ready(function() {

    //showSocialInfo(social);
    n_forum = 2;

    showForumInfo(n_forum);

});

function showForumInfo(forum = -1) {

    sessionStorage.setItem("forum_edition", forum);

    switch (forum) {
        case 1:
            $("#forum_title").text("LASIGE Forum");
            $("#forum_subtitle").text("1st Edition");
            //$("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/Forum.png ");
            $("#forum_date").text("");
            $("#forum_location").text("");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text").text("Past event");
            $("#forum_form").text("");

            $("#forum_tabs").html(``);
            $("#forum_talks").html(``);


            break;
        case 2:
            $("#forum_title").text("LASIGE Forum");
            $("#forum_subtitle").text("2nd Edition");
            // $("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/Forum2022/2nd-Forum-01.png");
            $("#forum_date").text("Date: December 16th 2022");
            $("#forum_location").text("Location: C6.2.56");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text").text("Registrations Closed");
            $("#forum_form").text(" ");
            $("#forum_form").attr("href", " ");


            $("#forum_tabs").html(`
                                        <a href="" onclick="showForumImage(0); return false; "> Program</a>
                                        <a href="" onclick="showForumImage(1); return false; "> Keynote</a>
                                        <a href="" onclick="showForumImage(2); return false; "> Panel</a>
                                        <a href="" onclick="showForumImage(3); return false; "> Talks</a>
                                        <a href="" onclick="showForumImage(4); return false; "> Thesis Defense</a>
                                        <a href="" onclick="showForumImage(5); return false; "> Lunch</a>
                                `);

             $("#forum_talks").html(``);
            break;

        default:
            break;
    }

}

function showForumImage(forum = -1) {

    edition = sessionStorage.getItem("forum_edition");

    switch (edition) {
        case '1':
            $("#forum_img").attr("src", "assets/img/events/Forum.png");
        break;

        case '2':

            switch (forum) {
                case 0:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/2nd-Forum-01.png");
                    break;
                case 1:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Forum-keynote.png");
                    break;
                case 2:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Forum-panel.png");
                    break;
                case 3:
                    $("#forum_talks").html(`
                    <a href="" onclick="showForumTalk(0); return false; "> Tiago Carvalho - 15:00</a>
                    <a href="" onclick="showForumTalk(1); return false; "> Duarte Saraiva - 15:15</a>
                    <a href="" onclick="showForumTalk(2); return false; "> Karina Brotto Rebuli - 15:30</a>
                    <a href="" onclick="showForumTalk(3); return false; "> Pedro Pais - 15:45</a>
                    `);
                    break;
        
                case 4:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Forum-thesis.png");
                    break;

                case 5:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Menu.png");
                    break;
        
                default:
                    $("#forum_talks").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/2nd-Forum-01.png");
                    break;
            }

        break;

    }

}

function showForumTalk(forum = -1) {

    edition = sessionStorage.getItem("forum_edition");

    switch (edition) {


        case '2':

            switch (forum) {
                case 0:
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Tiago.png");
                    break;
                case 1:
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Duarte.png");
                    break;
                case 2:
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Karina.png");
                    break;
                case 3:
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Pedro.png");
                    break;
        
                default:
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Tiago.png");
                    break;
            }

        break;

    }

}
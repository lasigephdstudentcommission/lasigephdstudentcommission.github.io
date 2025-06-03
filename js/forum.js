/*
Forum Functions
 */

$(document).ready(function() {

    const storedEdition = sessionStorage.getItem("forum_edition");
    const storedMain = sessionStorage.getItem("forum_main")

    if (storedEdition == null) {
        showForumInfo(4); // default to 4 only if no edition is set
    } else {
        showForumInfo(parseInt(storedEdition)); // restore previously selected edition
        if (storedMain != null) {
            showForumImage(storedMain); // restore selected main
        }
    }

});

function showForumInfo(forum = -1) {

    sessionStorage.setItem("forum_edition", forum);

    switch (forum) {
        case 1:
            $("#forum_banner").html(``);
            $("#forum_title").text("LASIGE Forum");
            $("#forum_subtitle").text("1st Edition");
            $("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/Forum.png");
            $("#forum_date").text("");
            $("#forum_location").text("");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text2").text("Past event");
            $("#forum_form").text("");
            $("#forum_form").attr("style", "");

            $("#forum_tabs").html(``);
            $("#forum_talks").html(``);
            $("#forum_main").attr("style", "display: block;");
             $("#more_form_text2").attr("style", "display: block;");
             $("#forum_tabs").attr("style", "display: none;");
             $("#forum_talks").attr("style", "display: none;");
            break;

        case 2:
            $("#forum_banner").html(``);
            $("#forum_title").text("LASIGE Forum");
            $("#forum_subtitle").text("2nd Edition");
            $("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/Forum2022/2nd-Forum-01.png");
            $("#forum_date").text("Date: December 16th 2022 - Past Event");
            $("#forum_location").text("Location: C6.2.56");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text2").text("Registrations Closed");
            $("#forum_form").text(" ");
            $("#forum_form").attr("href", " ");
            $("#forum_form").attr("style", "");


            $("#forum_tabs").html(`
                                        <a href="" onclick="showForumImage(0); return false; "> Program</a>
                                        <a href="" onclick="showForumImage(1); return false; "> Keynote</a>
                                        <a href="" onclick="showForumImage(2); return false; "> Panel</a>
                                        <a href="" onclick="showForumImage(3); return false; "> Talks</a>
                                        <a href="" onclick="showForumImage(4); return false; "> Thesis Defense</a>
                                        <a href="" onclick="showForumImage(5); return false; "> Lunch</a>
                                        <a href="" onclick="showForumImage(6); return false; "> Media</a>
                                `);

             $("#forum_talks").html(``);
             $("#forum_main").attr("style", "display: block;");
             $("#more_form_text2").attr("style", "display: block;");
             $("#forum_tabs").attr("style", "display: none;");
             $("#forum_talks").attr("style", "display: none;");
            break;

        case 3:
            $("#forum_banner").html(``);
            $("#forum_title").text("LASIGE 25 Celebration & Forum");
            $("#forum_subtitle").text("3rd Edition");
            $("#forum_text").text("Join us in celebrating 25 Years of LASIGE! Expand your horizons with feedback from colleagues and experts beyond your field. Attend workshops on essential tools for your Ph.D. and seize the opportunity to present your work to both university and external audiences.");
            $("#forum_img").attr("src", "assets/img/events/Forum2023/25bday.png");
            $("#forum_date").text("Date: July 5th 2023 - Past Event");
            $("#forum_location").text("Location: C6 Garden");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text2").text("Registrations Closed");
            $("#forum_form").text("");
            $("#forum_form").attr("f", "");
            $("#forum_form").attr("style", "");


            $("#forum_tabs").html(`
                                        <a href="" onclick="showForumImage(0); return false; "> Program</a>
                                        <a href="" onclick="showForumImage(1); return false; "> Researcher Talk</a>
                                        <a href="" onclick="showForumImage(2); return false; "> Panel</a>
                                        <a href="" onclick="showForumImage(3); return false; "> PhD Talks</a>
                                `);

             $("#forum_talks").html(``);
             $("#forum_main").attr("style", "display: block;");
             $("#more_form_text2").attr("style", "display: block;");
             $("#forum_tabs").attr("style", "display: flex;");
             $("#forum_talks").attr("style", "display: flex;");
            break;
        
        case 4:
            $("#forum_banner").html(`<img width="100%" margin="0" src="assets/img/events/Forum2024/banner.png" alt="... " />`);
            $("#forum_title").text("LASIGE Forum");
            $("#forum_subtitle").text("4th Edition");
            $("#forum_text").text("Expand your horizons with feedback from colleagues and experts beyond your field. Attend workshops on essential tools for your Ph.D. and seize the opportunity to present your work to both university and external audiences.");
            //$("#forum_main").attr("style", "display: none;");
            $("#forum_img").attr("src", "assets/img/events/Forum2024/schedule.png");
            $("#forum_date").text("Date: July 12th 2024");
            $("#forum_location").text("Location: 6.3.27");
            //$("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#more_form_text2").text("");
            $("#more_form_text2").attr("style", "display: none;");

            $("#forum_form").text("");
            $("#forum_form").attr("f", "");
            $("#forum_form").attr("style", "display: none");

            //$("#forum_form").text("REGISTER HERE");
            //$("#forum_form").attr("href", "https://forms.gle/9WKXDsWH5eBYGVx18");
            //$("#forum_form").attr("style", "border: solid 1px black;");
    
            $("#forum_tabs").html(``);
            $("#forum_tabs").attr("style", "display: none;");
            $("#forum_talks").html(``);
            $("#forum_talks").attr("style", "display: none;");
            break;

        default:
            break;
    }

}

function showForumImage(forum = -1) {

    edition = sessionStorage.getItem("forum_edition");

    sessionStorage.setItem("forum_main", forum);

    switch (edition) {
        case '1':
            $("#forum_img").attr("src", "assets/img/events/Forum.png");
        break;

        case '2':

            switch (forum) {
                case 0:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/2nd-Forum-01.png" alt="... " />`);
                    break;
                case 1:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Forum-keynote.png" alt="... " />`);
                    break;
                case 2:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Forum-panel.png" alt="... " />`);
                    break;
                case 3:
                    $("#forum_media").html(``);
                    $("#forum_talks").html(`
                    <a href="" onclick="showForumTalk(0); return false; "> Tiago Carvalho - 15:00</a>
                    <a href="" onclick="showForumTalk(1); return false; "> Duarte Saraiva - 15:15</a>
                    <a href="" onclick="showForumTalk(2); return false; "> Karina Brotto Rebuli - 15:30</a>
                    <a href="" onclick="showForumTalk(3); return false; "> Pedro Pais - 15:45</a>
                    `);
                    break;
        
                case 4:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_img").attr("src", "assets/img/events/Forum2022/Forum-thesis.png");
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Forum-thesis.png" alt="... " />`);
                    break;

                case 5:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Menu.png" alt="... " />`);
                    break;

                case 6:

                    // add full session <a href="" onclick="showForumVideos(0); return false; "> Full Session</a>

                    $("#forum_talks").html(``);
                    $("#forum_media").html(`
                    <a href="https://drive.google.com/drive/folders/1In50QFE11WYkMQ3yZOfgQtqMMHWoJLOL?usp=sharing " target="_blank ">Photos</a>
                    `);
                    break;
        
                default:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/2nd-Forum-01.png" alt="... " />`);
                    break;
            }

        case '3':

            switch (forum) {
                case 0:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2023/25bday.png" alt="... " />`);
                    break;
                case 1:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2023/Researcher_Talk.png" alt="... " />`);
                    break;
                case 2:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2023/Panel.png" alt="... " />`);
                    

                    break;
                case 3:
                    $("#forum_media").html(``);
                    $("#forum_talks").html(`
                    <a href="" onclick="showForumTalk(0); return false; "> David Gonçalves - 16:00</a>
                    <a href="" onclick="showForumTalk(1); return false; "> Joel Samper - 16:25</a>
                    `);
                    break;
        
                default:
                    $("#forum_talks").html(``);
                    $("#forum_media").html(``);
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2023/25bday.png" alt="... " />`);
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
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Tiago.png" alt="... " />`);
                    break;
                case 1:
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Duarte.png" alt="... " />`);
                    break;
                case 2:
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Karina.png" alt="... " />`);
                    break;
                case 3:
                    $("#forum_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Forum2022/Pedro.png" alt="... " />`);
                    break;
        
                default:
                    
                    break;
            }

            case '3':

            switch (forum) {
                case 0:
                    $("#forum_img").attr("src", "assets/img/events/Forum2023/David_Talk.png");
                    break;
                case 1:
                    $("#forum_img").attr("src", "assets/img/events/Forum2023/Joel_Talk.png");
                    break;
        
                default:
                    
                    break;
            }

        break;

    }

}

function showForumVideos(forum = -1) {

    edition = sessionStorage.getItem("forum_edition");

    switch (edition) {


        case '2':

            switch (forum) {
                case 0:
                    $("#forum_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break
                default:
                    
                    break;
            }

        break;

    }

}
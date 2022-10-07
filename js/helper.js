$(document).ready(function() {
    n_clubs = 3
    var club = Math.floor(Math.random() * n_clubs);
    //showClubInfo(club);
    n_social = 3;
    var social = Math.floor(Math.random() * n_social);
    //showSocialInfo(social);
    n_forum = 2;

    showForumInfo(n_forum - 1);
    $("#lf_date").text("04/11/22");
});

/*
club => the club name
0 => football
1 => running
2 => tabletop
defines the following fields:
club_title
club_text
club_img
club_date
club_location
club_form
 */
$('#portfolioModalClubs').on('hidden.bs.modal', function() {
    $("#club_img").addClass("d-none");
    $("#club_title").text("");
    $("#club_text").text("");
});
$('#portfolioModalSocial').on('hidden.bs.modal', function() {
    $("#social_img").addClass("d-none");
    $("#social_title").text("");
    $("#social_text").text("");
    $("#social_form_text").text("");

});

function showClubInfo(club = -1) {
    $("#club_img").removeClass("d-none");


    switch (club) {
        case 0:
            $("#club_title").text("Futsal");
            $("#club_text").text("");
            $("#club_img").attr("src", "assets/img/events/Futsal.png");
            //$("#club_date").text("Thurdays at 6pm");
            //$("#club_location").text("Estádio Universitário de Lisboa");
            $("#club_more").attr("href", "https://discord.gg/UEP5Tc7x8q");
            //$("#club_form").text("teste");

            break;
        case 1:
            $("#club_title").text("Running");
            $("#club_text").text("In the Ph.D., we run and exercise mentally to achieve our goals, right? But we also don't always want to be sedentary winners. We propose teambuilding sessions through marathons and running. <br>Why? 'Mens sana in corpore sano '");
            $("#club_img").attr("src", "assets/img/events/Running.png");
            //$("#club_date").text("");
            //$("#club_location").text("");
            $("#club_more").attr("href", "https://discord.gg/RsvKemBvSg");
            //("#club_form").text("");
            break;
        case 2:
            $("#club_title").text("Tabletop");
            $("#club_text").text("");
            $("#club_img").attr("src", "assets/img/events/Tabletop.png");
            //$("#club_date").text("");
            //$("#club_location").text("");
            $("#club_more").attr("href", "https://discord.gg/8ucxCTSdya");
            // $("#club_form").text("");
            break;

        default:
            break;
    }

}

/*
social => the social name
0 => movie night
1 => paintball
2 => karts
defines the following fields:
social_title
social_text
social_img
social_date
social_location
social_form
 */
function showSocialInfo(social = -1) {
    $("#social_img").removeClass("d-none");
    switch (social) {
        case 0:
            $("#social_title").text("Movie Night");
            $("#social_text").text("");
            $("#social_img").attr("src", "assets/img/events/LMovie.png ");
            //$("#social_date").text("Thurdays at 6pm");
            //$("#social_location").text("Estádio Universitário de Lisboa");
            $("#social_more").attr("href", "https://discord.gg/Gg2azeNYD5");
            $("#social_form_text").text("Past event");
            $("#social_form").text("");

            break;
        case 1:
            $("#social_title").text("Paintball");
            $("#social_text").text("");
            $("#social_img").attr("src", "assets/img/events/Paintball.png");
            //$("#social_date").text("");
            //$("#social_location").text("");
            $("#social_more").attr("href", "https://discord.gg/Gg2azeNYD5");
            $("#social_form_text").text("Past event");
            $("#social_form").text("");
            break;

        case 2:
            $("#social_title").text("Karts");
            $("#social_text").text("");
            $("#social_img").attr("src", "assets/img/events/Karting.png");
            //$("#social_date").text("");
            //$("#social_location").text("");
            $("#social_more").attr("href", "https://discord.gg/Gg2azeNYD5");
            $("#social_form_text").text("More details TBA");
            $("#social_form").text("");
            break;


        default:
            break;
    }

}

/*
lasige forum => 
1 => First Edition
2 => Second Edition
defines the following fields:
forum_title
forum_text
forum_img
forum_date
forum_location
forum_form
 */
function showForumInfo(forum = -1) {
    switch (forum) {
        case 0:
            $("#forum_title").text("LASIGE Forum First Edition");
            //$("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/Forum.png ");
            //$("#forum_date").text("Thurdays at 6pm");
            //$("#forum_location").text("Estádio Universitário de Lisboa");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#forum_form_text").text("Past event");
            $("#forum_form").text("");

            break;
        case 1:
            $("#forum_title").text("LASIGE Forum Second Edition");
            // $("#forum_text").text("");
            $("#forum_img").attr("src", "assets/img/events/2nd-Forum.png");
            //$("#forum_date").text("");
            //$("#forum_location").text("");
            $("#forum_more").attr("href", "https://discord.gg/n53AfFnRSn");
            $("#forum_form_text").text("December 2022 - More details TBA");
            $("#forum_form").text("");
            break;

        default:
            break;
    }

}
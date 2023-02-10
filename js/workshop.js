/*
Workshop Functions
 */

$(document).ready(function() {

    showWorkshopInfo(2023);

});

function showWorkshopInfo(workshop = -1) {

    sessionStorage.setItem("workshop_edition", workshop);

    switch (workshop) {
        case 2023:
            $("#workshop_title").text("LASIGE Workshop");
            $("#workshop_subtitle").text("8th Edition - 2023");
            // $("#workshop_text").text("");
            $("#workshop_date").text("Date: March 22nd");
            $("#workshop_location").text("Location: 6.1.31");
            $("#more_form_text").text("Registrations Closed");
            $("#workshop_form").text(" ");
            $("#workshop_form").attr("href", " ");
            $("#workshop_main").html(`<img id="forum_img" class="img-fluid d-block mx-auto " src="assets/img/events/workshop23.png " alt="... "/>`);


            // $("#workshop_tabs").html(`
            //                             <a href="" onclick="showWorkshopMain(0); return false; "> Program</a>
            //                             <a href="" onclick="showWorkshopMain(1); return false; "> Media</a>
            //                             <a href="https://forms.gle/z7MTnEr1oGv6t5us6 " target="_blank"> Feedback</a>
            //                     `);

            //  $("#workshop_media").html(``);
            break;

        default:
            break;
    }

}

// function showWorkshopMain(workshop = -1) {

//     edition = sessionStorage.getItem("workshop_edition");

//     switch (edition) {

//         case '2022':

//             switch (workshop) {
//                 case 0:
//                     $("#workshop_media").html(``);
//                     $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Workshop2022/Welcome Day.png" alt="... " />`);
//                     break;
//                 case 1:
//                     $("#workshop_media").html(`
//                     <a href="" onclick="showWorkshopMedia(0); return false; "> Aftermovie</a>
//                     <a href="" onclick="showWorkshopMedia(1); return false; "> Testimony</a>
//                     <a href="" onclick="showWorkshopMedia(2); return false; "> Group Photo</a>
//                     `);
//                     break;
        
//                 default:
//                     $("#workshop_media").html(``);
//                     $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Workshop2022/Welcome Day.png" alt="... " />`);
//                     break;
//             }

//         break;

//     }

// }

// function showWorkshopMedia(workshop = -1) {

//     edition = sessionStorage.getItem("workshop_edition");

//     switch (edition) {

//         case '2022':

//             switch (workshop) {
//                 case 0:
//                     $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
//                     break;
//                 case 1:
//                     $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/5wqCX9VnwMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
//                     break;
//                 case 2:
//                     $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/Workshop2022/group_photo2022.JPG" alt="... " />`);
//                     break;
        
//                 default:
//                     $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
//                     break;
//             }

//         break;

//     }

// }
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
            $("#workshop_location").text("Location: 6.1.36");
            // $("#workshop_more_form_text").text("Registrations open until March 13th, poster submissions until march 15th");
            $("#workshop_more_form_text").text("Registrations Closed");
            $("#workshop_form").text("");
            // $("#workshop_form").text("Register here");
            // $("#workshop_form").attr("href", "https://forms.gle/x7DiqGHH7JnXKXqEA");
            $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LqA5t8hi5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
            

            $("#workshop_tabs").html(`
                                        <a href="" onclick="showWorkshopMain(0); return false; "> Program</a>
                                        <a href="" onclick="showWorkshopMain(1); return false; "> Dinner</a>
                                        <a href="" onclick="showWorkshopMain(2); return false; "> Poster Guidelines</a>
                                        <a href="" onclick="showWorkshopMain(3); return false; "> Poster Session</a>
                                        <a href="" onclick="showWorkshopMain(4); return false; "> Peddypaper</a>
                                        <a href="" onclick="showWorkshopMain(5); return false; "> Aftermovie</a>
                                `);

             $("#workshop_media").html(``);
            break;

        default:
            break;
    }

}

function showWorkshopMain(workshop = -1) {

    edition = sessionStorage.getItem("workshop_edition");

    switch (edition) {

        case '2023':

            switch (workshop) {
                case 0:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/23/Main.png" alt="... " />`);
                    break;

                case 1:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`
                    <h1 class="entry-title">Dinner</h1>
                    <div class="entry-content">
                    <ul class=" list-inline ">
                    <li>
                    LASIGE members who do not hold a PhD degree (i.e., students): €5
                    </li>
                    <li>
                    LASIGE members who hold a PhD: €20
                    </li>
                    </ul>

                    <p> Payment for the dinner should be made in person to Alexandra or Carla (Room 6.3.30), preferably from 10:00-16:00, until March 13th. </p>

                    <p> Please note that the restaurant has a limited number of seats available. Once this limit is reached, any participants who wish to attend the dinner will be placed on a waiting list. In the event that a seat becomes available due to non-payment or cancellation, we will offer it to participants on the waiting list. </p>

                    <p><strong>We strongly advise all interested participants to secure their spot by making payment before the deadline.</strong></p>

                    <img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/23/Manu.png" alt="... " />
                    `);
                    break

                case 2:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<p>&nbsp;</p>
                    <h1 class="entry-title">Posters</h1>
                    <div class="entry-content">
                    <p><strong>Poster templates:</strong></p>
                    <ul class=" list-inline ">
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/Accessibility-and-ageing.pptx">Accessibility and ageing</a>
                    </li>
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/cyber-physical-systems.pptx">Cyber-physical systems</a>
                    </li>
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/Data-and-systems-intelligence.pptx">Data and systems intelligence</a>
                    </li>
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/health-and-biomedical-informatics.pptx">Health and biomedical informatics</a>
                    </li>
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/reliable-software-systems.pptx">Reliable software systems</a>
                    </li>
                    <li>
                    <a href="https://workshop2022.lasige.di.fc.ul.pt/wp-content/uploads/Resilient-distributed-and-networked-systems.pptx">Resilient distributed and networked system</a>
                    </li>
                    </ul>
                    
                    <p><strong>Submission guidelines:</strong></p>
                    <p>The poster has to be submitted until the 15th of March in PDF format on the <a href="https://forms.gle/x7DiqGHH7JnXKXqEA">registration form</a> or sent to <a href="mailto:lasige-phd-commission@listas.di.ciencias.ulisboa.pt">lasige-phd-commission@listas.di.ciencias.ulisboa.pt</a></p>
                    </div>
                    <img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/23/Posters.png" alt="... " />
                    `);
                    break

                case 3:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<iframe style="width:50vw;height:100vh" src="https://online.fliphtml5.com/ijvpg/mppe/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>`);
                    break;

                case 4:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/23/tascas.jpg" alt="... " />`);
                    break;

                case 5:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LqA5t8hi5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
                    break;


                // case 1:
                //     $("#workshop_media").html(`
                //     <a href="" onclick="showWorkshopMedia(0); return false; "> Aftermovie</a>
                //     <a href="" onclick="showWorkshopMedia(1); return false; "> Testimony</a>
                //     <a href="" onclick="showWorkshopMedia(2); return false; "> Group Photo</a>
                //     `);
                //     break;
        
                default:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LqA5t8hi5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
                    break;
            }

        break;

    }

}

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
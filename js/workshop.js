/*
Workshop Functions
 */

$(document).ready(function() {

    showWorkshopInfo(2024);

});

function showWorkshopInfo(workshop = -1) {

    sessionStorage.setItem("workshop_edition", workshop);

    switch (workshop) {
        case 2024:
            $("#workshop_banner").html(`<img width="100%" margin="0" src="assets/img/events/workshop/24/banner.png" alt="... " />`);
            //$("#workshop_main").html(`<img width="100%" src="assets\img\events\workshop\23\24\banner.png" alt="... " /`);
            $("#workshop_title").text("");
            $("#workshop_subtitle").text("");
            //$("#workshop_text").text("");
            $("#workshop_date").text("Date: April 10th");
            $("#workshop_location").text("Location: Room 6.2.56 at FCUL");
            $("#workshop_more_form_text").text("Registrations Closed");
            //$("#workshop_form").text("REGISTER HERE");
            //$("#workshop_form").attr("href", "https://forms.gle/JeNaRjfsxjNmzT869");
            

            $("#workshop_tabs").html(`
                                <a href="" onclick="showWorkshopMain(0); return false; "> Program</a>
                                            <a href="" onclick="showWorkshopMain(1); return false; "> Dinner</a>
                                            <a href="" onclick="showWorkshopMain(2); return false; "> Poster Guidelines</a>
                                            <a href="" onclick="showWorkshopMain(3); return false; "> Posters</a>
                                    `);
                                            /** <a href="" onclick="showWorkshopMain(3); return false; "> Poster Session</a>
                                            <a href="" onclick="showWorkshopMain(4); return false; "> Peddypaper</a>
                                            <a href="" onclick="showWorkshopMain(5); return false; "> Aftermovie</a> */        
                                
            $("#workshop_media").html(``);
            $("#workshop_main").html(``);

            //$("#workshop_form").text("");
            //$("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LqA5t8hi5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
            

            break;

            case 2023:
                $("#workshop_banner").html(``);
                $("#workshop_title").text("LASIGE Workshop");
                $("#workshop_subtitle").text("8th Edition - 2023");
                // $("#workshop_text").text("");
                $("#workshop_date").text("Date: March 22nd");
                $("#workshop_location").text("Location: 6.1.36");
                // $("#workshop_more_form_text").text("Registrations open until March 13th, poster submissions until march 15th");
                $("#workshop_more_form_text").text("Registrations Closed");
                //$("#workshop_form").text("");
                //$("#workshop_form").attr("");
                // $("#workshop_form").text("Register here");
                // $("#workshop_form").attr("href", "https://forms.gle/x7DiqGHH7JnXKXqEA");
                $("#workshop_main").html(`<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LqA5t8hi5sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
                
    
                $("#workshop_tabs").html(`
                    <a href="" onclick="showWorkshopMain(2); return false; "> Poster Guidelines</a>
                    <a href="" onclick="showWorkshopMain(0); return false; "> Program</a>
                    <a href="" onclick="showWorkshopMain(1); return false; "> Dinner</a>
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

        case '2024':

            switch (workshop) {
                case 0:
                    $("#workshop_media").html(``);
                    
                    $("#workshop_main").html(`
                    <h1 class="entry-title">Program</h1>
                    <div class="entry-content">

                    <p>We have a day full of activities, come and join us!</p>

                    <ul class="list-left ">
                    <li><strong>14:00</strong>      Registration</li>
                    <li><strong>14:15</strong>      Welcome to LASIGE</li>
                    <li><strong>14:30</strong>      Keynote Talk - Nuno Neves</li>
                    <li><strong>15:05</strong>      Keynote Talk - Carlos Duarte</li>
                    <li><strong>15:30</strong>      Poster Session and Coffee Break</li>
                    <li><strong>16:30</strong>      Keynote Talk - Bruno Loff</li>
                    <li><strong>16:55</strong>      Keynote Talk - Márcia Barros</li>
                    
                    <li><strong>17:20</strong>      Awards Ceremony</li>
                    <li><strong>18:30</strong>      Team Building</li>
                    <li><strong>20:30</strong>      Dinner at Rice Me</li>
                    </ul>

                    <img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/24/program.png" alt="... " />
                    `);
                    break;
                

                case 1:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`
                    <h1 class="entry-title">Dinner</h1>

                    

                    <div class="entry-content">
                    <br>

                    <img width="100%" margin="0" src="assets/img/events/workshop/24/dinner.png" alt="... " />

                    <p>
                    The dinner will be held at the restaurant <a href="https://www.riceme.pt" target="_blank">Rice Me</a>. You can find here the <a href="https://www.riceme.pt" target="_blank">restaurant location</a href="https://maps.app.goo.gl/Krtwedu5UhBRgn5U7" target="_blank">. The Dinner starts at 20h30 with the welcome drinks and starters.
                    </p>

                    <p><strong>Price and payment:</strong></p>
                    <ul class=" list-left ">
                    <li>
                    LASIGE members who do not hold a PhD degree (i.e., students): 10€
                    </li>
                    <li>
                    LASIGE members who hold a PhD: 25€
                    </li>
                    </ul>

                    <br>
                    <p><strong>To attend the dinner:</strong></p>

                    <ul class="list-left">
                        <li>All payments must be made to Carla or Alexandra in room 6.3.30, preferably from 10:00-16:00, until March 28th, 2024.</li>
                        <li>A maximum of 100 dinner reservations are available, as such there will be a waiting list for people that do not secure a reservation. In the event that a seat becomes available due to non-payment or cancellation, we will offer it to participants on the waiting list.</li>
                        <li>Both for dinner and waiting list, your registration is only valid upon payment.</li>
                    </ul>

                    <br>
                    <p><strong>Menu:</strong></p>
                    <p>The dinner includes starters, the main course, dessert, coffee, and drinks.</p>

                    <p style="text-align:left;margin:0;"><strong>Starters</strong></p>
                    <ul class="list-left">
                        <li>Platter of Cured Sausages and Cheese</li>
                        <li>Rice Flour Bread with Olive Oil (vegan)</li>
                        <li>Olives (vegan)</li>
                        <li>Welcome Drinks: Wine, Bellinis, Beer, Juices, Water</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Main Course</strong></p>
                    <ul class="list-left">
                        <li><strong>Fish Option:</strong> Spiritual Codfish (shredded codfish cooked with onions, garlic and carrot, layered in bread crumbs and béchamel sauce)</li>
                        <li><strong>Meat Option:</strong> Duck Rice (flavourful and hearty rice dish with tender duck meat, with rice cooked in duck broth, leek, orange and chorizo)</li>
                        <li><strong>Vegan Option:</strong> Lentil Moussaka (layers of eggplant with minced lentils covered with a creamy béchamel sauce made out of vegatable cream)</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Desserts</strong></p>
                    <ul class="list-left">
                        <li>Chocolate mousse (gluten-free, lactose-free)</li>
                        <li>Sweet rice (gluten-free)</li>
                        <li>Lime mousse (gluten-free, vegan)</li>
                        <li>Fruit salad (gluten-free, vegan)</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Drinks</strong></p>
                    <ul class="list-left">
                        <li><strong>Natural Juices:</strong> Lemonade with Ginger and Mint; Orange Juice</li>
                        <li><strong>Soft Drinks:</strong> Pepsi; Pepsi Max; Guaraná; 7Up</li>
                        <li><strong>Red or White Wine:</strong> Quinta de Carvalhais, Dão</li>
                        <li>Coffee</li>
                    </ul>
                    `);
                    break

                case 2:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`
                    <h1 class="entry-title">Posters</h1>
                    <div class="entry-content">
                    <p>
                    Posters will be voted by all LASIGE members during the workshop. The two most voted posters will be presented to the audience in an informal session (no slides are required), and receive a prize.
                    </p>
                    
                    <p><strong>Submission guidelines:</strong></p>
                    <p>
                    Please submit your poster as a PDF file, formatted as A0, on the <a href="https://forms.gle/JeNaRjfsxjNmzT869">registration form</a> or sent to <a href="mailto:lasige-phd-commission@listas.di.ciencias.ulisboa.pt">lasige-phd-commission@listas.di.ciencias.ulisboa.pt</a> until the 5th of April 2024 with the email title "LASIGE Workshop - Poster Submission" and with the following information:
                    </p>

                    <ul class="list-left">
                        <li>Author Name</li>
                        <li>Research Line(s)</li>
                        <li>Title</li>
                        <li>PDF</li>
                    </ul>

                    <br>
                    <p><strong>Please respect the following norms:</strong></p>

                    <ul class="list-left">
                    <li>The posters are required to be vertical.</li>
                    <li>It is mandatory the presence of the logos and the LASIGE reference present in the template poster. The acknowledgements should be updated and the template references removed, if not needed.</li>
                    <li>The color gradient of the header cannot be changed.</li>
                    <li>No images or patterns can overlap the header.</li>
                    <li>The colour under the references and logos is required to be white.</li>
                    </ul>

                    <br>
                    <p><strong>Rules for the election:</strong></p>

                    <ul class="list-left">
                        <li>Each participant registered in the workshop must vote in a maximum of 3 posters.</li>
                        <li>In the event of a tie, a new poll between the posters tied will take place during the LASIGE Awards slot.</li>
                        <li>The best poster is awarded 350€ and the best runner-up poster is awarded 150€.</li>
                    </ul>

                    <br>
                    <p><strong>Poster templates:</strong></p>

                    <ul class=" list-inline ">
                    <li>
                    <a href="poster_templates/poster_cps.pptx">Cyber-physical systems</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_dsi.pptx">Data and systems intelligence</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_dsds.pptx">Dependable and Secure Decentralized Systems</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_hbi.pptx">Health and biomedical informatics</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_ihci.pptx">Inclusive Human-Computer Interaction</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_rss.pptx">Reliable software systems</a>
                    </li>
                    <li>
                    <a href="poster_templates/poster_tc.pptx">Theory of Computing</a>
                    </li>
                    </ul>   
                    
                    </div>
                    `); 
                    break;

                case 3:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<embed src="assets/img/events/workshop/24/posters.pdf" width="500" height="700" type="application/pdf">`);
                    break;
                
                /** 

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

                */
        
                default:
                    $("#workshop_media").html(``);
                    $("#workshop_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/workshop/24/program.png" alt="... " />`);
                    break;
            }

        break;

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
/*
Welcome Day Functions
 */

$(document).ready(function() {

    //showSocialInfo(social);

    showWDInfo(2023);

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
        case 2023:
            $("#wd_title").text("Welcome Day");
            $("#wd_subtitle").text("2023");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: October 18th 2023");
            $("#wd_location").text("Location: C6.1.36");
            // $("#more_form_text").text("Registrations Closed");
            $("#wd_form").text("Register here");
            $("#wd_form").attr("href", "https://forms.gle/j5Eqp9HreS2qTXvR9");
            $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2023/Welcome day 2023.jpg" alt="... " />`);
            //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


            $("#wd_tabs").html(`
                                        <a href="" onclick="showWDMain(0); return false; "> Program</a>
                                        <a href="" onclick="showWDMain(1); return false; "> Dinner Menu</a>
                                `)

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

        case '2023':

            switch (wd) {
                case 0:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2023/Welcome day 2023.jpg" alt="... " />`);
                    break;
                case 1:
                    $("#wd_main").html(`

                    <h3> Location </h3>
                    <p>There will be a dinner at Gula's for Kitchen Lovers located at Street Dona Filipa de Vilhena 18A, Lisbon (after the session at FCUL). </p>
                    <h3> Price and Payment </h3>
                    <div class="entry-content">
                    <ul class=" list-inline ">
                    <li>
                    LASIGE members who do not hold a PhD degree (i.e., students): €10
                    </li>
                    <li>
                    LASIGE members who hold a PhD: €30
                    </li>
                    </ul>

                    <p> Payment for the dinner should be made in person to Alexandra or Carla (Room 6.3.30), preferably from 10:00-16:00. </p>

                    <p> Please note that the restaurant has a limited number of seats available (80). Once this limit is reached, any participants who wish to attend the dinner will be placed on a waiting list. In the event that a seat becomes available due to non-payment or cancellation, we will offer it to participants on the waiting list. </p>

                    <p><strong>Reservations for dinner are only considered secured after payment is made. To ensure your reservation for dinner is guaranteed, we recommend that all interested participants make their payment promptly after registering.</strong></p>

                    <h3> Menu </h3>
                    
                    <div style="text-align: start;color: rgb(32, 33, 36);font-size: 14.6667px;">The dinner includes starters, the main course (buffet), dessert (buffet), coffee and drinks.&nbsp;</div>
                    <div style="text-align: start;color: rgb(32, 33, 36);font-size: 14.6667px;">
                        <ul>
                            <li><strong>All participants without dietary restriction can try both main course options.</strong></li>
                            <li><strong>All Vegan/Vegetarian/Intolerant participants have access to an alternative option.&nbsp;</strong></li>
                            <li><strong>If none of the dishes in the list respects your&nbsp;</strong><strong>dietary</strong><strong>&nbsp;restriction, please inform the PhD Commission.</strong></li>
                        </ul><strong>Starters</strong>
                        <ul>
                            <li>Assortment of miniatures of fresh and succulent snacks</li>
                            <li>Cheese, chorizo and other p&acirc;t&eacute;s and other tastes</li>
                            <li>Toasts, breadsticks and fresh bread rolls</li>
                            <li>Various seasonal fruits</li>
                            <li>&ldquo;Welcome Drink&rdquo; - Gula&apos;s berry lemonade</li>
                        </ul>
                        <strong>Main Course</strong>
                        <p>Fish Options</p>
                        <ul>
                            <li>Cod au gratin with greens in a cornbread crust</li>
                            <li>Shrimp linguini</li>
                        </ul>
                        <p>Meat Options</p>
                        <ul>
                            <li>Roast pork loin with honey and mustard</li>
                        </ul>
                        <p>Alternative Option</p>
                        <ul>
                            <li>Vegetable Curry</li>
                        </ul><u><em>Accompanied by a mixture of lettuce and tomato seasoned with&nbsp;</em><em>taste with extra virgin olive oil from Herdade da Mingorra and&nbsp;</em><em>splashes of oregano leaves from Vila Real de Santo Ant&oacute;nio.<br></em></u><br><strong>Dessert<br></strong>
                        <ul>
                            <li>&nbsp;Chocolate Gula</li>
                            <li>Camel pie with almond praline</li>
                            <li>Nut puff pastry with golden soft eggs</li>
                        </ul><strong>Drinks</strong>
                        <ul>
                            <li>Water</li>
                            <li>Teas</li>
                            <li>Lemonades</li>
                            <li>Coke</li>
                            <li>Red or White Wine - Terras D&apos;Uva, Herdade da Mingorra</li>
                        </ul>
                    </div>

                    `);
                    $("#wd_media").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2023/menuEN.jpeg" alt="... " />`);
                    break;

                default:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2023/Welcome day 2023.jpg" alt="... " />`);
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

        case '2023':

            switch (wd) {
                case 0:
                    //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
                case 1:
                    //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/5wqCX9VnwMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
                case 2:
                    //$("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2022/group_photo2022.JPG" alt="... " />`);
                    break;

                default:
                    //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    break;
            }

            break;

    }

}
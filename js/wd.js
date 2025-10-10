/*
Welcome Day Functions
 */

$(document).ready(function() {

    const storedEdition = sessionStorage.getItem("wd_edition");
    const storedMain = sessionStorage.getItem("wd_main")

    if (storedEdition == null) {
        showWDInfo(2025); // default to 2025 only if no edition is set
    } else {
        showWDInfo(parseInt(storedEdition)); // restore previously selected edition
        if (storedMain != null) {
            showWDMain(storedMain); // restore selected main
        } else {
            showWDMain(0); // restore selected main
        }
    }

});


function showWDInfo(wd = -1) {
    sessionStorage.setItem("wd_edition", wd);

    switch (wd) {
        case 2022:
            $("#wd_banner").html(``);
            $("#wd_title").text("Welcome Day");
            $("#wd_subtitle").text("2022");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: Past Event");
            $("#wd_location").text("Location: C6.1.36");
            $("#more_form_text").text("Registrations Closed");
            $("#wd_form").attr("style", "display:none");
            $("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


            $("#wd_tabs").html(`
                                        <a href="" onclick="showWDMain(0); return false; "> Program</a>
                                        <a href="" onclick="showWDMain(1); return false; "> Media</a>
                                        <a href="https://forms.gle/z7MTnEr1oGv6t5us6 " target="_blank"> Feedback</a>
                                `);

            $("#wd_media").html(``);
            break;

        case 2023:
            $("#wd_banner").html(``);
            $("#wd_title").text("Welcome Day");
            $("#wd_subtitle").text("2023");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: October 18th 2023");
            $("#wd_location").text("Location: C6.1.36");
            // $("#more_form_text").text("Registrations Closed");
            $("#wd_form").attr("style", "display:none");
            // $("#wd_form").attr("href", "https://forms.gle/j5Eqp9HreS2qTXvR9");
            $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2023/Welcome day 2023.jpg" alt="... " />`);
            //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);


            $("#wd_tabs").html(`
                                <a href="" onclick="showWDMain(0); return false; "> Program</a>
                                <a href="" onclick="showWDMain(1); return false; "> Dinner Menu</a>
                                `)

            $("#wd_media").html(``);
            break;

        case 2024:
            $("#wd_banner").html(`<img width="70%" margin="0" src="assets/img/events/WD2024/lasige_wd_2024.png" alt="... " />`);
            $("#wd_title").text("");
            $("#wd_subtitle").text("");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: 9 October 2024");
            $("#wd_location").text("Location: FCUL Room C6.2.56");
            $("#wd_form").html(`<a href="https://forms.gle/a3SyrGxLcP5kzRDC6" target="_blank ">REGISTER HERE</a>`);
            $("#wd_form").attr("style", "display:none");
            // $("#more_form_text").text("Registrations Closed");
            //$("#wd_form").text("REGISTER HERE");
            // $("#wd_form").attr("href", "https://forms.gle/j5Eqp9HreS2qTXvR9");
            $("#wd_main").html(``);
            //$("#wd_main").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/p_tu_a0Rgzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    
            $("#wd_tabs").html(`
                                <a href="" onclick="showWDMain(0); return false; "> Program</a>
                                <a href="" onclick="showWDMain(1); return false; "> Dinner</a>
                                `)
    
            $("#wd_media").html(``);
            break;

        case 2025:
            $("#wd_banner").html(`<img width="65%" margin="0" src="assets/img/events/WD2025/WelcomeDay25_banner.png" alt="... " />`);
            $("#wd_title").text("");
            $("#wd_subtitle").text("");
            // $("#wd_text").text("");
            $("#wd_date").text("Date: October 15th 2025");
            $("#wd_location").text("Location: FCUL Room C6.1.36");
            $("#wd_form").html(`<a href="https://forms.gle/a3SyrGxLcP5kzRDC6" target="_blank ">REGISTER HERE</a>`);
            // $("#more_form_text").text("Registrations Closed");
            $("#wd_form").attr("style", "display:none");


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

    sessionStorage.setItem("wd_main", wd);

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

        case '2024':

            switch (wd) {
                case 0:
                    $("#wd_media").html(``);
                    
                    $("#wd_main").html(`
                    <h1 class="entry-title">Program</h1>
                    <div class="entry-content">

                    <p>We have a day full of activities, come and join us!</p>

                    <ul class="list-left ">
                    <li><strong>15:30</strong>      Registration (Collect your badge!)</li>
                    <li><strong>16:00</strong>      Welcome to LASIGE - Alysson Bessani</li>
                    <li><strong>16:30</strong>      Into the Unknown: Journey from LASIGE to CMU and Silicon Valley Startups - Catarina Gamboa</li>
                    <li><strong>16:45</strong>      From CMU to Big Tech Research: Finding  ≈ 1000 Bugs in 12 Weeks on Configuration Platforms - Paulo Canelas</li>
                    <li><strong>17:00</strong>      Frozen Landscapes, Warm Collaborations: My Time in Sweden - Beatriz Nogueira</li>
                    <li><strong>17:15</strong>      Q&A with Catarina, Paulo, and Beatriz</li>
                    <li><strong>17:30</strong>      LASIGE Photo & Coffee Break</li>
                    <li><strong>18:15</strong>      Hi! from the PhD Student Commission</li>
                    <li><strong>18:30</strong>      What Does it Mean to be LASIGE & Closing Remarks - Tiago Guerreiro, Cátia Pesquita & Alcides Fonseca</li>
                    <li><strong>18:55</strong>      Team Building</li>
                    <li><strong>20:15</strong>      Dinner at <a href="https://maps.app.goo.gl/NuwkDt8Gpn9cSEgC7" target="_blank">Gula's for Kitchen Lovers</a></li>
                    </ul>

                    <img class="img-fluid d-block mx-auto " src="assets/img/events/WD2024/program.png" alt="... " />
                    `);
                    break;
                

                case 1:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`
                    <h1 class="entry-title">Dinner</h1>

                    

                    <div class="entry-content">
                    <br>

                    <img width="100%" margin="0" src="assets/img/events/WD2024/dinner.png" alt="... " />

                    <p>
                    There will be a dinner at Gula's for <a href="https://www.aminhagula.pt" target="_blank">Kitchen Lovers</a> located at <a href="https://maps.app.goo.gl/NuwkDt8Gpn9cSEgC7" target="_blank">Street Dona Filipa de Vilhena 18A, Lisbon</a>. The dinner starts at 20h15 with the welcome drinks and starters.
                    </p>

                    <p><strong>Price and payment:</strong></p>
                    <ul class=" list-left ">
                    <li>
                    LASIGE members who do not hold a PhD degree (i.e., students): 12€
                    </li>
                    <li>
                    LASIGE members who hold a PhD: 30€
                    </li>
                    </ul>

                    <br>
                    <p><strong>To attend the dinner:</strong></p>

                    <ul class="list-left">
                        <li>All payments must be made to Alexandra or Carla in room 6.3.30 by October, 4th, 2024, preferably between 10:00 and 16:00.</li>
                        <li>A maximum of 80 dinner reservations are available, as such there will be a waiting list for people that do not secure a reservation. In the event that a seat becomes available due to non-payment or cancellation, we will offer it to participants on the waiting list.</li>
                        <li>Both for Dinner and waiting list, your registration is only valid upon payment.</li>
                    </ul>

                    <br>
                    <p><strong>Menu:</strong></p>
                    <p>The dinner includes starters, the main course (buffet), dessert (buffet), coffee and drinks. If none of the dishes on the list respects your dietary restrictions, please inform the PhD Commission.</p>

                    <p style="text-align:left;margin:0;"><strong>Starters</strong></p>
                    <ul class="list-left">
                        <li>Assortment of miniatures of fresh and succulent snacks</li>
                        <li>Cheese, chorizo ​​pâtés and other taste</li>
                        <li>Toasts, breadsticks and fresh bread rolls</li>
                        <li>Various seasonal fruits</li>
                        <li>“Welcome Drink” - Gula's berry lemonade</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Main Course</strong></p>
                    <ul class="list-left">
                        <li><strong>Fish Option:</strong> Cod au gratin with greens in a cornbread crust</li>
                        <li><strong>Meat Option:</strong> Roast pork loin with honey and mustard</li>
                        <li><strong>Vegan Option:</strong> Vegetable Curry</li>
                        <li><span class="fst-italic">All options are accompanied by a mixture of lettuce and tomato seasoned with taste with extra virgin olive oil from Herdade da Mingorra and splashes of oregano leaves from Vila Real de Santo António.</span></li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Desserts</strong></p>
                    <ul class="list-left">
                        <li>Chocolate Gula</li>
                        <li>Camel pie with almond praline</li>
                        <li>Nut puff pastry with golden soft eggs</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Drinks</strong></p>
                    <ul class="list-left">
                        <li>Water, Teas, Lemonade, Coke</li>
                        <li>Red or White Wine - Herdade da Mingorra</li>
                        <li>Coffee</li>
                    </ul>
                    `);
                    break;

                default:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/wd/24/program.png" alt="... " />`);
                    break;
            }

        case '2025':

            switch (wd) {
                case 0:
                    $("#wd_media").html(``);
                    
                    $("#wd_main").html(`
                    <h1 class="entry-title">Program</h1>
                    <div class="entry-content">

                    <p>We have a day full of activities, come and join us!</p>

                    <ul class="list-left ">
                    <li><strong>15:00</strong>      Registration (Collect your badge!)</li>
                    <li><strong>15:15</strong>      Welcome to LASIGE - Alysson, Cátia and Tiago</li>
                    <li><strong>15:45</strong>      Keynote by Paulo Veríssimo - What is a research strategy and why it can take you very far</li>
                        <details>
                                <summary>Abstract</summary>
                                <p>In this talk, I will digress about the several takes on having a ‘research strategy’. I will try to convince you that, far from being “constraining” and curtailing your “freedom”, having the right research strategy can take you to plateaux of achievement which, when you analyse them in retrospect, would be unconceivable within the time span and with the resources you had available when you started. In fact, that’s what I felt looking back at the results of these past ten years of research at the head of two labs, in two universities abroad. Interestingly, the strategy designed sought Cyber Resilience, a then emerging field and as such highly risky, which in time fulfilled its promise, yielding high gain as the indispensable complement to classic Cyber Security. I will review that saga, the goals, the objectives, the achievements, and the setbacks.
                        </details>
                        <details>
                            <summary>Speaker</summary>
                            <div style="text-align: center;">
                                <img style="width: 200px; height: auto;" src="assets/img/events/WD2025/paulo_verissimo.png" alt="Paulo Verissimo's image"/>
                            </div>
                            <p>
                              Paulo Esteves-Verissimo is a research fellow at the Universities of Lisboa (PT) at LASIGE, and Luxembourg (LU) at SnT. 
                              He has been professor at KAUST University (2020–24, SA) and founding director of its 
                              <a href="https://crisys.kaust.edu.sa/" target="_blank" rel="noopener noreferrer">RC3 Center</a>. 
                              Formerly, a full professor and FNR PEARL Chair at the University of Luxembourg (2014–20, LU), where he was founding head of the 
                              <a href="https://www.uni.lu/snt-en/research-groups/CRITIX/" target="_blank" rel="noopener noreferrer">CritiX laboratory</a> 
                              at the SnT center. Previously, he was a full professor of Computer Science at the Faculty of Sciences of the University of Lisbon and Director of LASIGE. 
                              He is Fellow of IEEE and Fellow of ACM, and a recipient of the IEEE SMC TCHS Outstanding Leadership Award. 
                              He was author of over 220 peer-refereed publications and co-author of 5 books. 
                              He is currently interested in cyber resilience, in areas like: autonomous vehicles; distributed control systems; digital health and genomics; or blockchain and cryptocurrencies. 
                              Check his works on: 
                              <a href="http://scholar.google.com/citations?user=aMHx8aUAAAAJ" target="_blank" rel="noopener noreferrer">
                                Google Scholar
                              </a>.
                            </p>
                        </details>
                    <li><strong>16:30</strong>      LASIGE Photo</li>
                    <li><strong>16:45</strong>      Coffe Break and Poster Session (LASIGE Summer of Research)</li>
                    <li><strong>17:45</strong>      Hi! from the PhD Student Commission</li>
                    <li><strong>18:00</strong>      Keynote by Miguel Garcia - A PhD: More than just a title</li>
                        <details>
                                <summary>Abstract</summary>
                                <p>A PhD is often seen from the outside as just a title. In reality, it is years of challenges, growth, and lessons that go far beyond the diploma. In this talk, I revisit my journey at LaSIGE, from the first project as a student to nearly a decade of research. I will share some of the challenges, milestones, and lessons learned along the way—both technical and personal. Beyond papers and deadlines, my PhD taught me persistence, problem-solving, and critical thinking—skills that continue to guide my professional life today.</p>
                        </details>
        
                        <details>
                            <summary>Speaker</summary>
                            <div style="text-align: center;">
                                <img style="width: 200px; height: auto;" src="assets/img/events/WD2025/miguel_garcia.png" alt="Miguel Garcia's image"/>
                            </div>
                            <p>Miguel Garcia is a Senior Backend Software Engineer at Sensei, a company pioneering checkout-free retail through computer vision, weight sensors, and proprietary AI. Sensei’s technology powers autonomous stores across Europe and South America, transforming how customers shop and how retailers operate. Before joining Sensei, he taught courses in Software Engineering, Security, and Distributed Computing at a small faculty within the Universidade Lusófona group. He holds a PhD in Informatics from the Faculdade de Ciências, Universidade de Lisboa, where his research focused on diversity management in Byzantine fault-tolerant systems.</p>
                        </details> 
                    <li><strong>18:40</strong>      Closing and Team Building</li>
                    <li><strong>20:15</strong>      Dinner at <a href="https://maps.app.goo.gl/NuwkDt8Gpn9cSEgC7" target="_blank">Gula's for Kitchen Lovers</a></li>
                    </ul>
                    

                    <img class="img-fluid d-block mx-auto " src="assets/img/events/WD2025/WelcomeDay25_poster.png" alt="... " />
                    `);
                    break;
                

                case 1:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`
                    <h1 class="entry-title">Dinner</h1>

                    

                    <div class="entry-content">
                    <br>

                    <img width="100%" margin="0" src="assets/img/events/WD2025/dinner.png" alt="... " />

                    <p>
                    There will be a dinner at Gula's for <a href="https://www.aminhagula.pt" target="_blank">Kitchen Lovers</a> located at <a href="https://maps.app.goo.gl/NuwkDt8Gpn9cSEgC7" target="_blank">Street Dona Filipa de Vilhena 18A, Lisbon</a>. The dinner starts at 20h15 with the welcome drinks and starters.
                    </p>

                    <p><strong>Price and payment:</strong></p>
                    <ul class=" list-left ">
                    <li>
                    LASIGE members who do not hold a PhD degree (i.e., students): 10€
                    </li>
                    <li>
                    LASIGE members who hold a PhD: 20€
                    </li>
                    </ul>

                    <br>
                    <p><strong>To attend the dinner:</strong></p>

                    <ul class="list-left">
                        <li>All payments must be made to Alexandra or Carla in room 6.3.30 by October, 10th, 2025, preferably between 10:00 and 16:00.</li>
                        <li>A maximum of 80 dinner reservations are available, as such there will be a waiting list for people that do not secure a reservation. In the event that a seat becomes available due to non-payment or cancellation, we will offer it to participants on the waiting list.</li>
                        <li>Both for Dinner and waiting list, your registration is only valid upon payment.</li>
                    </ul>

                    <br>
                    <p><strong>Menu:</strong></p>
                    <p>The dinner includes starters, the main course (buffet), dessert (buffet), coffee and drinks. If none of the dishes on the list respects your dietary restrictions, please inform the PhD Commission.</p>

                    <p style="text-align:left;margin:0;"><strong>Starters</strong></p>
                    <ul class="list-left">
                        <li>Assortment of miniatures of fresh and succulent snacks</li>
                        <li>Cheese, chorizo ​​pâtés and other taste</li>
                        <li>Toasts, breadsticks and fresh bread rolls</li>
                        <li>Various seasonal fruits</li>
                        <li>“Welcome Drink” - Gula's berry lemonade</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Main Course</strong></p>
                    <ul class="list-left">
                        <li><strong>Fish Option:</strong> Cod au gratin with carrots and mozzarella cheese topping</li>
                        <li><strong>Meat Option:</strong> Portuguese pork tenderloin with a sprinkle of various pickles, served with rice and dried fruits sautéed with a sprinkle of fresh chives and/or fried roasted sweet potatoes</li>
                        <li><strong>Vegan Option:</strong> Vegetable curry with sweet potato</li>
                        <li><span class="fst-italic">All options are accompanied by a mixture of lettuce and tomato seasoned with taste with extra virgin olive oil from Herdade da Mingorra and splashes of oregano leaves from Vila Real de Santo António.</span></li>
                    </ul>
                    Accompanied by a mix of lettuce and tomato seasoned to taste with Herdade da Mingorra extra virgin olive oil and vinegar, and tomato hash with oregano and red onion.

                    <p style="text-align:left;margin:0;"><strong>Desserts</strong></p>
                    <ul class="list-left">
                        <li>Chocolate Gula</li>
                        <li>Camel pie with almond praline</li>
                        <li>Lemon pie with fresh mint</li>
                    </ul>

                    <p style="text-align:left;margin:0;"><strong>Drinks</strong></p>
                    <ul class="list-left">
                        <li>Water, Teas, Lemonade, Coke</li>
                        <li>Alcoholic beverages are NOT included and therefore will have to be paid individually directly to the restaurant.</li>
                    </ul>
                    `);
                    break

                default:
                    $("#wd_media").html(``);
                    $("#wd_main").html(`<img class="img-fluid d-block mx-auto " src="assets/img/events/WD2025/WelcomeDay25_poster.png" alt="... " />`);
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

        case '2024':
            switch (wd) {
                case 0:
                    break;

                default:
                    break;
            }
            break;
        }

}

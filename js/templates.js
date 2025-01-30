/*
Templates Functions
 */

$(document).ready(function() {

    n_templates = 3;
    showTemplatesInfo(n_templates);

});

function showTemplatesInfo(templates = -1) {

    sessionStorage.setItem("template", templates);

    switch (templates) {
        case 1: // Calendars
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Calendars");
            $("#templates_text").html(`

                <br>

                <p style="text-align: left;">
                <br><a href="https://tinyurl.com/lasige-social-calendar">LASIGE Social Events</a> (Google Calendar & Android)
                <br><a href="https://calendar.google.com/calendar/ical/2b16f68172054cf2fb8c96d44e455409936f2b03d3a0b1c715135a50ddbc79b8%40group.calendar.google.com/public/basic.ics">LASIGE Social Events</a> (iCloud Calendar)
                <br><br><a href="https://tinyurl.com/lasige-scientific-calendar">LASIGE Talks</a> (Google Calendar & Android)
                <br><a href="https://calendar.google.com/calendar/ical/011de1ad7bd9aa8fb685ffec96f89343d93775a2bf9d907e5cf9f1c937ca1eca%40group.calendar.google.com/public/basic.ics">LASIGE Talks</a> (iCloud Calendar)
                </p>

                <br>

                <p style="text-align: left;"><strong>Instructions for iOS:</strong>
                <ul style="text-align: left;">
                    <li>Click Calendars from the calendar app</li>
                    <li>Add calendar > Add subscription calendar</li>
                    <li>Paste the ICS URL, Subscribe and Add</li>
                    <li>Remember that event notification configuration will be taken from your phone's global settings. Check it on Configuration > Calendar > Default notifications.</p></li>
                </ul>
                </p>
                `); 
            break;

        case 2: // Presentation Template
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Presentation Template");
            $("#templates_text").html(`

                <br>

                <p style="text-align: left;">The presentation template is available as a Google Slides file, which can be easily converted to PPT. To use it, first make a copy or export the file, as the original cannot be edited directly. Using this template is optional—it simply offers a suggested graphical style for LASIGE presentations.</p>

                <p><strong>File:</strong> <a href="https://docs.google.com/presentation/d/1IzLCI0TKFgk_DvITqZntePUTjcBiZhAWUJZgCD7RE0U/edit?usp=sharing">LASIGE Presentation Template</a>
                </li></p> 

                `); 
            break;

        case 3: // Posters Templates
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Posters Templates");
            $("#templates_text").html(`
                <br>

                <ul class=" list-inline ">
                <li>
                <a href="poster_templates/poster_cps.pptx">Cyber-physical systems (CPS)</a>
                </li>
                <li>
                <a href="poster_templates/poster_dsi.pptx">Data and systems intelligence (DSI)</a>
                </li>
                <li>
                <a href="poster_templates/poster_dsds.pptx">Dependable and Secure Decentralized Systems (DS2)</a>
                </li>
                <li>
                <a href="poster_templates/poster_hbi.pptx">Health and biomedical informatics (HBI)</a>
                </li>
                <li>
                <a href="poster_templates/poster_ihci.pptx">Inclusive Human-Computer Interaction (IHCI)</a>
                </li>
                <li>
                <a href="poster_templates/poster_rss.pptx">Reliable software systems (RSS)</a>
                </li>
                <li>
                <a href="poster_templates/poster_tc.pptx">Theory of Computing (ToC)</a>
                </li>
                </ul>   
                
                <br>
                    
                <p><strong>If your submitting a poster to the LASIGE Workshop, please respect the following norms:</strong></p>

                    <ul class="list-left">
                    <li>The posters are required to be vertical.</li>
                    <li>It is mandatory the presence of the logos and the LASIGE reference present in the template poster. The acknowledgements should be updated and the template references removed, if not needed.</li>
                    <li>The color gradient of the header cannot be changed.</li>
                    <li>No images or patterns can overlap the header.</li>
                    <li>The colour under the references and logos is required to be white.</li>
                    </ul>

                `); 
            break;

        default:
            break;
    }

}
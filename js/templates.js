/*
Templates Functions
 */

$(document).ready(function() {

    n_templates = 4;
    showTemplatesInfo(n_templates);

});

function showTemplatesInfo(templates = -1) {

    sessionStorage.setItem("template", templates);

    switch (templates) {
        case 1: // Presentation Template
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Presentation Template");
            $("#templates_text").html(`

                <br>

                <p style="text-align: left;">Using this template is optional—it simply offers a suggested graphical style for LASIGE presentations.</p>

                <p><strong>File:</strong> <a href="https://cloud.lasige.di.fc.ul.pt/s/qiBdkgXcLBxjXZ6" target="_blank">LASIGE Presentation Template</a>
                </li></p> 

                `); 
                $("#templates_picture").html(`<img width="50%" margin="0" src="assets/img/templates/Presentation_Template_25.png" alt="... " />`);
            break;

        case 2: // Posters Templates
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
                $("#templates_picture").html(`<img width="70%" margin="0" src="assets/img/templates/poster_templates.png" alt="... " />`);
            break;

            case 3: // Feedback form
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Feedback Channel");
            $("#templates_text").html(`

                <br>

                <p><strong>Link:</strong> <a href="https://forms.gle/scUPUmYwxeR6Q8fp7" target="_blank">Feedback Form</a>
                </li></p> 

                `); 
            $("#templates_picture").html(`<img width="50%" margin="0" src="assets/img/templates/feedback_form.png" alt="... " />`);
            break;

            case 4: // Welcome to LASIGE
            $("#templates_title").text("Templates & Resources");
            $("#templates_subtitle").text("Welcome to LASIGE");
            $("#templates_text").html(`

                <br>

                <p>The "Welcome to LASIGE" document provides information to help you integrate smoothly into our team. It is a living resource that evolves with new information over time. If you notice any missing details or would like to contribute, please contact us at <a href="mailto:lasige-phd-commission@listas.di.ciencias.ulisboa.pt" target="_blank">	lasige-phd-commission@listas.di.ciencias.ulisboa.pt</a> or reach out to any team member. At <a href="https://www.lasige.pt/about-lasige/" target="_blank">LASIGE</a>’s website, you can learn more about our research lines, the members, and recent news.</p> 

                <p><strong>Link:</strong> <a href="https://tinyurl.com/welcome-to-lasige" target="_blank">Welcome to LASIGE document</a>
                </li></p> 

                `); 
            $("#templates_picture").html(`<img width="50%" margin="0" src="assets/img/welcome-to-lasige.png" alt="... " />`);
            break;

        default:
            break;
    }

}
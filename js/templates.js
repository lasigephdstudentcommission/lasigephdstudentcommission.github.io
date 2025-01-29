/*
Templates Functions
 */

$(document).ready(function() {

    n_templates = 2;
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

                <p style="text-align: left;">The presentation template is available as a Google Slides file, which can be easily converted to PPT. To use it, first make a copy or export the file, as the original cannot be edited directly. Using this template is optional—it simply offers a suggested graphical style for LASIGE presentations.</p>

                <p><strong>File:</strong> <a href="https://docs.google.com/presentation/d/1IzLCI0TKFgk_DvITqZntePUTjcBiZhAWUJZgCD7RE0U/edit?usp=sharing">LASIGE Presentation Template</a>
                </li></p> 

                `); 
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
            break;

        default:
            break;
    }

}
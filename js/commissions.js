
$(document).ready(function() {
    showCommissionsInfo(2025);
});

function showCommissionsInfo(year = -1) {
    switch (year) {
        case 2025:
            $("#commissions_year").text("2025");
            $("#commissions_members").html(`
            <div class="row ">
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/david_g.png" alt="David Gonçalves portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/david-goncalves" target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>David Gonçalves</h5>
                        </a>
                        <p>Commission Chair and Graphics Head</p>

                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/daniel_r.png " alt="Daniel Reis portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Daniel-Reis" target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Daniel Reis</h5>
                        </a>
                        <p>Budget Head</p>

                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>
                    </div>
                </div>

                
                
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/laura_b.png " alt="Laura Balbi portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Laura-Balbi" target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Laura Balbi</h5>
                        </a>
                        <p>PR Head</p>

                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Health and Biomedical Informatics</p>
                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/joel_s.png " alt="Joel Samper portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Joel-Samper" target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Joel Samper (Sam)</h5>
                        </a>
                        <p>Operational Team</p>

                         <p class="text-muted ">Dependable and Secure Decentralized Systems</p>
                    </div>
                </div>
                
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/maryam_l.png" alt="Maryam Lotfi portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Maryam-Lotfi" target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Maryam Lotfi</h5>
                        </a>
                        <p>Operational Team</p>

                        <p class="text-muted ">Health and Biomedical Informatics</p>
                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/bakary_b.png " alt="Bakary Badjie portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Bakary-Badjie" target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Bakary Badjie</h5>
                        </a>
                        <p>Operational Team</p>

                        <p class="text-muted ">Cyber Physical Systems</p>
                    </div>
                </div>
                `);
            break;

        case 2024:
            $("#commissions_year").text("2024");
            $("#commissions_members").html(`
                <div class="row ">
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/filipa_r.png" alt="Filipa Rocha portrait." />

                        <a class="mx-2 " href="https://www.lasige.pt/member/filipa-rocha " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Filipa Rocha</h5>
                        </a>
                        <p>Commission Chair</p>
                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/miguel_s.png " alt="Miguel Silva portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/miguel-silva " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Miguel Silva</h5>
                        </a>
                        <p>Budget Head</p>

                        <p class="text-muted ">Data and Systems Intelligence</p>
                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/ines_g.png " alt="Inês Gonçalves portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/ines-goncalves " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Inês Gonçalves</h5>
                        </a>
                        <p>Operational Head</p>

                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>
                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/david_g.png" alt="David Gonçalves portrait." />

                        <a class="mx-2 " href="https://www.lasige.pt/member/david-goncalves " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>David Gonçalves</h5>
                        </a>
                        <p>Graphics Head</p>
                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>

                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/allan_e.png " alt="Allan Espindola portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/allan-espindola " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Allan Espindola</h5>
                        </a>
                        <p>Operational Team</p>
                        <p class="text-muted ">Cyber Physical Systems</p>
                        <p class="text-muted ">Dependable and Secure Decentralized Systems</p>

                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/joel_s.png " alt="Joel Samper portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/Joel-Samper " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Joel Samper (Sam)</h5>
                        </a>
                        <p>Operational Team</p>

                         <p class="text-muted ">Dependable and Secure Decentralized Systems</p>
                    </div>
                </div>
                </div>
                `);
            break;
        case 2023:
            $("#commissions_year").text("2023");
            $("#commissions_members").html(`
                <div class="row ">
                
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/pedro_c.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/pedro-cotovio " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Pedro Cotovio</h5>
                        </a>
                        <p>Commission Chair</p>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Health and Biomedical Informatics</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/diogo_b.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/diogo-branco " target="_blank " aria-label="Larry Parker Facebook Profile ">
                            <h5>Diogo Branco</h5>
                        </a>

                        <p>Operational & Budget Head</p>

                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>
                    </div>
                </div>
                
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/ricardo_c.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/ricardo-carvalho " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Ricardo Carvalho</h5>
                        </a>
                        <p>PR Head</p>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Health and Biomedical Informatics</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/susana_n.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/susana-nunes " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Susana Nunes</h5>
                        </a>
                        <p>Public Relations</p>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Health and Biomedical Informatics</p>

                    </div>
                </div>
                
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/david_m.png" alt="... " />
                        <a class="mx-2 " href="https://www.lasige.pt/member/david-makiya " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>David Makiya</h5>
                        </a>
                        <p>Operational Team</p>

                        <p class="text-muted ">Data and Systems Intelligence</p>
                    </div>
                </div>

                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/ziggy.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/zygimantas-jasiunas " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Zygimantas Jasiunas</h5>
                        </a>
                        <p>Operational Team</p>
                        <p class="text-muted ">Cyber Physical Systems</p>
                        <p class="text-muted ">Resilient Distributed and Networked Systems</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/guilherme_e.png" alt="... " />
                        <a class="mx-2 " href="https://www.lasige.pt/member/old/guilherme-espada/ " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Guilherme Espada</h5>
                        </a>
                        <p>Operational Team</p>

                        <p class="text-muted ">Reliable Software Systems</p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/patricia_e.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/patricia-eugenio " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Patrícia Eugénio</h5>
                        </a>
                        <p>Operational Team</p>

                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Health and Biomedical Informatics</p>
                    </div>
                </div>
                <div class="col-lg-12 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/jessica_c.png " alt="Jéssica Catarino portrait." />
                        <a class="mx-2 " href="https://www.lasige.pt/member/jessica-catarino/ " target="_blank " aria-label="Diana Petersen Facebook Profile ">
                            <h5>Jéssica Catarino</h5>
                        </a>
                        <p>Photography</p>

                        <p class="text-muted ">Data and Systems Intelligence</p>
                    </div>
                </div>
                </div>
                `);
            break;
        case 2022:
            $("#commissions_year").text("2021–2022");
            $("#commissions_members").html(`
                <div class="row ">
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/diogo_b.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/diogo-branco " target="_blank " aria-label="Larry Parker Facebook Profile ">
                            <h5>Diogo Branco</h5>
                        </a>
                        <p class="text-muted ">Inclusive Human-Computer Interaction</p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/hugo_s.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/hugo-simao " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Hugo Simão</h5>
                        </a>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Reliable Software Systems</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/paulo_c.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/paulo-canelas " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Paulo Canelas</h5>
                        </a>
                        <p class="text-muted ">Reliable Software Systems</p>
                    </div>
                </div> 
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/catarina_g.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/catarina-gamboa " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Catarina Gamboa</h5>
                        </a>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                        <p class="text-muted ">Reliable Software Systems</p>

                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/joao_b.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/joao-e-batista " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>João E. Batista</h5>
                        </a>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/ruben_b.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/ruben-branco " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Ruben Branco</h5>
                        </a>
                        <p class="text-muted ">Data and Systems Intelligence</p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/diana_s.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/diana-sousa " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Diana Sousa</h5>
                        </a>
                        <p class="text-muted ">Health and Biomedical Informatics</p>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="team-member ">
                        <img class="mx-auto rounded-circle " src="assets/img/team/old/rohit_k.png" alt="... " />

                        <a class="mx-2 " href="https://www.lasige.pt/member/rohit-kumar " target="_blank" aria-label="Larry Parker Facebook Profile ">
                            <h5>Rohit Kumar</h5>
                        </a>
                        <p class="text-muted ">Cyber Physical Systems</p>
                    </div>
                </div>
                </div>
                `);
            break;
        default:
            break;
    }
}
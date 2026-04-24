// Clubs array
const clubs = [
    {
        name: "Futsal Club",
        description: "Team spirit keeps the energy high and the competition friendly!",
        image: "../assets/img/social_clubs/futsal.png"
    },
    {
        name: "Tabletop Club",
        description: "Weekly sessions of exciting board games and great company!",
        image: "../assets/img/social_clubs/tabletop.png"
    },
    {
        name: "Arts & Crafts Club",
        description: "Craft, chat, and unwind together!",
        image: "../assets/img/social_clubs/arts.png"
    },
    {
        name: "Movie Club",
        description: "Watch, discuss, and enjoy movies together!",
        image: "../assets/img/social_clubs/movie.png"
    },
    {
        name: "Music Club",
        description: "Share, discover, and discuss your favorite tunes on Discord!",
        image: "../assets/img/social_clubs/music.png"
    },
    {
        name: "Running Club",
        description: "Share your running feats and hit the road together!",
        image: "../assets/img/social_clubs/running.png"
    },
    {
        name: "Volleyball Club",
        description: "Serve, spike, and have fun with fellow LASIGE members!",
        image: "../assets/img/social_clubs/volleyball.png"
    }
];

// Container reference
const container = document.getElementById("clubs-container");

// Generate club sections
clubs.forEach(club => {
    const row = document.createElement("div");
    row.className = "row club-row mb-7"; // spacing between clubs

    row.innerHTML = `
        <div class="col-lg-8">

            <img src="${club.image}" class="img-fluid mb-3">

            <p class="text-muted">${club.description}</p>

        </div>

        <!-- Centered divider with extra space below -->
        <div class="w-100 text-center">
            <hr style="width: 50%; margin: 30px auto 50px auto;">
        </div>
    `;

    container.appendChild(row);
});

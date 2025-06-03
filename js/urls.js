$(document).ready(function () {
    const url = window.location.href;

    const modalMappings = [
        { query: '?welcomeday', modal: '#portfolioModalWD', handler: () => showWDInfo(2024) },
        { query: '?welcomeday2022', modal: '#portfolioModalWD', handler: () => showWDInfo(2022) },
        { query: '?welcomeday2023', modal: '#portfolioModalWD', handler: () => showWDInfo(2023) },
        { query: '?welcomeday2024', modal: '#portfolioModalWD', handler: () => showWDInfo(2024) },

        { query: '?forum', modal: '#portfolioModalForum', handler: () => showForumInfo(4) },
        { query: '?forum1', modal: '#portfolioModalForum', handler: () => showForumInfo(1) },
        { query: '?forum2', modal: '#portfolioModalForum', handler: () => showForumInfo(2) },
        { query: '?forum3', modal: '#portfolioModalForum', handler: () => showForumInfo(3) },
        { query: '?forum4', modal: '#portfolioModalForum', handler: () => showForumInfo(4) },

        { query: '?workshop', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2025) },
        { query: '?workshop2023', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2023) },
        { query: '?workshop2023posters', modal: '#portfolioModalWorkshop', handler: () => { showWorkshopInfo(2023); showWorkshopMain(3); } },
        { query: '?workshop2024', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2024) },
        { query: '?workshop2024posters', modal: '#portfolioModalWorkshop', handler: () => { showWorkshopInfo(2024); showWorkshopMain(3); } },
        { query: '?workshop2025', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2025) },
        { query: '?workshop2025posters', modal: '#portfolioModalWorkshop', handler: () => { showWorkshopInfo(2025); showWorkshopMain(3); } },

        { query: '?commissions', modal: '#portfolioModalCommissions' },
        { query: '?join', modal: '#portfolioModalRecruit' },
        { query: '?talks', modal: '#portfolioModalTalks' },
        { query: '?clubs', modal: '#portfolioModalClubs' },
        { query: '?resources', modal: '#portfolioModalTemplates' },
    ];

    modalMappings.forEach(({ query, modal, handler }) => {
        if (url.indexOf(query) !== -1) {
            $(modal).modal('show');
            if (handler) handler();
        }
    });
});
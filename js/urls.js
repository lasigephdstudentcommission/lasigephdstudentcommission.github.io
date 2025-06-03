$(document).ready(function () {
    const url = window.location.href;

    const modalMappings = [
        { query: '?welcomeday', modal: '#portfolioModalWD' },
        { query: '?welcomeday2022', modal: '#portfolioModalWD', handler: () => showWDInfo(2022) },
        { query: '?welcomeday2023', modal: '#portfolioModalWD', handler: () => showWDInfo(2023) },
        { query: '?welcomeday2024', modal: '#portfolioModalWD' },

        { query: '?forum', modal: '#portfolioModalForum' },
        { query: '?forum1', modal: '#portfolioModalForum', handler: () => showForumInfo(1) },
        { query: '?forum2', modal: '#portfolioModalForum', handler: () => showForumInfo(2) },
        { query: '?forum3', modal: '#portfolioModalForum', handler: () => showForumInfo(3) },
        { query: '?forum4', modal: '#portfolioModalForum', handler: () => showForumInfo(4) },

        { query: '?workshop', modal: '#portfolioModalWorkshop' },
        { query: '?workshop2023', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2023) },
        { query: '?workshop2024', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2024) },
        { query: '?workshop2025', modal: '#portfolioModalWorkshop', handler: () => showWorkshopInfo(2025) },
        { query: '?workshop2025posters', modal: '#portfolioModalWorkshop', handler: () => { showWorkshopInfo(2025); showWorkshopMain(2); } },

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
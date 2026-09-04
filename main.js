// main.js - Interações da Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Accordion (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            // Fecha todos os outros itens antes de abrir o atual (comportamento opcional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('active');
        });
    });
});

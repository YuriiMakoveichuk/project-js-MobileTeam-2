document.addEventListener('DOMContentLoaded', function () {
    const faqitems = document.querySelectorAll('.faq-item');

    faqitems.forEach(item => {
        const header = item.querySelector('.faq-title');
        
        header.addEventListener('click', function () {
            const openItem = document.querySelector('.faq-item.active');
            
            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    const toggleItem = item => {
        const body = item.querySelector('.faq-body');
        
        if (item.classList.contains('active')) {
            body.style.display = 'none';
            item.classList.remove('active');
        } else {
            body.style.display = 'block';
            item.classList.add('active');
        }
    };
});

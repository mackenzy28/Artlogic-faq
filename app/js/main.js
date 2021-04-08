console.log('main.js has loaded');

const faqList = document.querySelector('.faq__list');


const renderFaq = (data) => {
    const array = data.rows;
    for (let i in array) {
        const html = `
        <li class="faq__list-item faq__list-item--collapsed" data-action="collapse">
            <h4 class="faq__title">${array[i].title}</h4>
            <div class="faq__content-wrapper">
                <p class="faq__content">${array[i].content}</p>
            </div>
        </li>`;
        faqList.insertAdjacentHTML('beforeend',html);
    }

    var faqListItems = document.querySelectorAll('[data-action="collapse"]');
    for (var i = 0; i < faqListItems.length; i++) {
        faqListItems[i].addEventListener('click', function() {
            console.log('click');

            const openItem = document.querySelector('.faq__list-item--show');
            if (openItem != null && openItem != this) { 
                openItem.classList.toggle('faq__list-item--show');
            }
            this.classList.toggle('faq__list-item--show');
        });
    }
}

fetch("data/data.json")
    .then(response => response.json())
    .then(data => renderFaq(data));









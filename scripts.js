const faqEl = document.getElementById('faq')

faqEl.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('faq__arrow-down')) {

        e.target.classList.remove('faq__arrow-down');
        e.target.classList.add('faq__arrow-up');
        // console.dir(e.target.parentNode.children[0].children[1])
        e.target.parentNode.children[0].children[0].classList.toggle('faq-bold');
        e.target.parentNode.children[0].children[1].classList.toggle('hidden');
    
    } else if(e.target.classList.contains('faq__arrow-up')) {

        e.target.classList.remove('faq__arrow-up');
        e.target.classList.add('faq__arrow-down');
        // console.dir(e.target.parentNode.children[0].children[1])
        e.target.parentNode.children[0].children[1].classList.toggle('hidden');
        e.target.parentNode.children[0].children[0].classList.toggle('faq-bold');

    }


});


 


 
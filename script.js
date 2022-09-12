const listItems = document.querySelectorAll('.accounts-item');
const accordion = document.getElementsByClassName('contentBox');


listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        for(let j = 0; j < accordion.length; j++) {
            accordion[j].classList.remove('active');
        }
        accordion[i].classList.add('active');
    } );
}
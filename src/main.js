const APP = document.getElementById('app');
let element;
APP.addEventListener('click', function (e) {
    element?.classList.toggle('itemDescription')
    element = e.target.lastElementChild ?? e.target.nextElementSibling 
    element?.classList.toggle('itemDescription')
 
    })
    

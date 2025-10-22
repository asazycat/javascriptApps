const APP = document.getElementById('app');

APP.addEventListener('click', function(e) {
    console.log(e.target.nextElementSibling)
    if(e.target.className === 'itemTitle') {
        e.target.className = 'itemTitleOff'
        e.target.nextElementSibling.className = 'itemDescriptionOn'
        document.body.style.backgroundImage = `url('../public/JavaScript.png')`
    } else if(e.target.className === 'itemDescriptionOn'){
         e.target.className = 'itemDescription'
        e.target.previousElementSibling.className = 'itemTitle'
    }
})
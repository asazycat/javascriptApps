const APP = document.getElementById('app');
const items = document.getElementsByClassName('items')

let elementDes = null, elementTitle = null;
APP.addEventListener('click', function(e) {
    
    if(e.target.className === 'itemTitle') {
        e.stopPropagation()
        if(elementDes !== null && elementTitle !== null) {
            elementTitle.parentElement.style = 'opacity:1'
            elementTitle.className = 'itemTitle'
            elementDes.className = 'itemDescription'
        }
        e.target.parentElement.style = 'opacity: 0.2'
        e.target.className = 'itemTitleOff'
        e.target.nextElementSibling.className = 'itemDescriptionOn'
        elementTitle = e.target
        elementDes =  e.target.nextElementSibling

        if(e.target.textContent === 'JavaScript Applications and Games') {
            document.body.style.backgroundImage = `url('../public/JavaScript.png')`
        } else if(e.target.textContent === 'Minecraft Bedrock Addons') {
            document.body.style.backgroundImage = `url('../public/minecraft.png')`
        } else if(e.target.textContent === 'jQuery/Ajax Applications') {
           document.body.style.backgroundImage = `url('../public/yellowImage.png')`
           e.target.parentElement.style = 'opacity: 1'
          
        }

    } else if(e.target.className === 'itemDescriptionOn'){
        e.stopPropagation()
        elementTitle.parentElement.style = 'opacity:1'
        e.target.className = 'itemDescription'
        e.target.previousElementSibling.className = 'itemTitle'
        document.body.style.backgroundImage = `url('../public/yellowImage.png')`
    } 
})

document.body.addEventListener('click', function () {
            
        document.body.style.backgroundImage = `url('')`
        elementTitle.parentElement.style = 'opacity:1'
        elementTitle.className = 'itemTitle'
        elementDes.className = 'itemDescription'
})




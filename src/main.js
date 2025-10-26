const APP = document.getElementById('app');
const APP_LIST = document.getElementById('apps_list');
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
        e.target.parentElement.style = 'background-color:#f4f75433'
        e.target.className = 'itemTitleOff'
        e.target.nextElementSibling.className = 'itemDescriptionOn'
        elementTitle = e.target
        elementDes =  e.target.nextElementSibling

        if(e.target.textContent === 'JavaScript Applications and Games') {
            document.body.classList.backgroundImage = `url('../JavaScript.jpeg')`
            APP_LIST.style = 'display:grid'
        } else if(e.target.textContent === 'Minecraft Bedrock Addons') {
            document.body.classList.backgroundImage = `url('../minecraft.png')`
            APP_LIST.style = 'display:none'
        } else if(e.target.textContent === 'jQuery/Ajax Applications') {
           document.body.classList.backgroundImage = `url('../yellowImage.png')`
           APP_LIST.style = 'display:none'
        } 

    } else if(e.target.className === 'itemDescriptionOn'){
        e.stopPropagation()
        elementTitle.parentElement.style = 'background-color:#f4f754'
        e.target.className = 'itemDescription'
        e.target.previousElementSibling.className = 'itemTitle'
        APP_LIST.style = 'display:none'
        document.body.style.backgroundImage = `url('../BackgroundMain.jpg')`
    } 
})






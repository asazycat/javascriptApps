
document.addEventListener('DOMContentLoaded', () => {
const APP = document.getElementById('app');
const APP_LIST = document.getElementById('apps_list');
const WELCOME_DIV = document.getElementById('welcome_parent');
const items = document.getElementsByClassName('item')

let elementDes = null, elementTitle = null;
APP.addEventListener('click', function(e) {

    if (window.innerWidth > 800) {
       
          if(e.target.className === 'itemTitle') {
        e.stopPropagation()
        if(elementDes !== null && elementTitle !== null) {
            elementTitle.parentElement.style = 'opacity:1'
            elementTitle.className = 'itemTitle'
            elementDes.className = 'itemDescription'
        }
        e.target.parentElement.style = 'background-color:#f4f75488'
        e.target.className = 'itemTitleOff'
        e.target.nextElementSibling.className = 'itemDescriptionOn'
        elementTitle = e.target
        elementDes =  e.target.nextElementSibling

        if(e.target.textContent === 'JavaScript Applications and Games') {
            WELCOME_DIV.style.display = 'none'
            document.body.style.backgroundImage = `url('./JavaScript.jpeg')`
            APP_LIST.style = 'display:grid'
        } else if(e.target.textContent === 'Minecraft Bedrock Addons') {
            WELCOME_DIV.style.display = 'none'
            document.body.style.backgroundImage = `url('./Minecraft.jpeg')`
            APP_LIST.style = 'display:none'
        } else if(e.target.textContent === 'jQuery/Ajax Applications') {
            WELCOME_DIV.style.display = 'none'
           document.body.style.backgroundImage = `url('./yellowImage.jpeg')`
           APP_LIST.style = 'display:none'
        } 

    } else if(e.target.className === 'itemDescriptionOn'){
        WELCOME_DIV.style.display = 'flex'
        e.stopPropagation()
        elementTitle.parentElement.style = 'background-color:rgba(216, 167, 41)'
        e.target.className = 'itemDescription'
        e.target.previousElementSibling.className = 'itemTitle'
        APP_LIST.style = 'display:none'
        document.body.style.backgroundImage = `url('./BackgroundMain.jpg')`
    } 

} else {
    if(e.target.textContent === 'JavaScript Applications and Games') {
        console.log(APP_LIST.style)
        APP_LIST.style.display = 'flex'
        APP_LIST.style.position = 'absolute'
        APP_LIST.style.backgroundColor = 'red'

        APP_LIST.onclick = function() {
            APP_LIST.style.display = 'none'
        }
    } else {
        console.log('nothing')
    }

}
  
})



window.addEventListener('resize', () => {

        if(window.innerWidth < 800) {
            WELCOME_DIV.style.display = 'none';
            APP_LIST.style.display = 'none'
            Array.from(items).forEach((eachItem) => {
                const itemChildren = eachItem.children
                itemChildren[0].classList.remove('itemTitleOff')
                itemChildren[0].classList.add('itemTitle')
                itemChildren[1].classList.remove('itemDescriptionOn')
                itemChildren[1].classList.add('itemDescription')
                console.log(itemChildren[1].classList)

            })
        } else {
            WELCOME_DIV.style = 'flex'
            APP_LIST.style.display = 'none'
            Array.from(items).forEach((eachItem) => {
                const itemChildren = eachItem.children
                itemChildren[0].classList.remove('itemTitleOff')
                itemChildren[0].classList.add('itemTitle')
                itemChildren[1].classList.remove('itemDescriptionOn')
                itemChildren[1].classList.add('itemDescription')
                console.log(itemChildren[1].classList)

            })
           
        }
})







})



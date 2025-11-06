document.addEventListener('DOMContentLoaded', () => {


    document.querySelector('.openCloseOperations').onclick = function () {
        if(document.querySelector('.operations').style.display === 'none')
            {
                document.querySelector('.operations').style.display = 'grid';
                document.getElementsByClassName('openCloseOperations')[0].innerHTML = '▲'
            } else {
                document.querySelector('.operations').style.display = 'none'
                document.getElementsByClassName('openCloseOperations')[0].innerHTML = '&#x25BC;'
            }
    }
 





















    
}) 



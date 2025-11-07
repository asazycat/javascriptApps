document.addEventListener('DOMContentLoaded', () => {

    const operations = document.getElementById('operations')
    const showHideOperationsButton = document.getElementById('openCloseOperations');
    document.querySelector('.openCloseOperations').onclick = function () {
        if(operations.className === 'operationsHide')
            {
               operations.classList.remove('operationsHide')
               operations.classList.add('operationsShow')
               showHideOperationsButton.textContent = '▲'
            } else {
                operations.classList.remove('operationsShow')
                operations.classList.add('operationsHide')
                showHideOperationsButton.innerHTML = '&#x25BC;'
            }
    }
 

'▲'



















    
}) 



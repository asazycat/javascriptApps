document.addEventListener('DOMContentLoaded', () => {
    const pageNumber = document.getElementById('number');
    const boardOne = document.getElementById('board1');
    const boardTwo = document.getElementById('board2');
    const boardThree = document.getElementById('board3');
    const nextButton = document.getElementById('next');
    const previousButton = document.getElementById('previous');
    const arr = ['1/3','2/3','3/3']
    let page = 0
    
    nextButton.addEventListener ('click', (e) => {
        page++
        if(page > 2) {
        page = 0
        }
        e.target.parentElement.previousElementSibling.textContent = `${arr[page]} ` 
        kanbanShow(page)
    })

    previousButton.addEventListener('click', (e) => {
        page--
        if(page < 0) {
        page = 2
        }
        e.target.parentElement.previousElementSibling.textContent = `${arr[page]} ` 
        kanbanShow(page)
    })
 
    function kanbanShow(page) {

    
        if(page == 0) {
        boardOne.classList.add('kanban_show')
        boardOne.classList.remove('kanban_hide')
        boardTwo.classList.remove('kanban_show')
        boardThree.classList.remove('kanban_show')
        boardTwo.classList.add('kanban_hide')
        boardThree.classList.add('kanban_hide')
    } else if (page == 1) {
        boardTwo.classList.add('kanban_show')
        boardTwo.classList.remove('kanban_hide')
        boardOne.classList.remove('kanban_show')
        boardThree.classList.remove('kanban_show')
        boardOne.classList.add('kanban_hide')
        boardThree.classList.add('kanban_hide')
       
    } else if (page == 2) {
        boardThree.classList.add('kanban_show')
        boardThree.classList.remove('kanban_hide')
        boardOne.classList.remove('kanban_show')
        boardTwo.classList.remove('kanban_show')
        boardOne.classList.add('kanban_hide')
        boardTwo.classList.add('kanban_hide')
    } 
    
    
}

window.addEventListener('resize', (e) => {
        if(e.target.innerWidth < 800) {
            pageNumber.textContent = '1/3'
            kanbanShow(0)
        } else if(e.target.innerWidth >= 800) {
            boardOne.classList.add('kanban_show')
            boardTwo.classList.add('kanban_show')
            boardThree.classList.add('kanban_show')
            boardOne.classList.remove('kanban_hide')
            boardTwo.classList.remove('kanban_hide')
            boardThree.classList.remove('kanban_hide')
        }
    })

});





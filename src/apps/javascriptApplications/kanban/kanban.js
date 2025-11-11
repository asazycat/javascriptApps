document.addEventListener('DOMContentLoaded', () => {
    const addToBoard = document.getElementsByClassName('add');
    const addToBoardForm = document.getElementsByClassName('contents_tobe_Added');
    const pageNumber = document.getElementById('number');
    const boardOne = document.getElementById('board1');
    const boardTwo = document.getElementById('board2');
    const boardThree = document.getElementById('board3');
    const nextButton = document.getElementById('next');
    const previousButton = document.getElementById('previous');

    const div = document.createElement('div');
    const title = document.createElement('h2');
    const contents = document.createElement('p');
    const formObj = {}

    const arr = ['1/3','2/3','3/3']
    let page = 0
    if (window.innerWidth < 800) {
        kanbanShow(page);
        pageNumber.textContent = '1/3'
    }
    
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
    });


    Array.from(addToBoard).forEach(eachHTMLTag => {
        eachHTMLTag.firstElementChild.addEventListener('click', (e) => {
            e.target.parentElement.style.display = 'none'
            e.target.parentElement.nextElementSibling.style.display = 'block'
        
        });
      
    Array.from(addToBoardForm).forEach((eachForm) => {
        eachForm.firstElementChild.addEventListener('submit',function(e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            this.parentElement.previousElementSibling.style.display = 'block'
            this.parentElement.style.display = 'none'
            const formData = new FormData(this)
            for (const [key,value] of formData.entries()) {
           formObj[key] = value
            }
        console.log(formObj)
        })

        
    })
})

});





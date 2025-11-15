document.addEventListener('DOMContentLoaded', () => {
    const addToBoard = document.getElementsByClassName('add');
    const addToBoardForm = document.getElementsByClassName('contents_tobe_Added');
    const pageNumber = document.getElementById('number');
    const boardOne = document.getElementById('board1');
    const boardTwo = document.getElementById('board2');
    const boardThree = document.getElementById('board3');
    const nextButton = document.getElementById('next');
    const previousButton = document.getElementById('previous');
    const listOfItems = document.getElementsByClassName('list_of_items')
    let divItem = document.createElement('div');
    let divContent = document.createElement('div');
    let divModifyButtons = document.createElement('div');
    let divChangeButtons = document.createElement('div');
    let heading = document.createElement('h1');
    let content_paragraph = document.createElement('p');
    let priority_paragraph = document.createElement('p');
    let time_paragraph = document.createElement('p') 
    let edit_button = document.createElement('button');
    let delete_button = document.createElement('button');
    let next_button = document.createElement('button');
    let previous_button = document.createElement('button');
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
            let currentBoard = this.parentElement.parentElement;
            console.log(currentBoard)
             addTaskToBoard(currentBoard, formObj)
        })

        
    })
});

    Array.from(listOfItems).forEach((eachItemList) => {
           
        eachItemList.addEventListener('click', function(e) {
            if(e.target.className = 'change_buttons') {
            e.stopImmediatePropagation()
            let board = e.currentTarget.parentElement
            console.log(board)
            let boardChildren = Array.from(board.lastElementChild.children)
            let selectedDiv =  e.target.parentElement.parentElement;
            let newList = boardChildren.filter((eachListItem) => eachListItem !== selectedDiv)
            if(e.target.textContent === '-->') {
                if(board.getAttribute('id') === 'board1') {
                    console.log(boardTwo)
                    boardTwo.lastElementChild.appendChild(selectedDiv)
                    board.lastElementChild.replaceChildren(...newList)
                } else if (board.getAttribute('id') === 'board2') {
                    boardThree.lastElementChild.appendChild(selectedDiv)
                    boardTwo.lastElementChild.replaceChildren(...newList)
                }
       }  else if (e.target.textContent === '<--') {
            if(board.getAttribute('id') === 'board2') {
                    console.log(boardTwo)
                    boardOne.lastElementChild.appendChild(selectedDiv)
                    boardTwo.lastElementChild.replaceChildren(...newList)
                } else if (board.getAttribute('id') === 'board3') {
                    boardTwo.lastElementChild.appendChild(selectedDiv)
                    boardThree.lastElementChild.replaceChildren(...newList)
                }
       }
       
    }
})


})


function addTaskToBoard(_board,_formObj) {
    const {title, notes, priority, hours, minutes} = _formObj
    console.log(_board, title, notes, priority, hours, minutes)

    heading.textContent = title;
    content_paragraph.textContent = notes;
    priority_paragraph.textContent = priority;
    time_paragraph.textContent = `${hours} ${hours < 2 ? 'hour' : 'hours'} and ${minutes} ${minutes < 2 ? 'minute' : 'minutes'} `;
    edit_button.textContent = 'edit'
    delete_button.textContent = 'delete';
    next_button.textContent = '-->';
    previous_button.textContent = '<--';

    divItem.setAttribute('class', 'item');
    divContent.setAttribute('class', 'item_all_contents');
    divChangeButtons.setAttribute('class', 'change_buttons_div');
    divModifyButtons.setAttribute('class', 'modify_buttons_div')
    heading.setAttribute('class', 'item_title');
    content_paragraph.setAttribute('class', 'item_content');
    priority_paragraph.setAttribute('class', 'priority_content');
    time_paragraph.setAttribute('class', 'time_content');
    edit_button.setAttribute('class', 'modify_buttons');
    delete_button.setAttribute('class', 'modify_buttons');
    previous_button.setAttribute('class', 'change_buttons');
    next_button.setAttribute('class', 'change_buttons');
    divContent.appendChild(content_paragraph);
    divContent.appendChild(priority_paragraph);
    divContent.appendChild(time_paragraph);
    divModifyButtons.appendChild(edit_button);
    divModifyButtons.appendChild(delete_button);
    divChangeButtons.appendChild(previous_button);
    divChangeButtons.append(next_button);

    divItem.appendChild(heading);
    divItem.appendChild(divContent);
    divItem.append(divModifyButtons);
    divItem.appendChild(divChangeButtons);
    
    _board.lastElementChild.append(divItem)

     divItem = document.createElement('div');
     divContent = document.createElement('div');
     divModifyButtons = document.createElement('div');
     divChangeButtons = document.createElement('div');
     heading = document.createElement('h1');
     content_paragraph = document.createElement('p');
     priority_paragraph = document.createElement('p');
     time_paragraph = document.createElement('p') 
     edit_button = document.createElement('button');
     delete_button = document.createElement('button');
     next_button = document.createElement('button');
     previous_button = document.createElement('button');
}
 
});





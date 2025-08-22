


(function () {
    const form = document.getElementById('form')
    let todoList = document.querySelector('#todo-list')
    let listItem = document.createElement('li')
    let title = document.createElement('h1')
    let notes = document.createElement('p')
    let time = document.createElement('p')
    let priority = document.createElement('p')
    let buttonDiv = document.createElement('div')
    let deleteButton = document.createElement('button')
    let editButton = document.createElement('button')
    const formObj = {}
   
        
    deleteButton.setAttribute('class', 'deleteButton')
    editButton.setAttribute('class', 'editButton')
    form.addEventListener('submit', function (e) {
      
        e.preventDefault()
        const formData = new FormData(form)
       for (const [key,value] of formData.entries()) {
           formObj[key] = value
           
        }
        console.log(formObj)
       
        title.innerText = formObj['title']
        notes.innerText = formObj['notes']
        time.innerText = `${formObj['hours']} hours ${formObj['minutes']} minutes`
        priority.innerText = formObj['priority']
        deleteButton.innerText = 'Delete'
        editButton.innerText = 'edit' 
        listItem.append(title)
        listItem.append(notes)
        listItem.append(time)
        listItem.append(priority)
        listItem.append(buttonDiv)
        listItem.append(deleteButton)
        listItem.append(editButton)
    
        todoList.append(listItem)
        listItem = document.createElement('li')
        title = document.createElement('h1')
        notes = document.createElement('p')
        time = document.createElement('p')
        deleteButton = document.createElement('button')
        editButton = document.createElement('button')
        deleteButton.setAttribute('class', 'deleteButton')
        editButton.setAttribute('class', 'editButton')
    })

    todoList.addEventListener('click', function(e) {
        if (e.target.innerText === 'Delete') {
            let List = Array.from(todoList.children)
            let updatedList = List.filter((element) => element !== e.target.parentElement)
            todoList.replaceChildren(...updatedList)
        }

        // if (e.target.innerText === 'edit') {
            
        // }
    })
} )()
const app = document.getElementById('app');

console.log(app)
app.addEventListener('click', function (e) {
    if (e.target.className.includes('item')) {
        e.target.lastElementChild.style.display === 'block' ? e.target.lastElementChild.style.display = 'none' : e.target.lastElementChild.style.display = 'block'
    }
    
})
    

const app = document.getElementById('app');

console.log(app)
app.addEventListener('click', function (e) {
    if (e.target.className.includes('item')) {
         e.target.style.display === 'block' ? e.target.style.display = 'none' : e.target.style.display = 'block'
    }
    
})
    

const app = document.getElementById('app');

console.log(app)
app.addEventListener('click', function (e) {
    console.log(e.target.anchorElement)
    if (e.target.className.includes('item')) {
        
    }
    // itemDescription.style.display === 'block' ? itemDescription.style.display = 'none' : itemDescription.style.display = 'block'
})
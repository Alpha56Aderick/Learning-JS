
let modalBtn = document.querySelector('.modal-btn');
let modalContainer = document.querySelector('.modal-contain');
let closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target === modalContainer) {
       modalContainer.style.display = 'none'; 
    }
})
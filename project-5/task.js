const addQuoteCardBtn = document.querySelector('.add-quote-button');
const modalCard = document.getElementById('modal-card');
const modalCloseBtn = document.querySelector('.close-button');
const modalAddBtn = document.querySelector('.submit-button');
const quoteCardContainer = document.getElementById('cards-container');
const allCtgFltr = document.getElementById('all-fltr-btn');
let quoteCardContainers = document.querySelectorAll('.quote-container');
let quoteInput = document.querySelector('.quote-input');
let authorInput = document.querySelector('.author-input')
let quoteCtg = document.getElementById('categories');


addQuoteCardBtn.addEventListener('click', function(){

    modalCard.style.display = 'flex';
})

modalCloseBtn.addEventListener('click', function(){

    modalCard.style.display = 'none';
})

modalAddBtn.addEventListener('click', function(){

        let newQuoteContainer = document.createElement('div');
            newQuoteContainer.classList.add('quote-container');
        
        let newQuote = document.createElement('p')
            newQuote.innerText = `${quoteInput.value}`;
            newQuote.classList.add('quote');
            newQuoteContainer.appendChild(newQuote);
        
        let newAuthor = document.createElement('span');
            newAuthor.innerText = `${authorInput.value}`;
            newAuthor.classList.add('author');
            newQuoteContainer.appendChild(newAuthor);

    if(authorInput.value === '' || quoteInput.value === '') {
        alert('Please fill in all fields');
    }else {
        quoteCardContainer.appendChild(newQuoteContainer);
        
    }
})

   // Filter buttons and logic;

   allCtgFltr.addEventListener('click', function(){
      console.log('all filter clicked');
    quoteCardContainers.forEach( container => {
        container.style.display = 'flex';
        console.log('all cards displayed!');

    })

   })
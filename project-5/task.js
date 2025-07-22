const addQuoteCardBtn = document.querySelector('.add-quote-button');
const modalCard = document.getElementById('modal-card');
const modalCloseBtn = document.querySelector('.close-button');
const newQuoteCard = document.getElementById('new-quotecard');
const modalAddBtn = document.querySelector('.submit-button');
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
            newQuote.innerHTML = `${quoteInput.value}`;
            newQuote.classList.add('quote');
            newQuoteContainer.appendChild(newQuote);
        
        let newAuthor = document.createElement('span');
            newAuthor.innerHTML = `${authorInput.value}`;
            newAuthor.classList.add('author');
            newQuoteContainer.appendChild(newAuthor);

    if(authorInput.value === '' || quoteInput.value === '') {
        alert('Please fill in all fields');
    }else {
        newQuoteCard.appendChild(newQuoteContainer);
    }
})

        

    
let quote = document.querySelector('.quote');
let author =document.querySelector('.author');
let nextQuote = document.querySelector('.new-quote');

const quotes = [
  {
    "author": "Albert Einstein",
    "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
  },
  {
    "author": "Maya Angelou",
    "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  },
  {
    "author": "Steve Jobs",
    "quote": "Your time is limited, so don't waste it living someone else's life."
  },
  {
    "author": "Nelson Mandela",
    "quote": "Education is the most powerful weapon which you can use to change the world."
  },
  {
    "author": "Oprah Winfrey",
    "quote": "The biggest adventure you can take is to live the life of your dreams."
  },
  {
    "author": "Martin Luther King Jr.",
    "quote": "Injustice anywhere is a threat to justice everywhere."
  },
  {
    "author": "Malala Yousafzai",
    "quote": "One child, one teacher, one book, one pen can change the world."
  }
]

nextQuote.addEventListener('click', function(){

    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})

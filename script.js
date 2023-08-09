
let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    function response() {
        if (isRead == true) {
            return "already read"
        } else {
            return "not yet read"
        }

    }
    this.info = function() {
 
        return (`The ${title} by ${author} has ${pages} pages and it is ${response()}`)
    }
}

function addBookToLibrary() {
    myLibrary.push(new Book('Harry Potter', 'J.K.Rowling', 450, false));
    myLibrary.push(new Book('Lord of the Rings', 'Tolken', 600, true));
}

addBookToLibrary();
console.log(myLibrary);

const main = document.querySelector('.main')
const addBook = document.querySelector('.add-book')
const modal = document.querySelector('.modal')
const cancel = document.querySelector('.cancel')
const form = document.querySelector('form')

addBook.addEventListener('click', (e) => {
    modal.style.display = 'flex';
});
cancel.addEventListener('click', (e) => {
    modal.style.display = 'none';
    form.reset();
});

function showCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card)
}
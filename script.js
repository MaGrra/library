
let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    function response() {
        if (isRead == true) {
            return "already read";
        } else {
            return "not yet read";
        }

    }
    this.info = function() {
 
        return (`The ${title} by ${author} has ${pages} pages and it is ${response()}`)
    }
}

addBookToLibrary();
console.log(myLibrary);

const main = document.querySelector('.main');
const addBook = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('form');
const submit = document.querySelector('submit');

form.addEventListener('submit', (e) => {

})

addBook.addEventListener('click', (e) => {
    modal.style.display = 'flex';
});
cancel.addEventListener('click', (e) => {
    modal.style.display = 'none';
    form.reset();
});

function showCards() {
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card)
}

function addBookToLibrary() {
    myLibrary.push(new Book('Harry Potter', 'J.K.Rowling', 450, false));
}

const textError = (input) => {
    if (input.validity.valueMissing) {
        input.parentElement.nextElementSibling.textContent = `Book ${input.id} has to be filled`;
    }
};

title.addEventListener('input', () => {
    if (title.validity.valid) {
        title.parentElement.nextElementSibling.textContent = '';
    } else {
      textError(title);
    }
});

author.addEventListener('input', () => {
    if (author.validity.valid) {
        author.parentElement.nextElementSibling.textContent = '';
    } else {
      textError(author);
    }
});

pages.addEventListener('input', () => {
    if (pages.validity.valid) {
        pages.parentElement.nextElementSibling.textContent = '';
    } else {
      textError(pages);
    }
});






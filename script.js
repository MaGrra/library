
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
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").value;

    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

form.addEventListener('submit', (e) => {
    if (!title.validity.valid) {
        textError(title);
        e.preventDefault();
    } else if (!author.validity.valid) {
        textError(author)
        e.preventDefault();
    } else if (!pages.validity.valid) {
        textError(pages)
        e.preventDefault();
    } else {
        e.preventDefault();
        addBookToLibrary();
        e.target.reset();
        modal.style.display = 'none';
    }
})

/*Form validation + error message*/
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






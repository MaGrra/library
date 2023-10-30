
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
const bookContainer = document.querySelector('.book-container');
const addBook = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('form');
const submit = document.querySelector('submit');

form.addEventListener('submit', (e) => {

})

addBook.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    isRead.value = 'false'
});
cancel.addEventListener('click', (e) => {
    modal.style.display = 'none';
    form.reset();
});

function showCard() {
    const card = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btnRead = document.createElement('button')
    const btnRemove = document.createElement('button')


    bookContainer.appendChild(card)
    card.classList.add('book-card')

    card.appendChild(title)
    title.textContent = `"${this.title.value}"`

    card.appendChild(author)
    author.textContent = this.author.value

    card.appendChild(pages)
    pages.textContent = this.pages.value

    card.appendChild(btnRead)
    btnRead.textContent = "Read"
    btnRead.classList.add('read-btn')
    if (isRead.value === "true") {
        btnRead.classList.toggle('btn-status-read')
    }
    // need to edit the actual array thing
    btnRead.addEventListener('click', () => {
        console.log(event.target)
        if (this.isRead.value === "false" ) {
            btnRead.classList.toggle('btn-status-read')
            this.isRead.value = "true"
            console.log(`${this.isRead.value} kjip true`)
        } else {
            btnRead.classList.toggle('btn-status-read')
            this.isRead.value = "false"
            console.log(`${this.isRead.value} kjip false`)
        }
    })

    card.appendChild(btnRemove)
    btnRemove.textContent = "Remove"
    btnRemove.addEventListener('click', () => {

    let target = event.target;
    let parent = target.parentElement
    let thing = parent.firstChild.textContent
        // recreate the array without the parent elements p text, will remove all the books from array but not the screen
    myLibrary = myLibrary.filter(function(book) { return `"${book.title}"` != thing})
    bookContainer.removeChild(card)


    })

}



function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").value;

    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
    showCard()
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
        isRead.value = 'false'
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
isRead.addEventListener('change', () => {
    if (isRead.value === 'false') {
        isRead.value = 'true';
    } else {
        isRead.value = "false";
    }
});






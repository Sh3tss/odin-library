document.addEventListener('DOMContentLoaded', () => {
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    let myLibrary = [];

    const newbtn = document.getElementById('newbookbtn');
    const modal = document.getElementById('modalOverlay');
    const insertbtn = document.getElementById('insertbookbtn');
    const closeModalbtn = document.getElementById('closeModalbtn');
    //get the input values
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const pages = document.getElementById('pages');
    //selecting the div to insert the books 
    const pageBooks = document.querySelector('.books');

    //make the form openup when the new book get clicked
    newbtn.addEventListener('click', () => {
        modal.classList.add('active');
    })
    //here we close the form with the insert button, and catch the data from the form inputs
    insertbtn.addEventListener('click', (event) => {
        event.preventDefault();
        //get the data from the inputs
        const authorValue = author.value;
        const titleValue = title.value;
        const pagesValue = pages.value;
        const readStatus = false;  //all the books start with a false status to read
        //to add the information inside my constructor
        const newBook = new Book(titleValue, authorValue, pagesValue, readStatus);
        myLibrary.push(newBook);
        renderBooks();
        modal.classList.remove('active');
    })
    closeModalbtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })

    //function to set the books inside the page(render)
    function renderBooks() {
        pageBooks.innerHTML = '';

        myLibrary.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('bookcard');
            const bookTitle = document.createElement('h3');
            bookTitle.textContent = book.title;
            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${book.author}`;
            const bookPages = document.createElement('p');
            bookPages.textContent = `Pages: ${book.pages}`;
            const markRead = document.createElement('p');
            markRead.classList.add('readstatus');

            if (book.read) {
                markRead.textContent = 'Status: Read';
                markRead.classList.add('read');
            } else {
                markRead.textContent = 'Status: Not Read';
            }

            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(markRead);

            pageBooks.appendChild(bookCard);
        })
    }
})
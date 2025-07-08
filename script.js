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
            //create the bookcard for the books
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
            //bookactions containter
            const bookActions = document.createElement('div');
            bookActions.classList.add('bookActions');
            //delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.innerHTML = '&#128465;';
            deleteBtn.addEventListener('click', () => {
                const bookIndex = myLibrary.indexOf(book);
                if (bookIndex > -1) {
                    myLibrary.splice(bookIndex, 1);
                }
                pageBooks.removeChild(bookCard);
                renderBooks();
            });

            //mark as read button
            const readBtn = document.createElement('button');
            readBtn.classList.add('readBtn');
            readBtn.textContent = book.read ? 'Mark as Not Read' : 'Mark as Read';
            readBtn.addEventListener('click', () => {
                book.read = !book.read;
                renderBooks();
            });

            if (book.read) {
                markRead.textContent = 'Status: Read';
                markRead.classList.add('read');
            } else {
                markRead.textContent = 'Status: Not Read';
            }

            //delete and mark as read buttons
            bookActions.appendChild(deleteBtn);
            bookActions.appendChild(readBtn);

            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(markRead);
            bookCard.appendChild(bookActions);

            pageBooks.appendChild(bookCard);
        });
    }
});
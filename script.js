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
        const newBook = newBook(titleValue, authorValue, pagesValue, readStatus);
        myLibrary.push(newBook);

        console.log('Novo livro adicionado:', newBook); // Para você ver no console
        console.log('Minha Biblioteca agora:', myLibrary);

        modal.classList.remove('active');
    })
    closeModalbtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })
})
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
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const pages = document.getElementById('pages');

    //make the form openup when the new book get clicked
    newbtn.addEventListener('click', () => {
        modal.classList.add('active');
    })
    //make the form close after click the insert button inside the form
    insertbtn.addEventListener('click', (event) => {
        event.preventDefault();
        const authorValue = author.value;
        const titleValue = title.value;
        const pagesValue = pages.value;
        console.log('Autor:', authorValue);
        console.log('Título:', titleValue);
        console.log('Páginas:', pagesValue);
        modal.classList.remove('active');
    })
    closeModalbtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })
})
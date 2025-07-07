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

    //make the form openup when the new book get clicked
    newbtn.addEventListener('click', () => {
        modal.classList.add('active');
    })
    //make the form close after click the insert button inside the form
    insertbtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })
})
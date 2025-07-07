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

    newbtn.addEventListener('click', () => {
        modal.classList.add('active');
    })
})
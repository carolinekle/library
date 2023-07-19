const addBook = document.querySelector(".add")
const stack = document.querySelector(".stack")
const exitModal =document.querySelector(".exitModal")
const submitBook = document.querySelector(".submit")
const removeBook = document.querySelector(".remove-book")
const bookTitle = document.querySelector('[name="title"]');
const bookAuthor = document.querySelector('[name="author"]');
const bookPages = document.querySelector("[data-pages]");
const readOrNot = document.querySelector("[data-red-or-not]");

class book{
    constructor(author, title, page, read){
        this.author = author;
        this.title = title;
        this.page = page;
        this.read = read;
        this.addBook();
    }

    addBook(){
        c
    }    
}
const book = new book(author, title, page, read)

addBook.addEventListener(click, () => {
    book.addBook()
})

exitModal.addEventListener("click", () =>{
    /* refresh modal? */
})

removeBook.addEventListener("click", () =>{
    book.removeBook()
})
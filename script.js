const addBook = document.querySelector(".add")
const stack = document.querySelector(".stack")
const exitModal =document.querySelector(".exitModal")
const submitBook = document.querySelector(".submit")
const removeBook = document.querySelector(".remove-book")
const bookModal = document.getElementById("modal")
const library = document.querySelector(".library");

let myLibrary = [];
console.log(myLibrary)

let newBook;

class Book{
    constructor(bookAuthor, bookTitle, bookPages, readOrNot){
        this.author = bookAuthor;
        this.title = bookTitle;
        this.pages = bookPages;
        this.read = readOrNot;

    }
    createBook(){
        const newCard = document.createElement("div");
        newCard.classList.add("book-card");

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const remove = document.createElement("button")

        title.innerText = this.title;
        author.innerText = this.author;
        pages.innerText = this.pages + " pages";
        
        if(this.read.checked === true){
            read.innerText = "Read"
        }
        if(this.read.checked === false){
            read.innerText === "Not read"
        }

        remove.innerText = "remove book"
        remove.classList.add("remove-book");

        newCard.appendChild(title)
        newCard.appendChild(author)
        newCard.appendChild(pages)
        newCard.appendChild(read)
        newCard.appendChild(remove)
    

        library.appendChild(newCard);
        
    }

    addLibrary(){
        myLibrary.push(this)
    }
    
    removeBook(){
        remove(newBook)
    }

}





addBook.addEventListener("click", () => {
    bookModal.style.display ="none" ? "flex" : "none";

})

submitBook.addEventListener("click", () =>{
    bookModal.style.display = "none";
    const bookTitle = document.querySelector('[name="title"]').value;
    const bookAuthor = document.querySelector('[name="author"]').value;
    const bookPages = document.querySelector('[name="pages"]').value;
    const readOrNot = document.querySelector('[name="checkbox"]');
    const newBook = new Book(bookAuthor, bookTitle, bookPages, readOrNot);
    newBook.createBook();
    newBook.addLibrary();
})

exitModal.addEventListener("click", () =>{
    bookModal.style.display ="none"
})

removeBook.addEventListener("click", () =>{
    book.removeBook()
})
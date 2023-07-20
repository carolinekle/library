const addBook = document.querySelector(".add")
const stack = document.querySelector(".stack")
const exitModal = document.querySelector(".exitModal")
const submitBook = document.querySelector(".submit")
const bookModal = document.getElementById("modal")
const libraryContainer = document.querySelector(".library");
const removeBook = document.querySelector(".remove-book")

class Book{
    constructor(bookAuthor, bookTitle, bookPages, readOrNot){
        this.author = bookAuthor;
        this.title = bookTitle;
        this.pages = bookPages;
        this.read = readOrNot;
    }
    }


class Library{
    constructor(){
        this.books=[]
    }

    addLibrary(){
        this.books.push(newBook)
    }

    removeBook(){
        this.books = library.books.filter((book) => book.title !== bookDelete);
    }

    updateBook(){
        if (foundBook) {
          foundBook.read = this.read;
        }
    }
}


console.log(Library)

function makeCard(){
    const newCard = document.createElement("div");
    newCard.classList.add("book-card");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button")


    title.innerText = this.title;
    author.innerText = this.author;
    pages.innerText = this.pages + " pages";
    
    if(this.read){
        read.innerText = "Read"
    }
    else{
        read.innerHTML = "Not read"
    }

    remove.innerText = "Remove book"
    remove.onclick = () =>{
        bookDelete = this.title
        library.removeBook(bookDelete);
        newCard.remove();
    }
    read.onclick =  () =>{
        this.read = !this.read; 
        if (this.read) {
            read.innerText = "Read"
        } else {
            read.innerText = "Not Read"
        }
        const foundBook = library.books.find((book) => book.title === this.title);
        library.updateBook(foundBook);
      
    }

    newCard.appendChild(title)
    newCard.appendChild(author)
    newCard.appendChild(pages)
    newCard.appendChild(read)
    newCard.appendChild(remove)


    libraryContainer.appendChild(newCard);

}

function clearFields(){
    document.querySelector('[name="title"]').value = "";
    document.querySelector('[name="author"]').value = ""
    document.querySelector('[name="pages"]').value = ""
    document.querySelector('[name="checkbox"]').value = ""
}


let newBook;

let library = new Library();

addBook.addEventListener("click", () => {
    bookModal.style.display ="none" ? "flex" : "none";

})

submitBook.addEventListener("click", () =>{
    bookModal.style.display = "none";
    const bookTitle = document.querySelector('[name="title"]').value;
    const bookAuthor = document.querySelector('[name="author"]').value;
    const bookPages = document.querySelector('[name="pages"]').value;
    const readOrNot = document.querySelector('[name="checkbox"]').checked;
    newBook = new Book(bookAuthor, bookTitle, bookPages, readOrNot);
    makeCard.call(newBook);
    library.addLibrary(newBook);
    clearFields();
})

exitModal.addEventListener("click", () =>{
    bookModal.style.display ="none"
})

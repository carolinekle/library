const addButton = document.querySelector(".add")
const stack = document.querySelector(".stack")
const exitModal =document.querySelector(".exitModal")
const submitBook = document.querySelector(".submit")

class book{
    constructor(author, title, page, read){
        this.author = author;
        this.title = title;
        this.page = page;
        this.read = read;
        this.clear();
    }
}
const book = new book(author, title, page, read)

addButton.addEventListener(click, () => {

})
const body = document.querySelector("body");
const btnAddBook = document.querySelector("#btnAddBook");

//array library
let library = [];
//classe book
function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = false;
}
Book.prototype.read = function(){
    this.isRead = true;
}
Book.prototype.notRead = function(){
    this.isRead = false;
}

function writeBooks(library){
    //per rimuovere UIlibrary se già creata
    let tmpLibary = document.querySelector(".library");     
    tmpLibary.remove();
    //creao UIlibrary
    let UIlibrary = document.createElement("div");
    UIlibrary.classList.add("library");
    //riempo UIlibrary
    for(let i = 0; i < library.length; i++){
        //creo book
        let tmpBook = document.createElement("div");
        tmpBook.classList.add("book");
        tmpBook.setAttribute("id", "book"+i);
        //aggiungo elementi a Book
            //author
            let tmpAuthor = document.createElement("div");
            tmpAuthor.classList.add("author");
            span = document.createElement("span");
            span.innerText = "Author: ";
            tmpAuthor.append(span);
            spanWid = document.createElement("span");
            spanWid.setAttribute("id", "outAuthor");
            spanWid.innerText = `${library[i].author}`;
            tmpAuthor.append(spanWid);
            //title
            let tmpTitle = document.createElement("div");
            tmpTitle.classList.add("title");
            span = document.createElement("span");
            span.innerText = "Title: ";
            tmpTitle.append(span);
            spanWid = document.createElement("span");
            spanWid.setAttribute("id", "outTitle");
            spanWid.innerText = `${library[i].title}`;
            tmpTitle.append(spanWid);
            //pages
            let tmpPages = document.createElement("div");
            tmpPages.classList.add("pages");
            span = document.createElement("span");
            span.innerText = "Pages: ";
            tmpPages.append(span);
            spanWid = document.createElement("span");
            spanWid.setAttribute("id", "outPages");
            spanWid.innerText = `${library[i].pages}`;
            tmpPages.append(spanWid);
            //appendo
            tmpBook.append(tmpAuthor);
            tmpBook.append(tmpTitle);
            tmpBook.append(tmpPages);
        //aggiungo Book to UIlibrary
        UIlibrary.append(tmpBook);
    }
    //aggiungo UIlibrary al body
    body.append(UIlibrary);
    console.log(UIlibrary);
}

/** event listener submit btn
 *  preleva dati da form
 *  crea book e lo aggiunge a library
 */
btnAddBook.addEventListener('click', () => {
    let author = document.getElementById("inAuthor").value;
    let title = document.getElementById("inTitle").value;
    let pages = document.getElementById("inPages").value;
    library.push(new Book(author, title, pages));
    writeBooks(library);
    console.log(library);
});



/*
addBookToLibrary();
library[0].read();
console.log(library[0].isRead);
*/
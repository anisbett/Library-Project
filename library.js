// Make a plan//
//Break tasks down into small parts//

let myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author
  this.tilte = title
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
  let author = prompt("Enter the author of the book");
  let title = prompt("Enter the title of the book");
  let pages = prompt("Enter the number of pages in the book");
  let answer = prompt("Type true if you read the book or type false if you have not read the book");
  let test = answer.toLowerCase();
  let read;
  if (test === "true"){
    read = true;
  }
  else if (test === "false"){
    read = false;
  }

  const book = new Book(author, title, pages, read);


}

function displayBooks(arr) {
  let i = 0;
  let length = arr.length;
  for(i=0; i < length; i++){

  }
}
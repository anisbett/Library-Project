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
  myLibrary.push(book);


}

function displayBooks(arr) {
  let i = 0;
  let length = arr.length;
  for(i=0; i < length; i++){
    const card = document.createElement('div');
    card.innerHTML = `<h5>${arr[i].title}</h5>
    <br>${arr[i].author}
    <br>${arr[i].pages}
    <br>${arr[i].read}`

  }
}

function addBook(){
  let author = document.querySelector('#author');
  let title = document.querySelector('#title');
  let pages = document.querySelector('#pages');
  
  let radios = document.getElementsByName('answer');
  let selectedValue = '';

      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selectedValue = radios[i].value;
          break;}}

  let read;
  if (selectedValue === "True"){
    read = true;
  }
  else {
    read = false;
  }

  const book = new Book(author, title, pages, read);
  myLibrary.push(book);

}

function loadForm() {
  document.querySelector('#book-form').style.display = 'block';
}

function hideForm() {
  addBook();
  document.querySelector('#book-form').style.display = 'none';

  //Clear value fields
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#pages').value = '';

}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#book-form').style.display = 'none';
  document.querySelector('#add-book').addEventListener('click', ()=> loadForm);
  document.querySelector('#submit-form').addEventListener('click', ()=> hideForm);
});

//event.preventDefault() needs to be added
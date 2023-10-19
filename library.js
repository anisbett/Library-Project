let myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

Book.prototype.toggleReadStatus = function() {
  this.read =! this.read; // Toggle between true and false
};

function displayBooks(arr) {

  var booksContainer = document.querySelector('#books-container');

  // Clear existing content
  booksContainer.innerHTML = '';

  let i = 0;
  let length = arr.length;
  for(i=0; i < length; i++){
    const card = document.createElement('div');
    card.innerHTML = `<h5>${arr[i].title}</h5>
    <br>${arr[i].author}
    <br>${arr[i].pages}
    <br>${arr[i].read}
    <br><button class="remove-button" data-index="${i}">Remove Book</button>
    <br><button class="toggle-read-button" data-index="${i}">Toggle Read Status</button>
    `;

    booksContainer.appendChild(card);

  }
}



function addBook(event){
  event.preventDefault();

  let author = document.querySelector('#author').value;
  let title = document.querySelector('#title').value;
  let pages = document.querySelector('#pages').value;
  
  let radios = document.getElementsByName('answer');
let selectedValue = '';

for (var i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    selectedValue = radios[i].value;
    break;
  }
}
console.log(selectedValue);
let read = selectedValue === 'True';
console.log('Read value:', read);


 

  const book = new Book(author, title, pages, read);
  myLibrary.push(book);

  
  displayBooks(myLibrary)
  hideForm();
}

function loadForm() {
  document.querySelector('#book-form').style.display = 'block';
}

function hideForm() {
  document.querySelector('#book-form').style.display = 'none';

  // Reset the form
  document.querySelector('#book-form').reset();

  //Clear value fields
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#pages').value = '';

}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#book-form').style.display = 'none';
  document.getElementById('add-book').addEventListener('click', loadForm);
  document.querySelector('#submit-form').addEventListener('click', addBook);

document.getElementById('books-container').addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('remove-button')) {
    // Get the index from the data-index attribute
    var index = target.getAttribute('data-index');

    // Remove the book from the library array
    myLibrary.splice(index, 1);

    // Render the updated list of books
    displayBooks(myLibrary);
  } else if (target.classList.contains('toggle-read-button')) {
    // Toggle the read status of the book
    var index = target.getAttribute('data-index');
    myLibrary[index].toggleReadStatus();
    // Render the updated list of books
    displayBooks(myLibrary);
  }
});



});


import _ from 'lodash';
import "./style.css";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const bookName = document.createElement("h1");
    bookName.classList.add("book-name");
    bookName.textContent = "A Brutish Colony";

    const authorName = document.createElement("h2");
    authorName.classList.add("author-name");
    authorName.textContent = "John Marshall";
  
    header.appendChild(bookName);
    header.appendChild(authorName);
 
    return header;
  }

  document.body.appendChild(createHeader()); 

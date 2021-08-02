import _ from 'lodash';
import "./style.css";
import createNav from './navBar.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function createHeader() {
    const header = document.createElement("header");
  const title = document.createElement("div");
  title.classList.add("title");

    const bookName = document.createElement("h1");
    bookName.classList.add("book-name");
    bookName.textContent = "A Brutish Colony";

    const authorName = document.createElement("h2");
    authorName.classList.add("author-name");
    authorName.textContent = "John Marshall";
  
    header.appendChild(title);
    header.appendChild(createNav());
    title.appendChild(bookName);
    title.appendChild(authorName);

    return header;
  }

  document.body.appendChild(createHeader()); 

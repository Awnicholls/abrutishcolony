import createNav from "./navBar.js";

export default function createHeader() {
    const header = document.createElement("header");
    const container = document.createElement("div");
    container.classList.add('container');
    const navBar = document.createElement("nav");
    navBar.classList.add('navbar');
    const brand = document.createElement("div");
    brand.classList.add("brand");
  
    const bookName = document.createElement("h1");
    bookName.classList.add("book-name");
    bookName.textContent = "A Brutish Colony";
  
    const authorName = document.createElement("h2");
    authorName.classList.add("author-name");
    authorName.textContent = "John Marshall";
  
    header.appendChild(container);
    container.appendChild(navBar);
    navBar.appendChild(brand);
    navBar.appendChild(createNav());
    brand.appendChild(bookName);
    brand.appendChild(authorName);
  
    return header;
  }
  
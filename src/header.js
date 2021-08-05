import createNav from "./navBar.js";
import Icon from './navicon.png';


export default function createHeader() {
    const header = document.createElement("header");
    // header.setAttribute("id", "header");

    const container = document.createElement("div");
    container.classList.add('container');
    const navBar = document.createElement("nav");
    navBar.classList.add('navbar');
    navBar.setAttribute('id', 'navbar');
    const brand = document.createElement("div");
    brand.classList.add("brand");
  
    const bookName = document.createElement("h1");
    bookName.classList.add("book-name");
    bookName.textContent = "A Brutish Colony";
  
    const authorName = document.createElement("h2");
    authorName.classList.add("author-name");
    authorName.textContent = "John Marshall";

    function createScrollEvent(){
      window.onscroll = function() {
    
      // pageYOffset or scrollY
      if (window.pageYOffset > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
    };
   


    const navLink = document.createElement("a");
    navLink.setAttribute('href', 'javascript:void(0)');
    navLink.className = 'icon-container';
    navLink.setAttribute('id', 'navIcon');
    const navIcon = new Image();
    navIcon.classList.add('icon');
    navIcon.src = Icon;
    
  

  
    header.appendChild(container);
    container.appendChild(navBar);
    navBar.appendChild(brand);
    navBar.appendChild(createNav());
    brand.appendChild(bookName);
    brand.appendChild(authorName);
    navBar.appendChild(navLink);
    navLink.appendChild(navIcon);
    createScrollEvent();



    return header;
  }


  
import bookCover from './book.jpg';

export default function createHomeSection() {
    const home = document.createElement("section");
    home.setAttribute("id", "home");
  
    const bookCoverContainer = document.createElement("div");
    bookCoverContainer.classList.add("cover-container");

    const bookCoverImage = new Image();
    bookCoverImage.src = bookCover;
    bookCoverImage.classList.add("book-cover");
   bookCoverContainer.appendChild(bookCoverImage);

   home.appendChild(bookCoverContainer);
    return home;
  }
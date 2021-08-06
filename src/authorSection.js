import authorPhoto from "./author.webp";
import twitter from "./twitter.png";

export default function createAuthorSection() {
  const author = document.createElement("section");
  author.setAttribute("id", "author");

  const authorPhotoContainer = document.createElement("div");
  authorPhotoContainer.classList.add("author-container");

  const authorPhotoImage = new Image();
  authorPhotoImage.src = authorPhoto;
  authorPhotoImage.classList.add("author-photo");
  authorPhotoContainer.appendChild(authorPhotoImage);
  authorPhotoImage.setAttribute("alt", "John Marshall the author of this book");
  authorPhotoImage.setAttribute("height", "310");
  authorPhotoImage.setAttribute("width", "465");

  const authorSummary = document.createElement("div");
  authorSummary.classList.add("author-summary");

  const authorName = document.createElement("h1");
  authorName.textContent = "About the Author: ";
  const authorSummaryBody = document.createElement("h2");
  const authorSummaryPara = document.createElement("p");

  authorSummaryPara.textContent =
    "John Marshall has been Her Britannic Majesty’s Ambassador to the Grand Duchy of Luxembourg since presenting his credentials to HRH Grand Duke Henri on 14 April 2016. He was previously British Ambassador to Senegal and non-resident Ambassador to Cabo Verde and Guinea-Bissau from May 2011 to July 2015.\n\
  John Marshall joined the Foreign and Commonwealth Office in 1988. He has also previously served in Tokyo, Kuala Lumpur and Addis Ababa.";

  const twitterIconWrapper = document.createElement('a');
  twitterIconWrapper.innerHTML = 'Twitter link';
  twitterIconWrapper.setAttribute(
    "href",
    "https://twitter.com/hmajohnmarshall"
  );
  twitterIconWrapper.className = 'twitter-container';


  const twitIcon = new Image();
  twitIcon.classList.add('twitIcon');
  twitIcon.src = twitter;
  twitIcon.setAttribute('alt', 'twitter icon');
  twitIcon.setAttribute('width', '50');
  twitIcon.setAttribute('height', '50');

twitterIconWrapper.appendChild(twitIcon);

  author.appendChild(authorSummary);
  author.appendChild(authorPhotoContainer);
  authorSummary.appendChild(authorName);
  authorSummary.appendChild(authorSummaryBody);
  authorSummaryBody.appendChild(authorSummaryPara);
  authorSummary.appendChild(twitterIconWrapper);

  return author;
}

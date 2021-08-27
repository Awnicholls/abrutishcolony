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
  const authorSummaryPara1 = document.createElement("p");
  const authorSummaryPara2 = document.createElement("p");
  const authorSummaryPara3 = document.createElement("p");

  authorSummaryPara1.textContent =
    "John Marshall has been woking for the foreign office since 1988. During this time he has worked in Japan, Malaysia, Ethiopia, Senegal and Luxembourg.";
  authorSummaryPara2.textContent =
    "  His most recent roles include being the British Ambassador to Senegal and non-resident Ambassador to Cabo Verde and Guinea-Bissau from May 2011 to July 2015, followed by being the British Ambassador to Luxembourg till 2020. ";
  authorSummaryPara3.textContent =
    "Currently he can be found in Belgium, often going on runs or exploring the local areas, seeking history, culture and just adventure! He can be found documenting these journeys on his twitter, found here:";

  const twitterIconWrapper = document.createElement("a");
  twitterIconWrapper.innerHTML = "Twitter link";
  twitterIconWrapper.setAttribute(
    "href",
    "https://twitter.com/hmajohnmarshall"
  );
  twitterIconWrapper.className = "twitter-container";

  const twitIcon = new Image();
  twitIcon.classList.add("twitIcon");
  twitIcon.src = twitter;
  twitIcon.setAttribute("alt", "twitter icon");
  twitIcon.setAttribute("width", "50");
  twitIcon.setAttribute("height", "50");

  twitterIconWrapper.appendChild(twitIcon);

  author.appendChild(authorSummary);
  author.appendChild(authorPhotoContainer);
  authorSummary.appendChild(authorName);
  authorSummary.appendChild(authorSummaryBody);
  authorSummaryBody.appendChild(authorSummaryPara1);
  authorSummaryBody.appendChild(authorSummaryPara2);

  authorSummaryBody.appendChild(authorSummaryPara3);

  authorSummary.appendChild(twitterIconWrapper);

  return author;
}

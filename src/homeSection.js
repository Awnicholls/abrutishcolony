import bookCover from "./book.webp";

export default function createHomeSection() {
  const home = document.createElement("section");
  home.setAttribute("id", "home");

  const bookCoverContainer = document.createElement("div");
  bookCoverContainer.classList.add("cover-container");

  const bookCoverImage = new Image();
  bookCoverImage.src = bookCover;
  bookCoverImage.classList.add("book-cover");
  bookCoverContainer.appendChild(bookCoverImage);
  bookCoverImage.setAttribute(
    "alt",
    "A Brutish Colony cover, a painting of a woman"
  );
  bookCoverImage.setAttribute("height", "1124");
  bookCoverImage.setAttribute("width", "750");

  const bookSummary = document.createElement("div");
  bookSummary.classList.add("book-summary");

  const bookSummaryTitle = document.createElement("h1");
  bookSummaryTitle.textContent = "A Brutish Colony:";

  const bookSummaryBody = document.createElement("h2");
  const bookSummaryPara1 = document.createElement("p");
  const bookSummaryPara2 = document.createElement("p");
  const bookSummaryPara3 = document.createElement("p");

  bookSummaryPara1.textContent =
    "A Brutish Colony is about the largely unknown story of the British presence in pre-Independence Senegal. The British were initially lured to the region by the prospect of trade in gold. After brief periods of rule of the slaving and trading islands of Gor\u00E9e and Saint-Louis, in 1765 Senegambia became the very first British Crown colony in Africa.";

  bookSummaryPara2.textContent =
    "Britain\u2019s foothold on the coast of Senegal was rarely more than precarious, its early administrations characterised by corruption, drunkenness and violence, weakened further by disease and forever vulnerable to attacks by France. The brutality of one of the British Governors was to become legendary with thousands of people watching his eventual hanging. The book covers Britain\u2019s final administration of Saint-Louis and Gor\u00E9e at the beginning of the 19th century, a period during which governance improved and the slave trade was outlawed. These islands were then restored to France, but tragedy and horror followed the shipwreck of a frigate carrying French administrators and troops, as immortalised in Gericault\u2019s Le Radeau de la M\u00E9duse.";

  bookSummaryPara3.textContent =
    "The book also tells the story of how the borders of The Gambia came to be drawn. After a brief look at the history of Britain\u2019s diplomatic representation in colonial Senegal, the book ends with the extraordinary story of Operation Menace, a failed attempt in 1940 to persuade Vichy forces in Senegal to declare for General de Gaulle which ended in Frenchmen killing Frenchmen and a British naval bombardment of Dakar.";

  home.appendChild(bookCoverContainer);
  home.appendChild(bookSummary);
  bookSummary.appendChild(bookSummaryTitle);
  bookSummary.appendChild(bookSummaryBody);
  bookSummaryBody.appendChild(bookSummaryPara1);
  bookSummaryBody.appendChild(bookSummaryPara2);
  bookSummaryBody.appendChild(bookSummaryPara3);
  return home;
}

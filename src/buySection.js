import troubadorLogo from './troubador.png'
import waterstonesLogo from './waterstones.png'
import amazonLogo from './amazon.png'
import bookdepositoryLogo from './bookdepository.png'

export default function createBuySection() {
  const buy = document.createElement("section");
  buy.setAttribute("id", "buy");

  const buySummary = document.createElement("div");
  buySummary.classList.add("buy-summary");

  const buyHeader = document.createElement("h1");
  buyHeader.classList.add("buy-header");

  buyHeader.textContent = "Where to Buy: ";

  const buyListBody = document.createElement("h2");

  const buyItems = [
    {
      href: "https://www.troubador.co.uk/bookshop/history-politics-society/a-brutish-colony/",
      src: troubadorLogo,
      alt: "Troubador Logo",
      class: "troubador"
    },
    {
      href: "https://www.bookdepository.com/book/9781800464100",
      src: bookdepositoryLogo,
      alt: "Bookdepository Logo",
      class: "bookdepository"
    },
    {
      href: "https://www.amazon.co.uk/dp/180046410X/ref=cm_sw_r_tw_dp_P200YR4V9GEAWZ28EQK5 ",
      src: amazonLogo,
      alt: "Amazon Logo",
      class: "amazon"
    },
    {
      href: "https://www.waterstones.com/book/a-brutish-colony/john-marshall/9781800464100",
      src: waterstonesLogo,
      alt: "Waterstones Logo",
      class: "waterstones"
    },
  ];

  var buyList = document.createElement("ul"),
    buyItem,
    buyLink;

  buyList.classList.add("buy-list");
  buyList.setAttribute("id", "buyList");

  // Cycle over each buy link
  for (var i = 0; i < buyItems.length; i++) {
    // Create a fresh list item, and anchor
    buyItem = document.createElement("li");
    const buyLogo = new Image();
    buyLink = document.createElement("a");

    // Set properties on anchor
    buyLink.href = buyItems[i].href;
    buyLogo.src = buyItems[i].src;
    buyLogo.alt = buyItems[i].alt;
    buyItem.classList.add("buy-item");
    buyLink.classList.add("buy-link");
    buyLogo.classList.add("buy-logo")
    buyLogo.classList.add(buyItems[i].class)

    // Add anchor to list item, and list item to list
    buyItem.appendChild(buyLink);
    buyLink.appendChild(buyLogo);
    buyList.appendChild(buyItem);
  }

  buy.appendChild(buySummary);
  buySummary.appendChild(buyHeader);
  buySummary.appendChild(buyListBody);
  buyListBody.appendChild(buyList);

  return buy;
}

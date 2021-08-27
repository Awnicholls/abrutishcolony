import _ from "lodash";
import "./style.css";
import createHeader from "./header.js";
import createHomeSection from "./homeSection.js";
import createAuthorSection from "./authorSection.js";
import createBuySection from "./buySection.js";
import createContactSection from "./contactSection.js";
import createFooter from "./footer.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function createMainContent() {
  const mainContent = document.createElement("main");
  mainContent.classList.add("main-content");

  mainContent.appendChild(createHomeSection());
  mainContent.appendChild(createAuthorSection());
  mainContent.appendChild(createBuySection());
  mainContent.appendChild(createContactSection());

  return mainContent;
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainContent());
document.body.appendChild(createFooter());

const navIcon = document.getElementById("navIcon");
navIcon.addEventListener("click", navIconClick);

function navIconClick() {
  console.log("click");
  const x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

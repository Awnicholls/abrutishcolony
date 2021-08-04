import _ from "lodash";
import "./style.css";
import createHeader from "./header.js";
import createHomeSection  from "./homeSection.js";
import createAuthorSection  from "./authorSection.js";
import createContactSection  from "./contactSection.js";


if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function createMainContent() {
  const mainContent = document.createElement("main");
  mainContent.classList.add("main-content");

  mainContent.appendChild(createHomeSection());
  mainContent.appendChild(createAuthorSection());
  mainContent.appendChild(createContactSection());

  return mainContent;
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.body.appendChild(createHeader());
document.body.appendChild(createMainContent());

import _ from "lodash";
import "./style.css";
import createHeader from "./header.js";
import createHomeSection  from "./homeSection.js";
import createAuthorSection  from "./authorSection.js";
import createContactSection  from "./contactSection.js";
import "./script.js";


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




document.body.appendChild(createHeader());
document.body.appendChild(createMainContent());

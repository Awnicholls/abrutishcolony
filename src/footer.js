export default function createFooter() {

        const footer = document.createElement("footer");
        footer.classList.add("footer");
      
        const createdBy = document.createElement("a");
        createdBy.textContent = "Created by Alex Nicholls";
        createdBy.href = "https://github.com/awnicholls";

        footer.appendChild(createdBy);
      
        return footer;


}
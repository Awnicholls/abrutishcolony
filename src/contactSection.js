export default function createContactSection() {
  const contact = document.createElement("section");
  contact.setAttribute("id", "contact");

  const contactHeader = document.createElement("div");
  contactHeader.classList.add("contact-header");

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact: ";

  const formContainer = document.createElement("form");
  formContainer.setAttribute("name", "contact");
  formContainer.setAttribute("method", "post");

  const formInput = document.createElement("input");
  formInput.setAttribute("type", "hidden");
  formInput.setAttribute("name", "form-name");
  formInput.setAttribute("value", "contact");

  const pName = document.createElement("p");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Your Name: ";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  const pEmail = document.createElement("p");
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Your Email: ";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");

  const pMessage = document.createElement("p");
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message: ";
  const messageTextarea = document.createElement("textarea");
  messageTextarea.setAttribute("name", "message");

  const pButton = document.createElement("p");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  contact.appendChild(contactHeader);
  contact.appendChild(formContainer);
  contactHeader.appendChild(contactTitle);
  formContainer.appendChild(formInput);
  formContainer.appendChild(pName);
  formContainer.appendChild(pEmail);
  formContainer.appendChild(pMessage);
  formContainer.appendChild(pButton);

  nameLabel.appendChild(nameInput);
  pName.appendChild(nameLabel);
  pEmail.appendChild(emailLabel);
  emailLabel.appendChild(emailInput);
  pMessage.appendChild(messageLabel);
  messageLabel.appendChild(messageTextarea);
  pButton.appendChild(submitButton);

  return contact;
}

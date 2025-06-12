import "./contact.css";

function createContactForm() {
  const contactContainer = createDiv("contact-container");

  // Header section
  const headerContainer = createDiv("header-container");

  const mainHeading = createElement("h1", "CONTACT US", "main-heading");
  const subHeading = createParagraph(
    "Send us a message and we'll get back to you as soon as possible. Looking forward to hearing from you.",
    "sub-heading"
  );

  headerContainer.appendChild(mainHeading);
  headerContainer.appendChild(subHeading);

  // Form section
  const formContainer = createDiv("form-container");
  const contactForm = createElement("form", "", "contact-form");

  // Name field
  const nameField = createFormField("name", "Name", "text", "NAME", true);

  // Email field
  const emailField = createFormField("email", "Email", "email", "EMAIL", true);

  // Phone number field
  const phoneField = createFormField(
    "phone",
    "Phone Number - Optional",
    "tel",
    "PHONE NUMBER",
    false
  );

  // Location dropdown
  const locationField = createSelectField(
    "location",
    "Location",
    "LOCATION",
    [
      "Select Location",
      "Lagos",
      "Abuja",
      "Ibadan",
      "Port Harcourt",
      "Kano",
      "Other",
    ],
    true
  );

  // Subject dropdown
  const subjectField = createSelectField(
    "subject",
    "What are you getting in touch about?",
    "WHAT ARE YOU GETTING IN TOUCH ABOUT?",
    [
      "Select a topic",
      "General Inquiry",
      "Support Request",
      "Business Partnership",
      "Feedback",
      "Complaint",
      "Other",
    ],
    true
  );

  // Message field
  const messageField = createTextAreaField(
    "message",
    "Your Message",
    "YOUR MESSAGE",
    true
  );

  // Submit button
  const submitButton = createElement("button", "SEND", "submit-btn");
  submitButton.type = "submit";

  // Add form validation and submission
  contactForm.addEventListener("submit", handleFormSubmit);

  // Append all fields to form
  contactForm.appendChild(nameField);
  contactForm.appendChild(emailField);
  contactForm.appendChild(phoneField);
  contactForm.appendChild(locationField);
  contactForm.appendChild(subjectField);
  contactForm.appendChild(messageField);
  contactForm.appendChild(submitButton);

  formContainer.appendChild(contactForm);

  // Append everything to main container
  contactContainer.appendChild(headerContainer);
  contactContainer.appendChild(formContainer);

  return contactContainer;
}

function createFormField(name, labelText, type, placeholder, required = false) {
  const fieldContainer = createDiv("field-container");

  const label = createElement("label", labelText, "field-label");
  if (required) {
    const requiredSpan = createElement("span", " *Required", "required-text");
    label.appendChild(requiredSpan);
  }
  label.setAttribute("for", name);

  const input = createElement("input", "", "form-input");
  input.type = type;
  input.name = name;
  input.id = name;
  input.placeholder = placeholder;
  if (required) input.required = true;

  fieldContainer.appendChild(label);
  fieldContainer.appendChild(input);

  return fieldContainer;
}

function createSelectField(
  name,
  labelText,
  placeholder,
  options,
  required = false
) {
  const fieldContainer = createDiv("field-container");

  const label = createElement("label", labelText, "field-label");
  if (required) {
    const requiredSpan = createElement("span", " *Required", "required-text");
    label.appendChild(requiredSpan);
  }
  label.setAttribute("for", name);

  const selectWrapper = createDiv("select-wrapper");
  const select = createElement("select", "", "form-select");
  select.name = name;
  select.id = name;
  if (required) select.required = true;

  // Add default option
  const defaultOption = createElement("option", placeholder);
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  // Add other options
  options.slice(1).forEach((optionText) => {
    const option = createElement("option", optionText);
    option.value = optionText.toLowerCase().replace(/\s+/g, "-");
    select.appendChild(option);
  });

  selectWrapper.appendChild(select);

  fieldContainer.appendChild(label);
  fieldContainer.appendChild(selectWrapper);

  return fieldContainer;
}

function createTextAreaField(name, labelText, placeholder, required = false) {
  const fieldContainer = createDiv("field-container");

  const label = createElement("label", labelText, "field-label");
  if (required) {
    const requiredSpan = createElement("span", " *Required", "required-text");
    label.appendChild(requiredSpan);
  }
  label.setAttribute("for", name);

  const textarea = createElement("textarea", "", "form-textarea");
  textarea.name = name;
  textarea.id = name;
  textarea.placeholder = placeholder;
  textarea.rows = 6;
  if (required) textarea.required = true;

  fieldContainer.appendChild(label);
  fieldContainer.appendChild(textarea);

  return fieldContainer;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  console.log("Form submitted:", data);

  // Show success message
  alert("Message sent! We'll get back to you as soon as possible.");

  // Reset form
  event.target.reset();
}

function createDiv(...classNames) {
  const div = document.createElement("div");
  div.classList.add(...classNames);
  return div;
}

function createElement(tag, text = "", ...classNames) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (classNames.length) element.classList.add(...classNames);
  return element;
}

function createParagraph(text = "", ...classNames) {
  const p = document.createElement("p");
  p.textContent = text;
  if (classNames.length) p.classList.add(...classNames);
  return p;
}

function loadContact() {
  return createContactForm();
}

export default loadContact;

import "./about.css";

function createAboutUs() {
  const aboutContainer = createDiv("about-container");

  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About Us";

  const firstParaContainer = createDiv("para-container");
  const firstPara = createParagraph();
  firstPara.textContent =
    "Welcome to Yakoyo, your home for authentic Yorùbá cuisine made with love and tradition. Nestled in the heart of our community, we are proud to serve dishes passed down through generations — from rich, smoky amala with gbẹ̀gìrì and ewédú, to spicy ofada rice with ayamase stew, and mouthwatering asun straight from the grill.";

  const firstAboutImageContainer = createDiv("about-image", "one");

  firstParaContainer.appendChild(firstPara);
  firstParaContainer.appendChild(firstAboutImageContainer);

  const secondParaContainer = createDiv("para-container");
  const secondPara = createParagraph();
  secondPara.textContent =
    "At Yakoyo, we believe food is more than a meal — it's a celebration of culture, family, and flavor. Our ingredients are fresh, our spices are bold, and every plate tells a story of Yorùbá heritage. Whether you're dining in, picking up, or ordering online, we invite you to experience the taste of tradition.";

  const secondAboutImageContainer = createDiv("about-image", "two");

  secondParaContainer.appendChild(secondPara);
  secondParaContainer.appendChild(secondAboutImageContainer);

  secondParaContainer.appendChild(secondAboutImageContainer);
  secondParaContainer.appendChild(secondPara);

  const imageExtras = createDiv("image-extras-container");

  const firstImageExtras = createDiv("image-extras", "three");
  const secondImageExtras = createDiv("image-extras", "four");
  const thirdImageExtras = createDiv("image-extras", "five");
  const fourthImageExtras = createDiv("image-extras", "six");

  imageExtras.appendChild(firstImageExtras);
  imageExtras.appendChild(secondImageExtras);
  imageExtras.appendChild(thirdImageExtras);
  imageExtras.appendChild(fourthImageExtras);

  const lastPara = createParagraph("Thank You For Dining With Us");

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(firstParaContainer);
  aboutContainer.appendChild(secondParaContainer);
  aboutContainer.appendChild(imageExtras);
  aboutContainer.appendChild(lastPara);

  return aboutContainer;
}

function createDiv(...classNames) {
  const div = document.createElement("div");
  div.classList.add(...classNames);
  return div;
}

function createParagraph(text = "", className = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.classList.add(className);
  return p;
}

function loadAbout() {
  return createAboutUs();
}

export default loadAbout;

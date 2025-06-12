import "./home.css";
import poundedYam from "./home-images/pounded-yam.png";

import order from "./home-images/order.svg";
import truck from "./home-images/truck.svg";
import quality from "./home-images/quality.svg";
import pinterest from "./home-images/pinterest.svg";
import instagram from "./home-images/instagram.svg";
import facebook from "./home-images/facebook.svg";

function createFirstDiv() {
  const homeContainer = document.createElement("div");

  const firstDiv = createDiv("first-div");

  const fiveDiv = createDiv("five-div");

  const experience = createDiv("experience");

  const experiencePara = createParagraph();
  experiencePara.textContent = "it's not just Food, It's an Experience.";

  const experienceButton = createDiv("experience-button");
  const viewMenu = createButton("view Menu");
  const bookTable = createButton("Book A Table");
  experienceButton.appendChild(viewMenu);
  experienceButton.appendChild(bookTable);

  const experienceReviews = createDiv("review");
  const reviewPara = createParagraph("Reviews");

  const reviewImageContainer = createDiv("review-image-container");

  const reviewImage = [
    createDiv(),
    createDiv(),
    createDiv(),
    createDiv("more"),
  ];

  reviewImage.forEach((div) => {
    if (div.classList.contains("more")) {
      div.textContent = "45+";
    } else {
      div.textContent = "K";
    }
    reviewImageContainer.appendChild(div);
  });

  const rating = createStarRating(5);

  experienceReviews.appendChild(reviewPara);
  experienceReviews.appendChild(reviewImageContainer);
  experienceReviews.appendChild(rating);

  const imageContainer = createDiv("image-container");

  const image = document.createElement("img");
  image.src = poundedYam;

  experience.appendChild(experiencePara);
  experience.appendChild(experienceButton);
  experience.appendChild(experienceReviews);

  imageContainer.appendChild(image);

  firstDiv.appendChild(experience);
  firstDiv.appendChild(imageContainer);
  return firstDiv;
}

function createSecondDiv() {
  const secondDiv = createDiv("second-div");

  const heading = document.createElement("h2");
  heading.textContent = "Why Yakoyo";
  const reasonContainer = createDiv("reason-container");

  const firstReason = createDiv();
  const firstReasonPara = createParagraph();
  const orderSvg = document.createElement("img");
  orderSvg.src = order;
  orderSvg.alt = "task-icon";
  orderSvg.classList.add("svg-icon");
  orderSvg.width = 80;
  orderSvg.height = 80;
  firstReasonPara.textContent = "Easy To Order";
  firstReason.appendChild(orderSvg);
  firstReason.appendChild(firstReasonPara);

  const secondReason = createDiv();
  const secondReasonPara = createParagraph();
  const truckSvg = document.createElement("img");
  truckSvg.src = truck;
  truckSvg.alt = "task-icon";
  truckSvg.classList.add("svg-icon");
  truckSvg.width = 80;
  truckSvg.height = 80;
  secondReasonPara.textContent = "Fastest Delivery";
  secondReason.appendChild(truckSvg);
  secondReason.appendChild(secondReasonPara);

  const thirdReason = createDiv();
  const thirdReasonPara = createParagraph();
  const qualitySvg = document.createElement("img");
  qualitySvg.src = quality;
  qualitySvg.alt = "task-icon";
  qualitySvg.classList.add("svg-icon");
  qualitySvg.width = 90;
  qualitySvg.height = 90;
  thirdReasonPara.textContent = "Best Quality";
  thirdReason.appendChild(qualitySvg);
  thirdReason.appendChild(thirdReasonPara);

  reasonContainer.appendChild(firstReason);
  reasonContainer.appendChild(secondReason);
  reasonContainer.appendChild(thirdReason);

  secondDiv.appendChild(heading);
  secondDiv.appendChild(reasonContainer);
  return secondDiv;
}

function createThirdDiv() {
  const thirdDiv = createDiv("third-div");

  const heading = document.createElement("h2");
  heading.textContent = "Our Popular Menu";

  const para = createParagraph();
  para.textContent = "Made with premium ingredients";

  const productContainer = createDiv("product-container");

  const firstContainer = createDiv("product");
  const firstProductImageContainer = createDiv(
    "product-image-container",
    "pounded-yam"
  );

  const firstProductNameContainer = createDiv();

  const firstProduct = createParagraph("Pounded Yam");
  const firstIngredient = createParagraph("With Egusi");
  const firstPrice = createParagraph("$15.00");
  firstProductNameContainer.appendChild(firstProduct);
  firstProductNameContainer.appendChild(firstIngredient);
  firstProductNameContainer.appendChild(firstPrice);

  firstContainer.appendChild(firstProductImageContainer);
  firstContainer.appendChild(firstProductNameContainer);

  const secondContainer = createDiv("product");
  const secondProductImageContainer = createDiv(
    "product-image-container",
    "jollof"
  );
  const secondProductNameContainer = createDiv();

  const secondProduct = createParagraph("Jollof Rice");
  const secondIngredient = createParagraph("With Coleslaw");
  const secondPrice = createParagraph("$11.00");
  secondProductNameContainer.appendChild(secondProduct);
  secondProductNameContainer.appendChild(secondIngredient);
  secondProductNameContainer.appendChild(secondPrice);

  secondContainer.appendChild(secondProductImageContainer);
  secondContainer.appendChild(secondProductNameContainer);

  const thirdContainer = createDiv("product");
  const thirdProductImageContainer = createDiv(
    "product-image-container",
    "amala"
  );
  const thirdProductNameContainer = createDiv();

  const thirdProduct = createParagraph("Amala");
  const thirdIngredient = createParagraph("With Ewedu");
  const thirdPrice = createParagraph("$13.00");
  thirdProductNameContainer.appendChild(thirdProduct);
  thirdProductNameContainer.appendChild(thirdIngredient);
  thirdProductNameContainer.appendChild(thirdPrice);

  thirdContainer.appendChild(thirdProductImageContainer);
  thirdContainer.appendChild(thirdProductNameContainer);

  const fourthContainer = createDiv("product");
  const fourthProductImageContainer = createDiv(
    "product-image-container",
    "beans"
  );
  const fourthProductNameContainer = createDiv();

  const fourthProduct = createParagraph("Beans");
  const fourthIngredient = createParagraph("With Bread");
  const fourthPrice = createParagraph("$7.00");
  fourthProductNameContainer.appendChild(fourthProduct);
  fourthProductNameContainer.appendChild(fourthIngredient);
  fourthProductNameContainer.appendChild(fourthPrice);

  fourthContainer.appendChild(fourthProductImageContainer);
  fourthContainer.appendChild(fourthProductNameContainer);

  const loadMenuContainer = createDiv("load-menu-container");
  const loadMenu = createButton("Load more menu");
  loadMenu.classList.add("menu-button");
  loadMenu.classList.add("button");

  loadMenuContainer.appendChild(loadMenu);
  productContainer.appendChild(firstContainer);
  productContainer.appendChild(secondContainer);
  productContainer.appendChild(thirdContainer);
  productContainer.appendChild(fourthContainer);

  thirdDiv.appendChild(heading);
  thirdDiv.appendChild(para);
  thirdDiv.appendChild(productContainer);
  thirdDiv.appendChild(loadMenuContainer);

  return thirdDiv;
}

function footer() {
  const footerContainer = createDiv("footer-container");
  const footer = createDiv("footer");

  const firstDiv = createDiv("top");
  const heading = document.createElement("h2");
  heading.textContent = "Yakoyo";
  const nav = document.createElement("nav");
  const socialContainer = createDiv("social");

  const home = createButton("Home");
  home.classList.add("red");
  home.classList.add("button");
  home.classList.add("home-button");
  const menu = createButton("Menu");
  menu.classList.add("button");
  menu.classList.add("menu-button");
  const about = createButton("About Us");
  about.classList.add("button");
  about.classList.add("about-button");
  const contact = createButton("Contact");
  contact.classList.add("button");
  contact.classList.add("contact-button");

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);
  nav.appendChild(contact);

  const pinterestSvg = document.createElement("img");
  pinterestSvg.src = pinterest;
  pinterestSvg.alt = "task-icon";
  pinterestSvg.classList.add("svg-icon");
  pinterestSvg.width = 30;
  pinterestSvg.height = 30;

  const instagramSvg = document.createElement("img");
  instagramSvg.src = instagram;
  instagramSvg.alt = "task-icon";
  instagramSvg.classList.add("svg-icon");
  instagramSvg.width = 30;
  instagramSvg.height = 30;

  const facebookSvg = document.createElement("img");
  facebookSvg.src = facebook;
  facebookSvg.alt = "task-icon";
  facebookSvg.classList.add("svg-icon");
  facebookSvg.width = 45;
  facebookSvg.height = 45;

  socialContainer.appendChild(pinterestSvg);
  socialContainer.appendChild(instagramSvg);
  socialContainer.appendChild(facebookSvg);

  firstDiv.appendChild(heading);
  firstDiv.appendChild(nav);
  firstDiv.appendChild(socialContainer);

  const secondDiv = createDiv("bottom");
  const secondDivPara = createParagraph("@copyright2025foody");

  secondDiv.appendChild(secondDivPara);

  footer.appendChild(firstDiv);
  footer.appendChild(secondDiv);

  footerContainer.appendChild(footer);

  return footerContainer;
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

function createButton(label, className = "") {
  const button = document.createElement("button");
  button.textContent = label;
  if (className) button.classList.add(className);
  return button;
}

function createStarRating(rating = 4) {
  const container = document.createElement("div");
  container.classList.add("star-rating");

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = i <= rating ? "&#9733;" : "&#9734;";
    container.appendChild(star);
  }

  return container;
}

function loadHome() {
  const wrapper = document.createElement("div");
  wrapper.appendChild(createFirstDiv());
  wrapper.appendChild(createSecondDiv());
  wrapper.appendChild(createThirdDiv());
  return wrapper;
}

export default loadHome;
export { footer };

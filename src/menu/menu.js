import "./menu.css";

function CreatespecialDish() {
  const container = createDiv("special-container");
  const heading = document.createElement("h2");
  heading.textContent = "Today's Special Dish";

  const specialDish = createDiv("special");
  const imageContainer = createDiv("image-container", "menu-image", "yam");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Yam pottage with vegetables");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$10.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  specialDish.appendChild(imageContainer);
  specialDish.appendChild(nameContainer);

  container.appendChild(heading);
  container.appendChild(specialDish);

  return container;
}

function createFirstFood() {
  const container = createDiv();
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "amala");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Amala with ewedu and gbegiri");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$13.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createSecondFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv(
    "image-container",
    "menu-image",
    "pounded-yam"
  );
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Pounded yam with egusi");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$15.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createThirdFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "jollof");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Jollof rice with coleslaw");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$11.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createFourthFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "beans");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Beans with agege bread");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$7.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createFifthFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "ofada");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Ofada Rice with Ayamase");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$13.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createSixthFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "asun");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Asun (Spicy Grilled Goat Meat)");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$10.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createSeventhFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "obe");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Obe Ẹja Tútù (Cold Fish Pepper Soup)");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$11.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createEightFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "eba");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Ẹ̀bà with Ẹ̀fọ́ Riro");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$8.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createNinthFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv("image-container", "menu-image", "ogi");
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Ogi with Àkàrà / Moin-Moin");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$5.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createTenthFood() {
  const container = createDiv("special-container");
  const dish = createDiv("special", "radius");
  const imageContainer = createDiv(
    "image-container",
    "menu-image",
    "peppered-chicken"
  );
  const nameContainer = createDiv("name-container");

  const name = createParagraph("Peppered Chicken");

  const priceContainer = createDiv("price-container");
  const price = createParagraph("$12.00");
  const addButton = createButton("+");
  priceContainer.appendChild(price);
  priceContainer.appendChild(addButton);

  nameContainer.appendChild(name);
  nameContainer.appendChild(priceContainer);

  dish.appendChild(imageContainer);
  dish.appendChild(nameContainer);

  container.appendChild(dish);

  return container;
}

function createFoodContainer() {
  const menuContainer = createDiv("menu-container");
  const heading = document.createElement("h2");
  heading.textContent = "Menu";

  const menu = createDiv("food-container");

  const para = createParagraph("Thank You");

  menu.appendChild(createFirstFood());
  menu.appendChild(createSecondFood());
  menu.appendChild(createThirdFood());
  menu.appendChild(createFourthFood());
  menu.appendChild(createFifthFood());
  menu.appendChild(createSixthFood());
  menu.appendChild(createSeventhFood());
  menu.appendChild(createEightFood());
  menu.appendChild(createNinthFood());
  menu.appendChild(createTenthFood());

  menuContainer.appendChild(heading);
  menuContainer.appendChild(menu);
  menuContainer.appendChild(para);

  return menuContainer;
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

function loadMenu() {
  const wrapper = createDiv();
  wrapper.appendChild(CreatespecialDish());
  wrapper.appendChild(createFoodContainer());
  return wrapper;
}

export default loadMenu;

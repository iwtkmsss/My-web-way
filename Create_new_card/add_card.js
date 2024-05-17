document.getElementById("generate-btn").onclick = generateCard;

function createCard() {
    const newCard = document.createElement("div");
    newCard.className = "card";
    return newCard;
}

function createHeader() {
    const h1 = document.createElement("h1");
    h1.textContent = "HELLO WORLD";
    return h1;
}

function createList() {
    const ol = document.createElement("ol");

    const first_li = document.createElement("li");
    const second_li = document.createElement("li");

    first_li.textContent = "This is a sample text.";
    second_li.textContent = "More samples text goes here.";

    ol.appendChild(first_li);
    ol.appendChild(second_li);

    return ol;
}

function createButton() {
    const div_button = document.createElement("div");
    div_button.className = "button";

    const btn = document.createElement("div");
    btn.className = "btn";

    const lineTop = document.createElement("span");
    lineTop.className = "button__line button__line--top";
    const lineRight = document.createElement("span");
    lineRight.className = "button__line button__line--right";
    const lineBottom = document.createElement("span");
    lineBottom.className = "button__line button__line--bottom";
    const lineLeft = document.createElement("span");
    lineLeft.className = "button__line button__line--left";

    btn.appendChild(lineTop);
    btn.appendChild(lineRight);
    btn.appendChild(lineBottom);
    btn.appendChild(lineLeft);

    const button = document.createElement("button");
    button.className = "generate-btn";
    button.textContent = "generate new card";
    button.onclick = generateCard;

    btn.appendChild(button);
    div_button.appendChild(btn);

    return div_button;
}

function generateCard() {
    const newCard = createCard();
    newCard.appendChild(createHeader());
    newCard.appendChild(createList());
    newCard.appendChild(createButton());

    const targetElement = document.getElementById("cards");
    targetElement.appendChild(newCard);
}

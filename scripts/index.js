const cardsContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

const removeCard = (cardElement) => {
  cardElement.remove();
};

const createCard = (cardName, cardImage, removeCard) => {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  cardElement.querySelector(".card__image").src = cardImage;
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(".card__image").alt = `Фотография места: ${cardName}`;
  const deleteCard = cardElement.querySelector(".card__delete-button");
  deleteCard.addEventListener("click", () => {
    removeCard(cardElement);
  });
  return cardElement;
};

const showCards = () => {
  initialCards.forEach((item) => {
    cardsContainer.append(createCard(item.name, item.link, removeCard));
  });
}

showCards();

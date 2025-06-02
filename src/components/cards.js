import { openModal } from "./modal";

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];
const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");

function createCard(card, deleteCard, isLiked) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.alt;
  cardElement.querySelector(".card__title").textContent = card.name;

  if (isLiked) likeButton.classList.add("card__like-button_is-active");
  else likeButton.classList.remove("card__like-button_is-active");

  likeButton.addEventListener("click", () => setLikeCard(cardElement));
  cardImage.addEventListener("click", () =>
    openPopupImage(card.alt, card.link)
  );

  const removeButton = cardElement.querySelector(".card__delete-button");
  removeButton.addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

export function renderCards() {
  initialCards.forEach((card) => {
    cardsContainer.append(createCard(card, deleteCard));
  });
}

export function addNewCard(card) {
  cardsContainer.insertBefore(
    createCard(card, deleteCard),
    cardsContainer.firstChild
  );
}

function setLikeCard(cardElement) {
  const likeButton = cardElement.querySelector(".card__like-button");
  if (likeButton.classList.contains("card__like-button_is-active"))
    likeButton.classList.remove("card__like-button_is-active");
  else likeButton.classList.add("card__like-button_is-active");
}

function openPopupImage(alt, src) {
  const popupImageForm = document.querySelector(".popup_type_image");
  popupImageForm.querySelector(".popup__image").src = src;
  popupImageForm.querySelector(".popup__caption").textContent = alt;

  openModal(popupImageForm);
}
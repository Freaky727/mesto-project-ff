import { renderCards } from './components/cards.js';
import { openModal } from './components/modal.js';
import './pages/index.css';

const popupEditProfile = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const addCardButton = document.querySelector(".profile__add-button");
const newCard = document.querySelector(".popup_type_new-card");

renderCards();

popupEditProfile.addEventListener("click", () => openModal(popupEdit));
addCardButton.addEventListener("click", () => openModal(newCard));

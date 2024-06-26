export default class Card {
  constructor({ cardData, handleCardClick }, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  //=================Event Handlers==========================\\
  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  //=================Event Listeners==========================\\
  _setEvenetListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ link: this._link, name: this._name });
    });
  }

  //=============Generate Card==========================\\
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    //get the card template
    this._cardElement = this._getTemplate();
    this._deleteButton = this._cardElement.querySelector(".card__delete-icon");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._cardImage = this._cardElement.querySelector(".card__image");

    //add data
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;

    //set event listeners
    this._setEvenetListeners();

    //return the card
    return this._cardElement;
  }
}

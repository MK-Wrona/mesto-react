import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />
        <Footer />
      </div>

      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input 
            minLength="2" 
            maxLength="40" 
            type="text" 
            className="pop-up__input pop-up__input_name_name" 
            name="name" 
            id="input-name" 
            placeholder="Nobara" 
            defaultValue="Nobara" 
            required />
          <span 
            className='pop-up__form-error pop-up__form-error_active' 
            id='input-name-error' />
          <input 
            minLength="2" 
            maxLength="200" 
            type="text" 
            className="pop-up__input pop-up__input_name_prof" 
            name="prof" 
            placeholder="Station Observer" 
            id="profession-input" 
            defaultValue="Station Observer" 
            required />
          <span 
            className='pop-up__form-error pop-up__form-error_active' 
            id='input-prof-error' />
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            defaultValue="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input 
            minLength="1" 
            maxLength="30" 
            type="text" 
            placeholder="Название" 
            className="pop-up__input pop-up__input_name_title" 
            name="title" 
            id="input-title" 
            required />
          <span 
            className='pop-up__form-error' 
            id='input-title-error'>Вы пропустили это поле.</span>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="pop-up__input pop-up__input_name_link" 
            name="link" 
            id="input-link" 
            required />
          <span 
            className='pop-up__form-error' 
            id='input-link-error'>Вы пропустили это поле.</span>
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            value="Создать" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        name="avatar"
        title="Обновить аватар"
        children=""
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="pop-up__input pop-up__input-avatar" 
            name="link" 
            id="link-input-avatar" 
            required />
          <span 
            className='pop-up__form-error' 
            id='link-input-avatar-error'>Заполните это поле.</span>
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            value="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} />
    </>
  );
}

export default App;
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

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
    
    <div className="mesto">
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
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          {/*для читаемости отформатировано в столбик*/}
          <div className="pop-up__input-box">
          <input minLength="2" 
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
            </div>
            <div className="pop-up__input-box">
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
            id='input-prof-error' /></div>
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            defaultValue="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <div className="pop-up__input-box">
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
            id='input-title-error'></span>
            </div>
            <div className="pop-up__input-box">
          <input 
            type="url" 
            placeholder="Ссылка на картинку" 
            className="pop-up__input pop-up__input_name_link" 
            name="link" 
            id="input-link" 
            required />
          <span 
            className='pop-up__form-error' 
            id='input-link-error'></span>
            </div>
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            value="Создать" 
            name="submit" />
        </PopupWithForm>
      <PopupWithForm 
        title="Обновить аватар"
        name="avatar"
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
            id='link-input-avatar-error'></span>
          <input 
            type="submit" 
            className="pop-up__submit-button" 
            value="Сохранить" 
            name="submit" />
        </PopupWithForm>
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} />
        </div>
    
  );
}

export default App;
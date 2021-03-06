import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarInput.current.value
    });
  } 


  return (
    <PopupWithForm 
        title="Обновить аватар"
        name="avatar"
        children=""
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}>
          <input 
            ref={avatarInput}
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
  );
}

export default EditAvatarPopup;
function PopupWithForm({name, title, children, isOpen, onClose}) {

    return (
        <div className={`pop-up pop-up_${name} ${isOpen ? 'pop-up_opened' : ''}`}>
          <div className="pop-up__window">
            <h3 className="pop-up__title">{title}</h3>
            <form className="popup__form" name={name} noValidate>
              {children}
            </form>
            <button type="button" className="pop-up__close-button" onClick={onClose} />
          </div>
        </div>
    );
  }
  
  export default PopupWithForm;
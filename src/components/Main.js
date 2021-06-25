import React from 'react';
import Card from './Card';
import editAvatarImage from '../images/editAvatarImage.svg';
import Api from '../utiles/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  React.useEffect(() => {
    Api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    });

    Api.getInitialCards().then(cardList => {
      setCards(cardList);
    })
  }, []);

  /* {Данные пользователя} */
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

    /* {Карточки} */
  const [cards, setCards] = React.useState([]);

  return (
    <main className="main">
      <section className="profile">
          <div className="profile__info">
            <div className="profile__icon-container">
              <img src={`${userAvatar}`} alt="Фото Профиля" className="profile__icon" />
              <img src={editAvatarImage} alt="Иконка карандаша" className="profile__icon-edit" onClick={onEditAvatar}/>
            </div>
            <div className="profile__wrap-text">
              <div className="profile__wrap">
                <h1 className="profile__name">{userName}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile} />
              </div>
              <p className="profile__prof">{userDescription}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      
        <ul className="grid">
          {cards.map((card) => <Card  key={card._id} card={card} onCardClick={onCardClick} />)}
        </ul>
    </main>
    
  );
}

export default Main;
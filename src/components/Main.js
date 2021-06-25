import React from 'react';
import Card from './Card';
import editAvatarImage from '../images/editAvatarImage.svg';
import api from '../utiles/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserAvatar(userData.avatar)
      setUserDescription(userData.about)
    })
    .catch(console.log("Упс, похоже, возникла ошибка."))

    api.getInitialCards().then(cardList => {
      setCards(cardList);
    })
  }, []);
   /* {хук для карточек} */
   const [cards, setCards] = React.useState([]);

  /* {данные юзера} */
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
 

   

  return (
    <main className="main">
      <section className="profile">
          <div className="profile__info">
            <div className="profile__icon-container">
              {/*onEditAvatar и для авы и для иконки карандаша, чтобы модалка вызывалась в любом случае */}
              <img src={`${userAvatar}`} alt="Фото Профиля" className="profile__icon" onClick={onEditAvatar}/>
              <img src={editAvatarImage} alt="Иконка карандаша" className="profile__icon-edit" onClick={onEditAvatar} />
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

      
        <div className="grid">
          {cards.map((card) => <Card  card={card} key={card._id}  onCardClick={onCardClick} />)}
        </div>
    </main>
    
  );
}

export default Main;
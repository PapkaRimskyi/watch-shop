import React from 'react';

export default function Subscribe() {
  return (
    <section className="subscribe">
      <h2 className="visually-hidden">Блок с подпиской на рассылку</h2>
      <div className="subscribe__info-container">
        <div className="subscribe__condition-container">
          <p className="subscribe__condition">Подписка на рассылку</p>
          <p className="subscribe__present">Получить скидку 10% на первую покупку</p>
        </div>
        <form method="post" className="subscribe__form">
          <input type="email" className="subscribe__email-input" placeholder="E-mail" title="Введите свой e-mail для подписки на нашу рассылку" required />
          <button className="button subscribe__button-submit" type="submit">Подписаться</button>
        </form>
      </div>
    </section>
  );
}

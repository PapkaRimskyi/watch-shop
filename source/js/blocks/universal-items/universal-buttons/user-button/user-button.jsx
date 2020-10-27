import React from 'react';
import PropTypes from 'prop-types';

// Компонент пользовательских кнопок (избранное и корзина).

export default function UserButton({ buttonInfo, handler }) {
  // Создаю элемент-счетчик.
  const counter = <span className="favorite-button__count">0</span>;
  const { className, ariaLabel, icon } = buttonInfo;

  // Если ariaLabel === 'Избранное', то в button добавляется элемент counter, который показывает, сколько продуктов пользователь добавил в избранное.
  return (
    <button className={`user-button ${className}-button`} type="button" aria-label={ariaLabel} onClick={handler || null}>
      {ariaLabel === 'Избранное' ? counter : ''}
      {icon}
    </button>
  );
}

UserButton.propTypes = {
  buttonInfo: PropTypes.shape({
    className: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
  handler: PropTypes.func,
};

UserButton.defaultProps = {
  handler: null,
};

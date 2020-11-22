import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Компонент пользовательских кнопок (избранное и корзина).

export default function UserButton({ buttonInfo, favoritesCount, handler }) {
  // Создаю элемент-счетчик.

  const counter = <span className="favorite-button__count">{favoritesCount}</span>;

  //

  const { className, ariaLabel, href, icon } = buttonInfo;

  // Если ariaLabel === 'Избранное', то в button добавляется элемент counter, который показывает, сколько продуктов пользователь добавил в избранное.

  return className === 'search'
    ? (
      <button type="button" className={`user-icons user-icons--${className} ${className}-button`} aria-label={ariaLabel} onClick={handler}>
        {icon}
      </button>
    )
    : (
      <Link to={href} className={`user-icons user-icons--${className} ${className}-button`} aria-label={ariaLabel} onClick={handler}>
        {ariaLabel === 'Избранное' ? counter : ''}
        {icon}
      </Link>
    );
}

UserButton.propTypes = {
  buttonInfo: PropTypes.shape({
    className: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    href: PropTypes.string,
    icon: PropTypes.element.isRequired,
  }).isRequired,
  favoritesCount: PropTypes.number,
  handler: PropTypes.func,
};

UserButton.defaultProps = {
  favoritesCount: null,
  handler: null,
};

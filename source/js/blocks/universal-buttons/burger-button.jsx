import React from 'react';

export default function BurgerButton(props) {
  const { buttonHandler } = props;
  return (
    <button className="burger-button" type="button" aria-label="Меню" onClick={buttonHandler}>
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h18M1 17h18M1 9h18" stroke="#1B1A17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

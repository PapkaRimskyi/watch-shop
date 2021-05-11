import React from 'react';

const Burger: React.FC = () => (
  <button id="burger-menu" title="Бургерное меню">
    <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h18M1 17h18M1 9h18" stroke="#1B1A17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

export default Burger;

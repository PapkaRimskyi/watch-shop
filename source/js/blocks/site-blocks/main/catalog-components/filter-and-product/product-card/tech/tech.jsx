/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function Tech({ techInfo }) {
  return (
    <div className="product-card__tech-info-container">
      <ol className="product-card__tech-list">
        {techInfo.map((info, index) => (
          <li key={index} className="product-card__tech-item">
            <p className="product-card__tech-info">{info}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

Tech.propTypes = {
  techInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

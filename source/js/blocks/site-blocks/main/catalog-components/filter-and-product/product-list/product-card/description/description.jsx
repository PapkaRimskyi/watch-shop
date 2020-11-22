/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ description }) {
  return (
    <div className="product-card__detailed-info-container">
      {description.map((text, index) => (
        <p key={index} className="product-card__detailed-info">{text}</p>
      ))}
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

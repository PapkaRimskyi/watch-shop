import React from 'react';
import PropTypes from 'prop-types';

export default function FilterList({ options }) {
  return (
    <ul className="filter__option-list">
      {options.map((option) => (
        <li className="filter__checkbox-option" key={option}>
          <input type="checkbox" className="filter__checkbox-input visually-hidden" name={option} id={option} />
          <label htmlFor={option} className="filter__checkbox-label">{option}</label>
        </li>
      ))}
    </ul>
  );
}

FilterList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

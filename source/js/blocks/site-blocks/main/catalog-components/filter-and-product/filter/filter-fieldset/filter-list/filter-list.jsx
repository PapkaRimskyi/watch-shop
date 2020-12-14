/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import { SPACE_KEY_CODE } from '../../../../../../../../variables/variables';

export default function FilterList({ options, inputType, changeSomeFilter }) {
  function clickHandler(e) {
    if (e.target.tagName === 'LABEL') {
      changeSomeFilter(e.target.previousSibling.closest('ul').previousSibling.textContent, e.target.previousSibling.name, e.target.previousSibling.id);
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode === SPACE_KEY_CODE) {
      changeSomeFilter(e.target.closest('ul').previousSibling.textContent, e.target.name, e.target.id);
    }
  }

  return (
    <ul className="filter__option-list" onClick={clickHandler} onKeyUp={keyUpHandler}>
      {options.map((option) => (
        <li className="filter__checkbox-option" key={option.engOption}>
          <input type="checkbox" className="filter__checkbox-input visually-hidden" name={inputType} id={option.engOption} />
          <label htmlFor={option.engOption} className="filter__checkbox-label">{option.ruOption || option.engOption}</label>
        </li>
      ))}
    </ul>
  );
}

FilterList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputType: PropTypes.string.isRequired,
  changeSomeFilter: PropTypes.func.isRequired,
};

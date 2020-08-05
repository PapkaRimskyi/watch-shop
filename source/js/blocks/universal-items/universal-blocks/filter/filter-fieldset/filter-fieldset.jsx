import React from 'react';
import RangeCost from '../range-cost/range-cost';

export default class FilterFieldset extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuStatus: this.props.info.menuStatus };

    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.menuKeyHandler = this.menuKeyHandler.bind(this);
  }

  menuClickHandler() {
    this.setState((prevState) => ({ menuStatus: !prevState.menuStatus }));
  }

  menuKeyHandler(e) {
    if (e.key === 'Enter') {
      this.menuClickHandler();
    }
  }

  render() {
    const { ariaLabel, filterName } = this.props.info;
    const { menuStatus } = this.state;
    switch (filterName) {
      case 'Стоимость':
        return (
          <fieldset className="filter__fieldset">
            <legend className={`filter__legend ${menuStatus ? 'filter__legend--active' : 'filter__legend--closed'}`} aria-label={ariaLabel} onKeyPress={this.menuKeyHandler} onClick={this.menuClickHandler} tabIndex="0" role="presentation">{filterName}</legend>
            <RangeCost menuStatus={menuStatus} />
          </fieldset>
        );
      default:
        return (
          <fieldset className="filter__fieldset">
            <legend className={`filter__legend ${menuStatus ? 'filter__legend--active' : 'filter__legend--closed'}`} aria-label={ariaLabel} onKeyPress={this.menuKeyHandler} onClick={this.menuClickHandler} tabIndex="0" role="presentation">{filterName}</legend>
            <ul className={`filter__option-list${menuStatus ? '' : ' filter__option-list--closed'}`}>
              {this.props.info.options.map((option) => (
                <li className="filter__checkbox-option" key={option}>
                  <input type="checkbox" className="filter__checkbox-input visually-hidden" name={option} id={option} />
                  <label htmlFor={option} className="filter__checkbox-label">{option}</label>
                </li>
              ))}
            </ul>
          </fieldset>
        );
    }
  }
}

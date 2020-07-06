/* eslint-disable react/prop-types */
import React from 'react';

export default class UserButton extends React.Component {
  constructor(props) {
    super(props);

    this.counter = <span className="favorite-button__count">0</span>;
  }

  render() {
    const { buttonInfo } = this.props;
    return (
      <button className={`user-button ${buttonInfo.className}`} type="button" aria-label={buttonInfo.ariaLabel} onClick={buttonInfo.itemHandler || null}>
        {buttonInfo.ariaLabel === 'Избранное' ? this.counter : ''}
        {buttonInfo.icon}
      </button>
    );
  }
}

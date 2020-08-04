import React from 'react';

export default class UserButton extends React.Component {
  constructor(props) {
    super(props);

    this.counter = <span className="favorite-button__count">0</span>;
  }

  render() {
    const { className, ariaLabel, icon } = this.props.buttonInfo;
    return (
      <button className={`user-button ${className}-button`} type="button" aria-label={ariaLabel} onClick={this.props.handler || null}>
        {ariaLabel === 'Избранное' ? this.counter : ''}
        {icon}
      </button>
    );
  }
}

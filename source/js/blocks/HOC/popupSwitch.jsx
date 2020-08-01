/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function popupSwitch(WrappedComponent) {
  class PopupSwitch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { popupStatus: false, popupClassName: this.props.popupClassName };

      this.isThatClickBeenOutsideElement = this.isThatClickBeenOutsideElement.bind(this);
      this.buttonHandler = this.buttonHandler.bind(this);
      this.keyDownHandler = this.keyDownHandler.bind(this);
      this.popupListItemHandler = this.popupListItemHandler.bind(this);
    }

    isThatClickBeenOutsideElement(e) {
      const { popupClassName } = this.state;
      if (!e.target.closest(`.${popupClassName}`)) {
        this.setState((prevState) => ({ popupStatus: !prevState.popupStatus }));
        document.removeEventListener('click', this.isThatClickBeenOutsideElement);
      }
    }

    popupListItemHandler(e) {
      e.preventDefault();
      if (e.target.tagName === 'A') {
        if (typeof this.props.sortTypeChange === 'function') {
          this.props.sortTypeChange(e.target.textContent);
        }
        this.buttonHandler(e);
      }
    }

    keyDownHandler(e) {
      if (e.key === 'Enter') {
        this.buttonHandler(e);
      }
    }

    buttonHandler(e) {
      e.preventDefault();
      const { popupStatus } = this.state;
      if (!popupStatus) {
        document.addEventListener('click', this.isThatClickBeenOutsideElement);
      } else {
        document.removeEventListener('click', this.isThatClickBeenOutsideElement);
      }
      this.setState((prevState) => ({ popupStatus: !prevState.popupStatus }));
    }

    render() {
      return <WrappedComponent popupStatus={this.state.popupStatus} buttonHandler={this.buttonHandler} keyDownHandler={this.keyDownHandler} popupListItemHandler={this.popupListItemHandler} {...this.props} />;
    }
  }

  PopupSwitch.displayName = `PopupSwitch(${WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent'})`;
  return PopupSwitch;
}

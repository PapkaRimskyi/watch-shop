/* eslint-disable react/prop-types */
import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.sliderClass = 'slider';

    this.majorClassArrowHandler = this.props.slideArrowHandler;

    this.arrowsHandler = this.arrowsHandler.bind(this);
  }

  arrowsHandler(e) {
    e.preventDefault();
    if (e.target.closest('.slider__button--left')) {
      this.majorClassArrowHandler('left');
    } else {
      this.majorClassArrowHandler('right');
    }
  }

  render() {
    const { slideNumber, environmentClassName } = this.props;
    return (
      <div className={`slider ${environmentClassName}`}>
        <button className="slider__button slider__button--left" type="button" aria-label="Предыдущий слайд" onClick={this.arrowsHandler}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" />
          </svg>
        </button>
        <p className="slider__slide-number">{`0${slideNumber}`}</p>
        <button className="slider__button slider__button--right" type="button" aria-label="Следующий слайд" onClick={this.arrowsHandler}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1L1 6l5 5" stroke="#1B1A17" strokeWidth=".5" />
          </svg>
        </button>
      </div>
    );
  }
}

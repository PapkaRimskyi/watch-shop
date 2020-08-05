import React from 'react';

import Arrow from '../../../svg-icons/arrow';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.slideArrowHandler = this.props.slideArrowHandler;

    this.arrowsHandler = this.arrowsHandler.bind(this);
  }

  arrowsHandler(e) {
    e.preventDefault();
    if (e.target.closest('.slider__button--left')) {
      this.slideArrowHandler('left');
    } else {
      this.slideArrowHandler('right');
    }
  }

  render() {
    const { slideNumber, majorClass } = this.props;
    return (
      <div className={`slider ${majorClass}`} aria-label="Блок с переключением слайдеров">
        <button className="slider__button slider__button--left" type="button" aria-label="Предыдущий слайд" onClick={this.arrowsHandler}>
          <Arrow />
        </button>
        <p className="slider__slide-number">{`0${slideNumber}`}</p>
        <button className="slider__button slider__button--right" type="button" aria-label="Следующий слайд" onClick={this.arrowsHandler}>
          <Arrow />
        </button>
      </div>
    );
  }
}

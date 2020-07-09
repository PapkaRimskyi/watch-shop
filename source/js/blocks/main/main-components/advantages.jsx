/* eslint-disable no-lonely-if */
import React from 'react';

import '../../../../img/advantages__banner-1.jpg';
import '../../../../img/arrow.svg';

import Slider from '../../utils/slider';

export default class Advantages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { defaultNumber: 1, currentNumber: 1, maxNumber: 6 };

    this.advantagesClassSlider = 'advantages__slider';

    this.slideNumberChange = this.slideNumberChange.bind(this);
  }

  slideNumberChange(side) {
    const { defaultNumber, currentNumber, maxNumber } = this.state;
    if (side === 'left') {
      if (currentNumber - defaultNumber < defaultNumber) {
        this.setState(() => ({ currentNumber: maxNumber }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber - defaultNumber }));
      }
    } else {
      if (currentNumber + 1 > maxNumber) {
        this.setState(() => ({ currentNumber: defaultNumber }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber + defaultNumber }));
      }
    }
  }

  render() {
    const { currentNumber } = this.state;
    return (
      <section className="advantages">
        <div className="advantages__container">
          <ul className="advantages__list">
            <li className="advantages__item">
              <figure className="advantages__illustration-container">
                <img src="assets/img/advantages__banner-1.jpg" alt="" className="advantages__illustration-img" />
              </figure>
              <div className="advantages__description-container">
                <h3 className="headline advantages__advantages-name">Подлинное качество</h3>
                <p className="advantages__advantages-description">Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы - это предмет гордости и престижа</p>
                <button className="button advantages__see-catalog" type="button">Смотреть каталог</button>
              </div>
            </li>
          </ul>
        </div>
        <Slider slideNumber={currentNumber} environmentClassName={this.advantagesClassSlider} slideArrowHandler={this.slideNumberChange} />
      </section>
    );
  }
}

/* eslint-disable no-lonely-if */
import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../img/decorative-photo/advantages__banner-1.jpg';
import '../../../../img/unique-icon/arrow.svg';

import Slider from '../../utils/slider';

export default class Advantages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { defaultNumber: 1, currentNumber: 1 };

    this.advantagesClassSlider = 'advantages__slider';

    this.advantagesInfo = [
      {
        advantagesName: 'Подлинное качество',
        advantagesDescription: 'Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы - это предмет гордости и престижа',
        imgPath: 'advantages__banner-1.jpg',
      },
      {
        advantagesName: 'Доступны всем',
        advantagesDescription: 'Швейцарские часы имеют огромный разброс цен. Вы обязательно найдете модель, которая будет соответствовать вашему ценовому диапазону',
        imgPath: 'advantages__banner-1.jpg',
      },
    ];

    this.slideNumberChange = this.slideNumberChange.bind(this);
  }

  slideNumberChange(side) {
    const { defaultNumber, currentNumber } = this.state;
    if (side === 'left') {
      if (currentNumber - defaultNumber < defaultNumber) {
        this.setState(() => ({ currentNumber: this.advantagesInfo.length }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber - defaultNumber }));
      }
    } else {
      if (currentNumber + 1 > this.advantagesInfo.length) {
        this.setState(() => ({ currentNumber: defaultNumber }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber + defaultNumber }));
      }
    }
  }

  render() {
    const { currentNumber } = this.state;
    const currentAdvantagesSlide = this.advantagesInfo[currentNumber - 1];
    return (
      <section className="advantages">
        <div className="advantages__container">
          <ul className="advantages__list">
            <li className="advantages__item">
              <figure className="advantages__illustration-container">
                <img src={`assets/img/${currentAdvantagesSlide.imgPath}`} alt="" className="advantages__illustration-img" />
              </figure>
              <div className="advantages__description-container">
                <h3 className="headline advantages__advantages-name">{currentAdvantagesSlide.advantagesName}</h3>
                <p className="advantages__advantages-description">{currentAdvantagesSlide.advantagesDescription}</p>
                <Link to="/catalog" className="button advantages__see-catalog">Смотреть каталог</Link>
              </div>
            </li>
          </ul>
        </div>
        <Slider slideNumber={currentNumber} environmentClassName={this.advantagesClassSlider} slideArrowHandler={this.slideNumberChange} />
      </section>
    );
  }
}

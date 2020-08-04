/* eslint-disable no-lonely-if */
import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../img/decorative-photo/advantages__banner-1.jpg';
import '../../../../img/unique-icon/arrow.svg';

import advantagesInfo from './model/advantages-info';
import Slider from '../../universal-blocks/slider';

export default class Advantages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { defaultNumber: 1, currentNumber: 1 };

    this.slideNumberChange = this.slideNumberChange.bind(this);
  }

  slideNumberChange(side) {
    const { defaultNumber, currentNumber } = this.state;
    if (side === 'left') {
      if (currentNumber - defaultNumber < defaultNumber) {
        this.setState(() => ({ currentNumber: advantagesInfo.length }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber - defaultNumber }));
      }
    } else {
      if (currentNumber + 1 > advantagesInfo.length) {
        this.setState(() => ({ currentNumber: defaultNumber }));
      } else {
        this.setState((prevState) => ({ currentNumber: prevState.currentNumber + defaultNumber }));
      }
    }
  }

  render() {
    const { currentNumber } = this.state;
    const { imgPath, advantagesName, advantagesDescription } = advantagesInfo[currentNumber - 1];
    return (
      <section className="advantages">
        <ul className="advantages__list">
          <li className="advantages__item">
            <figure className="advantages__illustration-container">
              <img src={`assets/img/${imgPath}`} alt="" className="advantages__illustration-img" />
            </figure>
            <div className="advantages__description-container">
              <h3 className="headline advantages__advantages-name">{advantagesName}</h3>
              <p className="advantages__advantages-description">{advantagesDescription}</p>
              <Link to="/catalog" className="button advantages__see-catalog">Смотреть каталог</Link>
            </div>
          </li>
        </ul>
        <Slider majorClass="advantages__slider" slideNumber={currentNumber} slideArrowHandler={this.slideNumberChange} />
      </section>
    );
  }
}

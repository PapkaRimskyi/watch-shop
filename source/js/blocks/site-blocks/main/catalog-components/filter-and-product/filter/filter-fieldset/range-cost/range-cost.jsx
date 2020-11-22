import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function RangeCost({ menuStatus }) {
  return (
    <div className={classNames('range-cost', !menuStatus ? 'range-cost--closed' : null)} aria-label="Ползунки для изменения диапазона цены">
      <div className="range-cost__range-line">
        <div className="range-cost__range-button range-cost__range-button--from" tabIndex="0" role="presentation">
          <span className="range-cost__range-price range-cost__range-price--from">0</span>
        </div>
        <div className="range-cost__price-segment-line" />
        <div className="range-cost__range-button range-cost__range-button--to" tabIndex="0" role="presentation">
          <span className="range-cost__range-price range-cost__range-price--to">120000</span>
        </div>
      </div>
    </div>
  );
}

RangeCost.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
};

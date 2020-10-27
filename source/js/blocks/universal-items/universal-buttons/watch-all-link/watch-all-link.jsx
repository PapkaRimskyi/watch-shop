import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Посчитал нужным вывести кнопку "Смотреть все" в отдельный компонент.

export default function WatchAllLink({ href, majorClass }) {
  return (
    <Link to={href} className={`watch-all-link ${majorClass}__watch-all`}>Смотреть все</Link>
  );
}

WatchAllLink.propTypes = {
  href: PropTypes.string.isRequired,
  majorClass: PropTypes.string.isRequired,
};

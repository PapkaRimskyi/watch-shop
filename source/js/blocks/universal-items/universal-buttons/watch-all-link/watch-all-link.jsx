import React from 'react';
import { Link } from 'react-router-dom';

export default function WatchAllLink({ href, majorClass }) {
  return (
    <Link to={href} className={`watch-all-link ${majorClass}__watch-all`}>Смотреть все</Link>
  );
}

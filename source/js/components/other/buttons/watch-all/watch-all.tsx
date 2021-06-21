import React, { FC } from 'react';

import Link from './s-watch-all';

import IWatchAll from './interface';

const WatchAll: FC<IWatchAll> = ({ href, className }) => (
  <Link className={className} href={href}>Смотреть все</Link>
);

export default WatchAll;

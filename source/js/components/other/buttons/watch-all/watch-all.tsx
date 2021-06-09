import React, { FC } from 'react';

import Link from './s-watch-all';

const WatchAll: FC<{ href: string, className?: string }> = ({ href, className }) => (
  <Link className={className} href={href}>Смотреть все</Link>
);

export default WatchAll;

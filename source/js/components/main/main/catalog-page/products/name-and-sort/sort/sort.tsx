import React, { FC } from 'react';

import VisuallyHidden from '../../../../../../../styles/visually-hidden';

import { Label, SortInput } from './s-sort';

import '../../../../../../../../img/unique-icon/arrow.svg';

const Sort: FC = () => (
  <section>
    <VisuallyHidden>Сортировка товара</VisuallyHidden>
    <Label htmlFor="sort-input">Сортировать по <SortInput id="sort-input" type="text" value="популярности" title="Тип сортировки" readOnly /></Label>
  </section>
);

export default Sort;

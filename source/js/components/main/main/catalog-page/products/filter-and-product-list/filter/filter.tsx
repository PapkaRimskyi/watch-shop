import React, { FC } from 'react';

import { Form, Fieldset, Legend, Li, Input, InputLabel } from './s-filter';

import data from './data/data';

import '../../../../../../../../img/unique-icon/check-mark.svg';

const Filter: FC = () => (
  <Form method="GET">
    {data.map((filterSection) => (
      <Fieldset key={filterSection.categoryName}>
        <Legend tabIndex="0">{filterSection.categoryName}</Legend>
        <ul>
          {filterSection.options.map((option) => (
            <Li key={option.optionName}>
              <Input type="checkbox" id={option.optionID ?? option.optionName} name={filterSection.checkBoxName} />
              <InputLabel htmlFor={option.optionID ?? option.optionName}>{option.optionName}</InputLabel>
            </Li>
          ))}
        </ul>
      </Fieldset>
    ))}
  </Form>
);

export default Filter;

import React, { FC } from 'react';

import { Form, Fieldset, Legend, List, Li, Input, InputLabel, DropFilterButton } from './s-filter';

import { ENTER } from '../../../../../../../styles/variables';

import data from './data/data';

import '../../../../../../../../img/unique-icon/check-mark.svg';

const Filter: FC = () => {
  // Добавляет или удаляет класс, необходимый для появления списка

  const addOrRemoveActiveClass = (target: HTMLLegendElement) => {
    const fieldset = target.parentElement as HTMLFieldSetElement;
    if (target.classList.contains('active')) {
      fieldset.classList.remove('active');
      target.classList.remove('active');
    } else {
      fieldset.classList.add('active');
      target.classList.add('active');
    }
  };

  //

  // Обработчик legend

  const legendHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const target = e.target as HTMLLegendElement;
    if (e.type === 'click' || (e.type === 'keyup' && (e as React.KeyboardEvent).key === ENTER)) {
      addOrRemoveActiveClass(target);
    }
  };

  //

  return (
    <Form method="GET">
      {data.map((filterSection) => (
        <Fieldset key={filterSection.categoryName} className="active">
          <Legend className="active" tabIndex={0} onClick={legendHandler} onKeyUp={legendHandler}>{filterSection.categoryName}</Legend>
          <List>
            {filterSection.options.map((option: { optionName: string, optionID?: string }) => (
              <Li key={option.optionName}>
                <Input type="checkbox" id={option.optionID ?? option.optionName} name={filterSection.checkBoxName} />
                <InputLabel htmlFor={option.optionID ?? option.optionName}>{option.optionName}</InputLabel>
              </Li>
            ))}
          </List>
        </Fieldset>
      ))}
      <DropFilterButton>Сбросить фильтр</DropFilterButton>
    </Form>
  );
};

export default Filter;

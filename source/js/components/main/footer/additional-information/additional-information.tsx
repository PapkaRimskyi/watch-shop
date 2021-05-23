import React, { FC } from 'react';

import VisuallyHidden from '../../../../styles/visually-hidden';

import data from './data/data';

import { Section, MainList, MainListItem, HeadlineSubList, SubListItem } from './s-additional-information';

import '../../../../../img/logo/logo-footer.png';

const AdditionalInformation: FC = () => (
  <Section>
    <VisuallyHidden>Раздел с дополнительной информацией</VisuallyHidden>
    <MainList>
      {data.map((li) => (
        <MainListItem key={li.nameOfSubList}>
          {li.nameOfSubList === 'logo' ? <img src="assets/img/logo-footer.png" alt="Логотип нашего сайта" /> : <HeadlineSubList>{li.nameOfSubList}</HeadlineSubList>}
          <ul>
            {li.subListItems.map((items) => (
              <SubListItem key={items.link}>
                <a href={`${items.link}`}>{items.text}</a>
              </SubListItem>
            ))}
          </ul>
        </MainListItem>
      ))}
    </MainList>
  </Section>
);

export default AdditionalInformation;

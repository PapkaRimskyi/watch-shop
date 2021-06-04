import React, { FC } from 'react';

import { Section, InformationContainer, Headline, Conditions, Form, Input, Subscribe } from './s-discount';

const Discount: FC = () => (
  <Section>
    <InformationContainer>
      <Headline>Подписка на рассылку</Headline>
      <Conditions>Получить скидку 10% на первую покупку</Conditions>
    </InformationContainer>
    <Form method="POST">
      <Input type="email" title="Введите ваш e-mail" placeholder="E-mail" required />
      <Subscribe type="submit">Подписаться</Subscribe>
    </Form>
  </Section>
);

export default Discount;

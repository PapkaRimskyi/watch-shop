import React, { FC } from 'react';

import SocialLinks from '../../../../other/blocks/social-links/social-links';

import { Section, InformationContainer, SectionHeadline, SocialAndNewsText, List, Li } from './s-subscription';

const Subscription: FC = () => (
  <Section>
    <InformationContainer>
      <SectionHeadline>Следите за нашими новостями</SectionHeadline>
      <SocialAndNewsText>Подписывайтесь на <b>@conquest_watch</b> в соцсетях и узнавайте о новинках и акциях первыми.</SocialAndNewsText>
      <SocialLinks />
    </InformationContainer>
    <List>
      <Li>
        <img src="/img/news-decorative-photo-1.jpg" loading="lazy" alt=" " />
      </Li>
      <Li>
        <img src="/img/news-decorative-photo-2.jpg" loading="lazy" alt=" " />
      </Li>
      <Li>
        <img src="/img/news-decorative-photo-3.jpg" loading="lazy" alt=" " />
      </Li>
    </List>
  </Section>
);

export default Subscription;

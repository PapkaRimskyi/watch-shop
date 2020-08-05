import React from 'react';

import '../../../../../../img/decorative-photo/news-decorative-photo-1.jpg';
import '../../../../../../img/decorative-photo/news-decorative-photo-2.jpg';
import '../../../../../../img/decorative-photo/news-decorative-photo-3.jpg';

import SocialLinks from '../../../../universal-items/universal-blocks/social-links/social-links';

export default function OurNews() {
  const majorClass = 'our-news';
  return (
    <section className="our-news">
      <div className="our-news__container">
        <section className="our-news__news-container">
          <h3 className="headline our-news__headline">Следите за нашими новостями</h3>
          <p className="our-news__subscribe-to-news">Подписывайтесь на <b>@conquest_watch</b> в соцсетях и узнавайте о новинках и акциях первыми.</p>
          <SocialLinks majorClass={majorClass} />
        </section>
        <div className="our-news__decorative-photos-container">
          <figure className="our-news__photo-container our-news__photo-container--1">
            <img src="assets/img/news-decorative-photo-1.jpg" alt="" />
          </figure>
          <figure className="our-news__photo-container our-news__photo-container--2">
            <img src="assets/img/news-decorative-photo-2.jpg" alt="" />
          </figure>
          <figure className="our-news__photo-container our-news__photo-container--3">
            <img src="assets/img/news-decorative-photo-3.jpg" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

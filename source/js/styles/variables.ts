export const MARGIN_AUTO = '0 auto';

// Брейкпоинты

export const MEDIA_SIZES = {
  mobile: 320,
  mobileToTablet: 576,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1366,
};

//

// Цвета

export const MAIN_COLOR = '#1B1A17';

export const WHITE_COLOR = '#fff';
export const BLACK_COLOR = '#000';

export const USER_NAVIGATION_LINK_COLOR = '#555248';
export const USER_NAVIGATION_ACTIVE_LINK_COLOR = '#A69876';

export const SEARCH_BUTTON_ACTIVE = '#D4B098';
export const FAVORITE_LINK_ACTIVE = '#d75a4a';
export const BASKET_LINK_ACTIVE = '#afa45d';

export const INSTAGRAM_DEFAULT_COLOR = '#c13584';
export const INSTAGRAM_HOVER_COLOR = '#833ab4';

export const FACEBOOK_DEFAULT_COLOR = '#3c5a99';
export const FACEBOOK_HOVER_COLOR = '#155aec';

export const TWITTER_DEFAULT_COLOR = '#1da1f2';
export const TWITTER_HOVER_COLOR = '#0d73b1';

//

// Шрифты

export const PLAYFAIR_DISPLAY_FONT = 'PlayfairDisplay';

export const ROBOTO_FONT = 'Roboto';

//

// Позволяет гибко настроить правило transition для css эффектов

export const transitionTemplate = ((transitionParams: string[]): string => `${transitionParams.toString()}, .5s ease-in`);

//

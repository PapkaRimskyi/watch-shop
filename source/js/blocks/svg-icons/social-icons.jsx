import React from 'react';
import PropTypes from 'prop-types';

export function InstagramIcon({ className }) {
  return (
    <svg className={className || null} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M.5 5.224C.5 2.618 2.614.5 5.21.5h7.58c2.596 0 4.71 2.118 4.71 4.724v7.553c0 2.606-2.114 4.723-4.71 4.723H5.21C2.614 17.5.5 15.383.5 12.777V5.224zm12.29-4.177H5.21a4.146 4.146 0 00-4.166 4.177v7.553a4.145 4.145 0 004.166 4.176h7.58a4.146 4.146 0 004.168-4.176V5.224a4.147 4.147 0 00-4.168-4.177zm.461 3.13a.58.58 0 111.16 0 .58.58 0 11-1.16 0zM4.877 9c0-2.276 1.856-4.134 4.123-4.134 2.267 0 4.124 1.859 4.124 4.134 0 2.275-1.857 4.134-4.124 4.134-2.267 0-4.123-1.859-4.123-4.134zm7.704 0A3.572 3.572 0 009 5.413 3.571 3.571 0 005.42 9 3.571 3.571 0 009 12.587 3.572 3.572 0 0012.58 9z" fill="#5C5C50" stroke="#000" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg className={className || null} width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.624 0C4.272 0 2.66 1.408 2.66 3.994v2.23H0v3.023h2.66V17h3.182V9.247h2.653l.399-3.023H5.842v-1.93c0-.876.248-1.472 1.527-1.472H9V.119A22.215 22.215 0 006.624 0z" fill="#5C5C50" />
    </svg>
  );
}

export function TwitterIcon({ className }) {
  return (
    <svg className={className || null} width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1.657a6.902 6.902 0 01-2.003.557A3.538 3.538 0 0016.53.258c-.674.406-1.42.7-2.214.858A3.461 3.461 0 0011.77 0C9.844 0 8.283 1.582 8.283 3.534c0 .277.03.547.09.806C5.474 4.192 2.905 2.785 1.185.647a3.552 3.552 0 00-.473 1.777c0 1.226.616 2.307 1.552 2.942a3.434 3.434 0 01-1.58-.443v.045c0 1.713 1.202 3.14 2.797 3.466a3.444 3.444 0 01-1.575.06c.444 1.404 1.732 2.426 3.258 2.455A6.942 6.942 0 010 12.412 9.78 9.78 0 005.347 14c6.414 0 9.922-5.385 9.922-10.056 0-.153-.004-.305-.01-.457A7.155 7.155 0 0017 1.657" fill="#5C5C50" />
    </svg>
  );
}

InstagramIcon.propTypes = {
  className: PropTypes.string,
};

InstagramIcon.defaultProps = {
  className: null,
};

FacebookIcon.propTypes = {
  className: PropTypes.string,
};

FacebookIcon.defaultProps = {
  className: null,
};

TwitterIcon.propTypes = {
  className: PropTypes.string,
};

TwitterIcon.defaultProps = {
  className: null,
};

import React from 'react';

export default class SearchSite extends React.Component {
  constructor(props) {
    super(props);

    this.searchRef = React.createRef();
  }

  componentDidMount() {
    this.searchRef.current.focus();
  }

  render() {
    return (
      <input ref={this.searchRef} type="text" className="search-site" placeholder="Поиск по сайту" title="Поле для поиска по сайту" />
    );
  }
}

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React from 'react';
import popupSwitch from '../HOC/popupSwitch';

class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortTypeList: this.props.sortTypeList };

    this.listItemHandler = this.listItemHandler.bind(this);
  }

  typeList() {
    const { popupClassName } = this.props;
    const { sortTypeList } = this.state;
    return (
      <ul className={popupClassName} onClick={this.listItemHandler}>
        {sortTypeList.map((type) => <li key={type} className="sort-by__type-element"><a href="  " className="sort-by__type-link">{type}</a></li>)}
      </ul>
    );
  }

  listItemHandler(e) {
    e.preventDefault();
    const { sortTypeChange, buttonHandler } = this.props;
    if (e.target.tagName === 'A') {
      sortTypeChange(e.target.textContent);
      buttonHandler(e);
    }
  }

  render() {
    const {
      sortType, popupStatus, buttonHandler, keyDownHandler,
    } = this.props;
    return (
      <section className="sort-by">
        <h2 className="visually-hidden">Варианты сортировки часов</h2>
        <p className="sort-by__type">Сортировать по: <input type="text" className="sort-by__active-type" onClick={buttonHandler} onKeyDown={keyDownHandler} name="active-sort-type" value={sortType} readOnly /></p>
        {popupStatus ? this.typeList() : null}
      </section>
    );
  }
}

export default popupSwitch(SortBy);

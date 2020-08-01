/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import popupSwitch from '../HOC/popupSwitch';

class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortTypeList: this.props.sortTypeList };
  }

  typeList() {
    const { popupClassName, popupListItemHandler } = this.props;
    const { sortTypeList } = this.state;
    return (
      <ul className={popupClassName} onClick={popupListItemHandler}>
        {sortTypeList.map((type) => <li key={type} className="sort-by__type-element"><a href="  " className="sort-by__type-link">{type}</a></li>)}
      </ul>
    );
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

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import popupSwitch from '../../../../HOC/popupSwitch';

class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sortTypeList: this.props.sortTypeList };
  }

  typeList() {
    const { sortTypeList } = this.state;
    const { popupClassName, popupListItemHandler } = this.props;
    return (
      <ul className={popupClassName} onClick={popupListItemHandler} aria-label="Список доступных сортировок">
        {sortTypeList.map((type) => <li key={type} className="sort-by__type-element"><a href="  " className="sort-by__type-link" aria-label={`Сортировка по ${type}`}>{type}</a></li>)}
      </ul>
    );
  }

  render() {
    const {
      sortType, popupStatus, buttonHandler, keyDownHandler,
    } = this.props;
    return (
      <section className="sort-by" aria-label="Варианты сортировки часов">
        <p className="sort-by__type">Сортировать по: <input type="text" className="sort-by__active-type" aria-label={`Текущая сортировка: по ${sortType}`} onClick={buttonHandler} onKeyDown={keyDownHandler} name="active-sort-type" value={sortType} readOnly /></p>
        {popupStatus ? this.typeList() : null}
      </section>
    );
  }
}

export default popupSwitch(SortBy);

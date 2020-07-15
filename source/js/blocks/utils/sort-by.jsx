import React from 'react';

export default function SortBy(props) {
  const { sortHandler } = props;
  return (
    <section className="sort-by">
      <h2 className="visually-hidden">Варианты сортировки часов</h2>
      <p className="sort-by__type">Сортировать по: <input type="text" className="sort-by__active-type" value="популярности" readOnly /></p>
    </section>
  );
}

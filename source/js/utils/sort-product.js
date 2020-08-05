export default function sortProduct(watchItemList) {
  const { sortType } = this.state;
  switch (sortType) {
    case 'цене':
      return watchItemList.sort((a, b) => Number(a.price.replace(/\s/g, '')) - Number(b.price.replace(/\s/g, '')));
    default:
      return watchItemList.sort((a, b) => b.popularity - a.popularity);
  }
}

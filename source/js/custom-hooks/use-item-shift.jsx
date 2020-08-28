export default function useItemShift(itemList, setProductList) {
  function itemShift(side) {
    if (side === 'left') {
      setProductList([].concat([...itemList.slice(1)], itemList[0]));
    } else {
      setProductList([].concat(itemList[itemList.length - 1], [...itemList.slice(0, itemList.length - 1)]));
    }
  }

  return itemShift;
}

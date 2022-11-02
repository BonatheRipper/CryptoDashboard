export function paginatePageToDisplay(
  items,
  indexOfFirstTable,
  indexOfLastTable
) {
  return items.slice(indexOfFirstTable, indexOfLastTable);
}
export function paginateNumbersLength(items, itemsPerTable) {
  let arr = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerTable); i++) {
    arr.push(i);
  }
  return arr;
}
export function paginatePager(setCurrentTable, pageNumber) {
  setCurrentTable(pageNumber);
}

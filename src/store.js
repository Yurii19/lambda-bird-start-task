import app from './app';

const state = [
  { place: 1, name: 'Matias', score: 1008, speed: 23.5 },
  { place: 4, name: 'Dan', score: 964, speed: 24.1 },
  { place: 3, name: 'Patrik', score: 979, speed: 23.9 },
  { place: 2, name: 'Martin', score: 998, speed: 23.1 },
  { place: 5, name: 'Peter', score: 857, speed: 24.4 },
]
const tableHeader = { place: '#', name: 'name', score: 'score', speed: 'rate of fire' };
export const getTableHeader = () => tableHeader;

let copyState = [...state];

let sortObj = {};

let searchValue = '';

export const gerSearchValue = () => {
  return searchValue;
};

export const filterByName = (param) => {
  searchValue = param;
  copyState = [...state.filter(el => el.name.toLowerCase().includes(param.toLowerCase()))];
  app();
  document.querySelectorAll('label')[0].click();
}

export const setSortObj = (param) => {
  if (Object.values(sortObj).length === 0 || sortObj.key !== param.key) sortObj.clicks = 0;
  sortObj = { ...param, clicks: sortObj.clicks < 2 ? 1 + sortObj.clicks : 0 };
  app();
}

export const getState = () => {
  const localState = [...copyState];
  if (Object.values(sortObj).length === 0) {
    return localState.sort((a, b) => a.place > b.place ? 1 : -1);
  } else {
    const sortKey = sortObj.key;
    switch (sortObj.clicks) {
      case 0:
        return localState.sort((a, b) => a.place > b.place ? 1 : -1);
      case 1:
        return localState.sort((a, b) => a[sortKey] < b[sortKey] ? 1 : -1);
      case 2:
        return localState.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
      default:
        break;
    }
  }
}

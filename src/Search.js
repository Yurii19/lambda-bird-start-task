import Table from './Table';
import { filterByName, gerSearchValue } from './store';

const Search = () => {

    const parent = document.createElement('div');
    const label = document.createElement('label');
    label.click();
    label.innerText = 'Search';
    const input = document.createElement('input');
    input.oninput = (evt) => { filterByName(evt.target.value) };

    input.value = gerSearchValue();
    label.appendChild(input);
    parent.appendChild(label);
    parent.classList.add('search-block');
    return parent;
}

export default Search;
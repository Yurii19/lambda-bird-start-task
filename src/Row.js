import state from './store';
import { setSortObj } from './store';

const Row = (props) => {

    const tableRow = document.createElement('tr');

    const src = props.src;

    for (const key in src) {
        const tableDeck = document.createElement(props.deckType);
        tableDeck.innerText = src[key];
        tableRow.appendChild(tableDeck);
        if (props.deckType === 'th') {
            const sort = document.createElement('span');
            sort.innerHTML = '&#8645';
            tableDeck.appendChild(sort);
            sort.setAttribute('data-name', key);
            sort.onclick = (evt) => {
                setSortObj({ key: evt.target.getAttribute('data-name') });
            }
        }
    };

    return tableRow;
}

export default Row;
import Row from './Row';
import { getState, getTableHeader } from './store';

const Table = () => {
    const state = getState();
    const bodyParent = document.createElement('table');
    const bodyHeadRow = Row({ deckType: 'th', src: getTableHeader() });
    bodyParent.appendChild(bodyHeadRow);
    for (let i = 0; i < state.length; i++) {
        const tr = Row({ deckType: 'td', src: Object.values(state[i]) });
        bodyParent.appendChild(tr);
    }
    return bodyParent;
}

export default Table;
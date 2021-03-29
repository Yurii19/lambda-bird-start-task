import Table  from './Table';
import Search  from './Search';

const Page = () => {

    const body = document.createElement('div');
    const title = document.createElement('h3');
    title.innerText = 'Welcome to statistic';
    body.appendChild(title);
    body.appendChild(Search());
    body.appendChild(Table());
    return body;
}

export default Page;
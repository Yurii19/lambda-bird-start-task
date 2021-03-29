import Page from './Page';
import './style.css';

const app = () => {
    document.body.innerHTML = '';
    document.body.appendChild(Page());
}
app();

export default app;
import ReactDOM from 'react-dom';
import App from './app';
import { store, history } from './store';

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));

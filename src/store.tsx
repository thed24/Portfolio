import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';

import { ApplicationState, createRootReducer } from './store/index';
import { createBrowserHistory, History } from 'history';

const createNewStore = (initialState: ApplicationState, history: History) => {
	return createStore(createRootReducer(history), initialState, applyMiddleware(routerMiddleware(history), thunk));
};

const history = createBrowserHistory();
const initialState: ApplicationState = {} as ApplicationState;

const store = createNewStore(initialState, history);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, history };

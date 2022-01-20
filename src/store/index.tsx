import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { RouterState } from 'connected-react-router';

import { History } from 'history';

import { ArticleReducer } from './article/reducer';
import { ArticleState } from './article/types';

export type ApplicationState = {
	article: ArticleState;
	router: RouterState;
};

export const createRootReducer = (history: History) =>
	combineReducers({
		article: ArticleReducer,
		router: connectRouter(history),
	});

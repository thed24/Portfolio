import { ArticleActionTypes, Article } from './types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../index';
import { GitHubRepository } from './dtos';

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>>>;

export const clearErrors: AppThunk = () => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: ArticleActionTypes.CLEAR_ERRORS,
		});
	};
};

export const updateWorkIndex: AppThunk = (index: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: ArticleActionTypes.UPDATE_EXPERIENCE_TAB_INDEX,
			payload: index,
		});
	};
};

export const loadArticles: AppThunk = () => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: ArticleActionTypes.LOAD_ARTICLES,
		});

		try {
			const repositories: GitHubRepository[] = await (await fetch('https://api.github.com/users/thed24/repos')).json();

			dispatch({
				type: ArticleActionTypes.LOAD_ARTICLES_SUCCESS,
				payload: repositories
					.filter((repo) => repo.fork === false)
					.map((repo) => {
						return {
							name: repo.name,
							link: repo.html_url,
							site: 'GitHub',
							thumbnail: 'N/A',
							date: repo.created_at,
							description: repo.description,
						} as Article;
					}),
			});
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.LOAD_ARTICLES_FAIL,
				payload: e,
			});
		}
	};
};

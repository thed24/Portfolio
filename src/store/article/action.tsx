import { ArticleActionTypes, Article } from './types';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../index';
import { GitHubRepository, RssFeed } from './dtos';

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
			const githubRepositories: GitHubRepository[] = await (
				await fetch('https://api.github.com/users/thed24/repos')
			).json();

			const mediumArticles: RssFeed = await (
				await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@domcodespoti')
			).json();

			const articles = githubRepositories
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
				});

			articles.push(
				...mediumArticles.items.map((article) => {
					return {
						name: article.title,
						link: article.link,
						site: 'Medium',
						thumbnail: article.thumbnail,
						description: `An article written about ` + article.categories.map((category) => category).join(', '),
						date: article.pubDate,
					} as Article;
				}),
			);

			const used = process.memoryUsage().heapUsed / 1024 / 1024;
			console.log(`The script uses approximately ${used} MB`);

			dispatch({
				type: ArticleActionTypes.LOAD_ARTICLES_SUCCESS,
				payload: articles,
			});
		} catch (e) {
			dispatch({
				type: ArticleActionTypes.LOAD_ARTICLES_FAIL,
				payload: e,
			});
		}
	};
};

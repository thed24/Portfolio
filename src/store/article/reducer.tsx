import { Reducer } from 'redux';
import { ArticleActionTypes, ArticleState } from './types';

export const initialState: ArticleState = {
	articles: [],
	errors: [],
	loading: false,
	experienceTabIndex: 0,
	filter: 'both',
};

const reducer: Reducer<ArticleState> = (state = initialState, action) => {
	switch (action.type) {
		case ArticleActionTypes.LOAD_ARTICLES: {
			return { ...state, loading: true };
		}
		case ArticleActionTypes.LOAD_ARTICLES_SUCCESS: {
			return { ...state, loading: false, articles: action.payload };
		}
		case ArticleActionTypes.LOAD_ARTICLES_FAIL: {
			return {
				...state,
				loading: false,
				errors: [...state.errors, action.payload],
			};
		}
		case ArticleActionTypes.CLEAR_ERRORS: {
			return { ...state, errors: [] };
		}
		case ArticleActionTypes.SET_ARTICLE_FILTER: {
			return { ...state, filter: action.payload };
		}
		case ArticleActionTypes.UPDATE_EXPERIENCE_TAB_INDEX: {
			return { ...state, experienceTabIndex: action.payload };
		}
		default: {
			return state;
		}
	}
};

export { reducer as ArticleReducer };

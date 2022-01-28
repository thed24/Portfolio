export type Article = {
	id: string;
	name: string;
	link: string;
	site: ValidSite;
	thumbnail: string;
	date: string;
	description: string;
};

export type ValidSite = 'gitHub' | 'medium';
export type SiteFilter = ValidSite | 'both';

export enum ArticleActionTypes {
	LOAD_ARTICLES = 'LOAD_ARTICLES',
	LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS',
	LOAD_ARTICLES_FAIL = 'LOAD_ARTICLES_FAIL',
	SET_ARTICLE_FILTER = 'SET_ARTICLE_FILTER',
	CLEAR_ERRORS = 'CLEAR_ERRORS',
	UPDATE_EXPERIENCE_TAB_INDEX = 'UPDATE_EXPERIENCE_TAB_INDEX',
}

export type ArticleState = {
	readonly loading: boolean;
	readonly articles: Article[];
	readonly errors: Error[];
	readonly experienceTabIndex: number;
	readonly filter: SiteFilter;
};

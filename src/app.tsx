import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationState } from './store/index';
import { Store } from 'redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import landingPage from './components/landingPage/landingPage';

type MainProps = {
	store: Store<ApplicationState>;
	history: History;
};

const App: React.FC<MainProps> = ({ store, history }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ConnectedRouter history={history}>
					<CssBaseline>
						<Switch>
							<Route exact key="Home" path="/" component={landingPage} />
						</Switch>
					</CssBaseline>
				</ConnectedRouter>
			</ThemeProvider>
		</Provider>
	);
};

export default App;

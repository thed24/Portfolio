import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#9A57DE',
		},
		secondary: {
			main: '#CBA0F7',
		},
		background: {
			default: '#282a36',
		},
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		h1: {
			fontSize: '5rem',
			fontWeight: 'bold',
			color: '#9A57DE',
		},
		h2: {
			fontSize: '4rem',
			fontWeight: 'bold',
			color: '#9A57DE',
		},
		h3: {
			fontSize: '3rem',
			color: '#9A57DE',
		},
		h4: {
			fontSize: '2.5rem',
			color: '#9A57DE',
		},
		h5: {
			fontSize: '1.25rem',
			color: '#9A57DE',
		},
		h6: {
			fontSize: '1rem',
			color: '#9A57DE',
		},
		body1: {
			fontSize: '1.25rem',
			color: '#9A57DE',
		},
		body2: {
			fontSize: '1rem',
			color: '#9A57DE',
		},
		caption: {
			fontSize: '0.5rem',
			color: '#9A57DE',
		},
		overline: {
			fontSize: '0.25rem',
			color: '#9A57DE',
		},
	},
});

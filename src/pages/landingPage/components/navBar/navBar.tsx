import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import styles from './navBar.module.css';

type NavBarLink = {
	id: string;
	name: string;
};

export const navElements = [
	{
		id: 'title',
		name: 'The Title',
	} as NavBarLink,
	{
		id: 'about',
		name: 'About Me',
	} as NavBarLink,
	{
		id: 'work',
		name: 'My Work',
	} as NavBarLink,
	{
		id: 'experience',
		name: 'My Experience',
	} as NavBarLink,
];

export function NavBar() {
	return (
		<>
			<AppBar color="primary" position="static" className={styles.blocker}>
				<Container maxWidth="xl">
					<Toolbar disableGutters className={styles.navBar}>
						{navElements.map((element) => {
							return (
								<Link
									className={styles.navBarElement}
									to={element.id}
									spy={true}
									smooth={true}
									offset={-255}
									duration={500}
								>
									<Typography color={'secondary'}> {element.name} </Typography>
								</Link>
							);
						})}
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}

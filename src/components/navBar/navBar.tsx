import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import styles from './navBar.module.css';

type NavBarLink = {
	id: string;
	name: string;
};

export const navElements = [
	{
		id: 'about',
		name: 'About',
	} as NavBarLink,
	{
		id: 'work',
		name: 'Work',
	} as NavBarLink,
	{
		id: 'experience',
		name: 'Experience',
	} as NavBarLink,
	{
		id: 'contact',
		name: 'Contact',
	} as NavBarLink,
];

export function NavBar() {
	return (
		<>
			<AppBar color="primary" position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters className={styles.navBar}>
						{navElements.map((element) => {
							return (
								<Link
									className={styles.navBarElement}
									to={element.id}
									spy={true}
									smooth={true}
									offset={-100}
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

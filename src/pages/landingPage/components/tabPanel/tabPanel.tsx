import Typography from '@mui/material/Typography';
import styles from './tabPanel.module.css';

export type TabPanelProps = {
	index: number;
	value: number;
	children: React.ReactNode;
};

export function TabPanel(props: TabPanelProps) {
	const { children, value, index } = props;

	return (
		<div>
			{value === index && (
				<div className={styles.tabPanel}>
					<Typography variant={'body2'} color={'secondary'}>
						{children}
					</Typography>
				</div>
			)}
		</div>
	);
}

import { History } from 'history';
import { NavBar } from '../navBar/navBar';
import styles from './landingPage.module.css';
import { connect, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store/index';
import { clearErrors, loadArticles, updateWorkIndex } from '../../store/article/action';
import { Alert, Box, CircularProgress, Link, Tab, Tabs, Typography } from '@mui/material';
import Sticky from 'react-sticky-el';
import { TabPanel } from '../tabPanel/tabPanel';

type LandingPageProps = {
	history: History;
};

const mapState = (state: ApplicationState) => ({
	articles: state.article.articles,
	loading: state.article.loading,
	errors: state.article.errors,
	experienceIndex: state.article.experienceTabIndex,
});

const mapDispatch = {
	loadArticles,
	clearErrors,
	updateWorkIndex,
};

export type ConnectedLandingPageProps = LandingPageProps & ReturnType<typeof mapState>;

const LandingPage = (props: ConnectedLandingPageProps) => {
	const dispatch = useDispatch();

	if (props.articles.length === 0 && props.errors.length === 0) {
		dispatch(loadArticles());
	}

	if (props.loading) {
		return (
			<Box className={styles.centerScreen}>
				<CircularProgress />
			</Box>
		);
	}

	const alertForError = props.errors.length !== 0 && (
		<Alert
			className={styles.alert}
			severity="error"
			onClose={() => {
				dispatch(clearErrors());
			}}
		>
			Error: {props.errors.pop()?.message}
		</Alert>
	);

	const title = (
		<div id={'title'} className={styles.container}>
			<Typography color={'primary'} variant={'h2'}>
				{' '}
				I'm Dominic Codespoti!{' '}
			</Typography>
			<Typography gutterBottom={true} color={'secondary'} variant={'h3'}>
				{' '}
				I'm something of a Software Engineer myself.{' '}
			</Typography>
			<div className={styles.subContainer}>
				<Typography color={'primary'} variant={'body1'}>
					{' '}
					Infact, that's my job! I'm a Fullstack Software Engineer, and I specialize in creating easily testable and
					maintainble software. Right now, I'm building fantastic user experiences over at PointsBet.
				</Typography>
			</div>
		</div>
	);

	const about = (
		<div id={'about'} className={styles.container}>
			<Typography color={'primary'} variant={'h2'} gutterBottom={true}>
				{' '}
				A Bit About Me{' '}
			</Typography>
			<div className={styles.subContainerLeft}>
				<Typography color={'secondary'} variant={'body1'}>
					I am a software developer with a passion for learning and problem solving. I am currently working at{' '}
					<Link href="https://pointsbet.com.au/">PointsBet</Link> as a Software Engineer. I am a recent graduate of the{' '}
					<Link href="https://www.swinburne.edu.au/">Swinburne University</Link> with a bachelor in Computer Science and
					a Major in Software Development.
				</Typography>
			</div>
			<div className={styles.subContainer}>
				<img className={styles.photo} width={375} height={250} src={require('../../images/Grad.JPG')} />
			</div>
		</div>
	);

	const articles = (
		<>
			<div className={styles.titleContainer} id={'work'}>
				<Typography color={'primary'} variant={'h2'} gutterBottom={true}>
					{' '}
					My Work{' '}
				</Typography>
			</div>
			<div className={styles.articles}>
				{props.articles.map((article) => {
					return (
						<div className={styles.article}>
							<Link variant="h5" color="primary" underline="hover" href={article.link}>
								{article.name}
							</Link>

							<br />
							<Typography variant={'body2'} color={'secondary'}>
								{article.description}
							</Typography>
						</div>
					);
				})}
			</div>
		</>
	);

	const experience = (
		<div id={'experience'} className={styles.container}>
			<Typography color={'primary'} variant={'h2'} gutterBottom={true}>
				{' '}
				My Experience{' '}
			</Typography>
			<Box className={styles.tabList}>
				<Tabs
					value={props.experienceIndex}
					onChange={(event: React.SyntheticEvent, newValue: number) => {
						console.log(newValue);
						dispatch(updateWorkIndex(newValue));
					}}
				>
					<Tab className={styles.tab} label="MYOB Junior Developer" />
					<Tab className={styles.tab} label="MYOB Associate Developer" />
					<Tab className={styles.tab} label="MYOB Developer" />
					<Tab className={styles.tab} label="PointsBet Backend Developer" />
				</Tabs>
			</Box>
			<TabPanel index={0} value={props.experienceIndex}>
				<ul>
					<li>One in ten selected interns from 220 applicants nationwide for this 12-month position.</li>
					<li>
						Spent time working under two talented mentors, practicing and learning skills such as Clean Code, SOLID
						design principles, how to design RESTful APIs, TDD and other foundational skills.
					</li>
					<li>
						Was up-skilled in many DevOps related practices, such as CI/CD and the formation and benefits of working
						with pipelines / automated tests / artefacts etc, good practices in forming and maintaining Infrastructure
						as Code, understanding and working with Docker and subsequently Kubernetes, and working within the AWS
						ecosystem.
					</li>
				</ul>
			</TabPanel>
			<TabPanel index={1} value={props.experienceIndex}>
				<ul>
					<li>
						With the guidance of a talented contractor, I led the analysis and development of a major feature within our
						NZ Payroll product, which was our Earnings PayItems feature, and did so 15% earlier than the projected time
						for completion. Furthermore, the analysis and development work of this feature was used to pave the way for
						future like features.
					</li>
					<li>
						Alongside another Developer on my team, we created and implemented both Integration and End to End tests for
						our back end service, which provided the many teams working on our service a stronger sense of confidence
						within our test suite.
					</li>
				</ul>
			</TabPanel>
			<TabPanel index={2} value={props.experienceIndex}>
				<ul>
					<li>
						Created a set of convention tests that enforced our Developers to mark the fields on our domain models as
						PII or not, to ensure that our data was properly sanitised before being persisted to any logging services or
						aggregators.
					</li>
					<li>
						Partnered with many different talented Senior Developers to run technical interviews and perform candidate
						analysis and feedback.
					</li>
					<li>
						Assisted in the on-boarding of the contractors within our team, which helped speed up the usually tedious
						process of gaining access to systems and services and receiving contextual information on our domain and
						systems.
					</li>
				</ul>
			</TabPanel>
			<TabPanel index={3} value={props.experienceIndex}>
				<ul>
					<li>
						Refactored an internal auditing system from the ground up as a DotNet 6 Function App following Clean
						Architecture.
					</li>
				</ul>
			</TabPanel>
		</div>
	);

	return (
		<>
			<Sticky>
				<NavBar />
			</Sticky>
			{alertForError}
			{title}
			{about}
			{articles}
			{experience}
		</>
	);
};

const connector = connect(mapState, mapDispatch);
export default connector(LandingPage);

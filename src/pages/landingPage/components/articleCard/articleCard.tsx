import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '../../../../store/article/types';

export type ArticleCardProps = {
	article: Article;
};

export default function ArticleCard(props: ArticleCardProps) {
	return (
		<Card sx={{ minWidth: 275, backgroundColor: '#282a36' }}>
			<CardContent>
				<Typography color={'primary'} variant="h5" component="div">
					{props.article.name}
				</Typography>
				<Typography color={'secondary'} variant="body2">
					{props.article.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" href={props.article.link}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

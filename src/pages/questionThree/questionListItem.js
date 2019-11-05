import React, {Fragment} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
	displayBlock: {
		display: 'block'
	}
}));

const QuestionListItem = (props) => {
		const {icon, name, species, id, description } = props.item;	
		const divider =  props.divider	
		const Icon = icon;
		const classes = useStyles();
		return(
			<Fragment>
				<ListItem alignItems="flex-start" >
					<ListItemAvatar>
						<Avatar>
							<Icon/>
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={`${name}: ${species? species : 'Other'}`}
						secondary={
							<Fragment>
								<span className={classes.displayBlock}>
									<Typography
										variant="subtitle2"
										className={classes.header}
										component={'span'} 
									>
										Description:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
										component={'span'} 
									>
										{description}
									</Typography>
								</span>
								<span className={classes.displayBlock}>
									<Typography
										variant="subtitle2"
										className={classes.header}
										component={'span'} 
									>
										Guid:
									</Typography>
									<Typography
										variant="body2"
										className={classes.label}
										component={'span'} 
									>
										{id ? id : 'ERROR '}
									</Typography>
								</span>
							</Fragment>
						}
					/>
				</ListItem>
				{divider && <Divider variant="middle" />}
			</Fragment>
		)
	}


export default QuestionListItem;
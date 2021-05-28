import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
		fontFamily: "'Montserrat', sans-serif !important",
	},
}));

export default function CircularIndeterminate() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress color='secondary' size={100} thickness={2} />
            <h3>Fetching results....</h3>
		</div>
	);
}

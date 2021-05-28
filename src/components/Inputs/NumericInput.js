import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'inline-block',
		'& > *': {
			margin: theme.spacing(2),
			width: '25ch',
		},
	},
}));

const NumericInput = (props) => {
	const classes = useStyles();
	const { text, value, changeValue } = props;
	return (
		<div className={classes.root}>
			<TextField
				id='outlined-basic'
				required
				name='numericInput'
				value={value}
				label={text}
				type='number'
				variant='outlined'
				inputProps={{ type: 'number' }}
				onChange={changeValue}
			/>
		</div>
	);
};

export default NumericInput;

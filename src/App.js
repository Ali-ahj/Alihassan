import SignInOutContainer from './containers';
import './App.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	typo: {
		flexGrow: 1,
		textAlign: 'center',
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className="App">
			<Typography variant="h4" className={classes.typo}>
				Calgary Super Store
			</Typography>
			<SignInOutContainer />
		</div>
	);
}

export default App;

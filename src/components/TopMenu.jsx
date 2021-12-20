import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
	link: { color: 'white', paddingRight: '1rem' },
}));
const TopMenu = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						<Link to="/" className={classes.link}>
							Home
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link to="/products" className={classes.link}>
							Products
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link to="/cart" className={classes.link}>
							Cart
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link to="/contact-us" className={classes.link}>
							Contact Us
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default TopMenu;

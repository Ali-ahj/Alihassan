import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInOutContainer from './containers';
import TopMenu from './components/TopMenu';
import YourCart from './components/YourCart';
import Home from './components/Home';
import './App.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import NotFound from './components/NotFound';

const useStyles = makeStyles((theme) => ({
	typo: {
		flexGrow: 1,
		textAlign: 'center',
	},
}));

function App() {
	const classes = useStyles();
	return (
		<Router>
			<div className="App">
				<TopMenu />
				<Typography variant="h4" className={classes.typo}>
					Calgary Super Store
				</Typography>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/cart" element={<YourCart />}></Route>
					<Route path="/contact-us" element={<ContactUs />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
				<SignInOutContainer />
			</div>
		</Router>
	);
}
// https://github.com/Ali-ahj/Alihassan
export default App;

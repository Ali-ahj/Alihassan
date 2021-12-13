import React from 'react';
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Checkbox,
	FormControlLabel,
	Button,
	Typography,
	Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field } from 'formik';
const Login = ({ handleChange }) => {
	const paperStyle = {
		padding: '20px',
		height: '76vh',
		width: 300,
		margin: '0 auto',
	};
	const avatarStyle = { backgroundColor: '#1bbd7e' };
	const buttonStyle = { margin: '8px 0px' };
	const initialValues = { username: '', password: '', remember: false };
	const onSubmit = (values, props) => {
		console.log(values);
	};
	return (
		<div>
			<Grid>
				<Paper style={paperStyle}>
					<Grid align="center">
						<Avatar style={avatarStyle}>
							<LockOutlinedIcon />
						</Avatar>
						<h2>Sign In</h2>
					</Grid>
					<Formik initialValues={initialValues} onSubmit={onSubmit}>
						{(props) => (
							<Form>
								<Field
									as={TextField}
									label="User Name"
									placeholder="Enter user name"
									name="username"
									fullWidth
									required
								/>
								<Field
									as={TextField}
									label="Password"
									placeholder="Enter Password"
									name="password"
									fullWidth
									required
									type="password"
								/>
								<FormControlLabel
									name="remember"
									control={<Checkbox color="primary" />}
									label="Remember Me"
								/>
								<Button
									type="submit"
									color="primary"
									fullWidth
									variant="contained"
									style={buttonStyle}
								>
									Sign In
								</Button>
							</Form>
						)}
					</Formik>
					<Typography>
						<Link href="#">Forgot Password</Link>
					</Typography>
					<Typography>
						Do you have an account?
						<Link href="#" onClick={() => handleChange()}>
							Sign Up
						</Link>
					</Typography>
				</Paper>
			</Grid>
		</div>
	);
};

export default Login;

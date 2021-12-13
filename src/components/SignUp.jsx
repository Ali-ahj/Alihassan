import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
	Grid,
	Paper,
	Avatar,
	Typography,
	TextField,
	Button,
} from '@material-ui/core';
const SignUp = () => {
	const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
	const headerStyle = { margin: 0 };
	const avatarStyle = { backgroundColor: '#1bbd7e' };
	return (
		<div>
			<Grid>
				<Paper style={paperStyle}>
					<Grid align="center">
						<Avatar style={avatarStyle}>
							<AddCircleOutlineOutlinedIcon />
						</Avatar>
						<h2 style={headerStyle}>Sign Up</h2>

						<Typography variant="caption" gutterBottom>
							Please fill thiod form to create an account
						</Typography>
					</Grid>
					<form>
						<TextField fullWidth label="Name" placeholder="Enter your Name" />
						<TextField fullWidth label="Email" />
						<FormControl component="fieldset" style={{ marginTop: 5 }}>
							<FormLabel component="legend">Gender</FormLabel>
							<RadioGroup
								aria-label="gender"
								name="gender"
								style={{ display: 'initial' }}
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
							</RadioGroup>
						</FormControl>

						<TextField fullWidth label="Phone Number" />
						<TextField fullWidth label="Password" />
						<TextField fullWidth label="Confirm Password" />
						<FormControlLabel
							control={<Checkbox name="checkedA" />}
							label="I accept the terms and conditions"
						/>
						<Button type="submit" variant="contained" color="primary">
							Sign Up
						</Button>
					</form>
				</Paper>
			</Grid>
		</div>
	);
};

export default SignUp;

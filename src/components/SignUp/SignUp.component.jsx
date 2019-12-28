import React from "react";
import "./signup.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="signup">
				<div className="title">Sign-up</div>
				<form>
					<div className="field">
						<FormInput
							name="fullName"
							type="text"
							label="Full Name"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="field">
						<FormInput
							name="email"
							type="text"
							label="Email"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="field">
						<FormInput
							name="password"
							type="password"
							label="Password"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="field">
						<FormInput
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="buttons">
						<CustomButton type="submit" id="up" label="Sign Up" />
						<CustomButton id="change" label="Already have an account?" />
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;

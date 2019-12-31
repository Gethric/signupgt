import React from "react";
import "./signup.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		this.setState({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		});
	};

	render() {
		return (
			<div className="box">
				<div className="title">Sign-up</div>
				<form onSubmit={this.handleSubmit}>
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
						<CustomButton
							className="atn"
							type="submit"
							id="up"
							label="Sign Up"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;

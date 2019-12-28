import React from "react";
import "./signin.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
		console.log(this.state);
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
		console.log(this.state);
	};

	render() {
		return (
			<div className="signin">
				<div className="title">Sign-in</div>
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<FormInput
							name="email"
							type="email"
							label="Email Address"
							handleChange={this.state.handleChange}
							value={this.state.email}
							required
						/>
					</div>

					<div className="field">
						<FormInput
							name="password"
							type="password"
							label="Password"
							handleChange={this.state.handleChange}
							value={this.state.password}
							required
						/>
					</div>

					<div className="buttons">
						<CustomButton type="submit" id="in" label="Sign In" />
						<CustomButton id="change" label="Don't have an account yet?" />
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

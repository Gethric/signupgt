import React from "react";
import "./signinsignup.styles.scss";
import SignIn from "../SignIn/SignIn.component";
import SignUp from "../SignUp/SignUp.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignInSignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			screen: "signin",
			label: "Don't have an account yet? FROM STATE"
		};
	}

	toggleScreen = event => {
		if (this.state.screen === "signin") {
			this.setState({
				screen: "signup",
				label: "Already have an account? FROM toggle"
			});
		} else {
			this.setState({
				screen: "signin",
				label: "Don't have an account yet? FROM toggle"
			});
		}
	};

	render() {
		return (
			<div className="signin_signup">
				{this.state.screen === "signin" ? <SignIn /> : <SignUp />}
				<CustomButton
					id="toggle"
					label={this.state.label}
					type="button"
					onClick={this.toggleScreen}
				/>
			</div>
		);
	}
}

export default SignInSignUp;

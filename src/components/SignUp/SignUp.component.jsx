import React from "react";
import "./signup.styles.scss";

const SignUp = () => (
	<div className="signup">
		<div className="formwrap">
			<div className="title">Sign-up</div>
			<form id="signup">
				<div className="fields_wrapper">
					<div className="field">
						<label for="name">Full Name</label>
						<input type="text" id="name" />
					</div>
					<div className="field">
						<label for="email">Email Address</label>
						<input type="text" id="email" />
					</div>
					<div className="field">
						<label for="password">Password</label>
						<input type="password" id="password" />
					</div>
				</div>
				<div className="buttons">
					<button id="inup">Sign Up</button>
					<button id="change">Already have an account?</button>
				</div>
			</form>
		</div>
	</div>
);

export default SignUp;

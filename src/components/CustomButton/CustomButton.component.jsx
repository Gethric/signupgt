import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ id, label }) => (
	<div className="custombutton">
		<button id={id}>{label}</button>
	</div>
);

export default CustomButton;

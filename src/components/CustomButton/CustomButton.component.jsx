import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ className, id, label, type, onClick }) => (
	<div className="custombutton">
		<button className={className} id={id} type={type} onClick={onClick}>
			{label}
		</button>
	</div>
);

export default CustomButton;

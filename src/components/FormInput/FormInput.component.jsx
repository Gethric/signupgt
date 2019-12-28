import React from "react";
import "./forminput.styles.scss";

const FormInput = ({ name, type, label, handleChange }) => (
	<div className="forminput">
		<label htmlFor={name}>{label}</label>
		<input type={type} id={name} onChange={handleChange} />
	</div>
);

export default FormInput;

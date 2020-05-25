import React from "react";

const validationComponent = (props) => {
	const validText = "Text long enough";
	const invalidText = "Text too short";

	return <span>{props.textLength >= 5 ? validText : invalidText}</span>;
};

export default validationComponent;

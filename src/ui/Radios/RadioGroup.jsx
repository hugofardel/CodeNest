import React, { cloneElement } from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
	border: none;
	font-size: 1.2rem;
`;

const RadioGroup = ({ children, title, name, value, setValue }) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<StyledFieldset>
			<legend>{title}</legend>
			{childrenArray.map((radio) => {
				if (radio.type.name === "RadioButton") {
					return cloneElement(radio, {
						name,
						checked: value === radio.props.value,
						onChange: (e) => setValue(e.target.value),
					});
				} else {
					console.error("RadioGroup accept only RadioButton");
				}
			})}
		</StyledFieldset>
	);
};

export default RadioGroup;

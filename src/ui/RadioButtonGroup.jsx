import styled from "styled-components";
import RadioButton from "./RadioButton.jsx";

const StyledFieldset = styled.fieldset`
	border: none;
	font-size: 1.2rem;
`;

const RadioButtonGroup = ({ title, name, options, value, disabled = false, onChange }) => {
	return (
		<StyledFieldset>
			<legend>{title}</legend>
			{options?.map((option) => (
				<RadioButton
					key={option.value + option.label}
					id={option.value + option.label}
					name={name}
					value={option.value}
					label={option.label}
					disabled={disabled}
					checked={value === option.value}
					onChange={(e) => onChange(e.target.value)}
				/>
			))}
		</StyledFieldset>
	);
};

export default RadioButtonGroup;

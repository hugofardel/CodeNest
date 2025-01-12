import styled from "styled-components";

const ContainerRadio = styled.div`
	display: flex;
	gap: 10px;
	margin: 5px 0;
`;

const StyledRadio = styled.input`
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;

const RadioButton = ({ value, label, name, disabled, checked, onChange }) => {
	return (
		<ContainerRadio>
			<StyledRadio
				id={value}
				type="radio"
				checked={checked}
				onChange={onChange}
				value={value}
				name={name}
				disabled={disabled}
			/>
			<label htmlFor={value}>{label}</label>
		</ContainerRadio>
	);
};

export default RadioButton;

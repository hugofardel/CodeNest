import PropTypes from "prop-types";
import styled from "styled-components";

const SwitchWrapper = styled.div`
	display: inline-block;
	width: 60px;
	height: 34px;
`;
const SwitchCheckbox = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;
const SwitchLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	background-color: ${({ $isOn }) => ($isOn ? "#4caf50" : "#ccc")};
	cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
	opacity: ${({ $disabled }) => ($disabled ? "0.7" : "1")};
	border-radius: 34px;
	position: relative;
	transition: background-color 0.2s;
	&::after {
		content: "";
		position: absolute;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background-color: white;
		transition: transform 0.2s;
		transform: ${({ $isOn }) => ($isOn ? "translateX(32px)" : "translateX(2px)")};
	}
`;

const Switch = ({ isOn, onChange, disabled = false, ...rest }) => {
	function handleClick() {
		if (!disabled) onChange(!isOn);
	}
	return (
		<SwitchWrapper>
			<SwitchCheckbox
				type="checkbox"
				checked={isOn}
				role="switch"
				aria-checked={isOn}
				aria-label="switch"
				disabled={disabled}
				{...rest}
			/>
			<SwitchLabel $isOn={isOn} onClick={handleClick} $disabled={disabled} aria-hidden="true" />
		</SwitchWrapper>
	);
};

Switch.propTypes = {
	isOn: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

export default Switch;

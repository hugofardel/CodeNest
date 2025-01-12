import PropTypes from "prop-types";
import { BsCheckCircleFill, BsExclamationTriangleFill, BsFillXCircleFill, BsInfoCircleFill } from "react-icons/bs";
import styled, { css } from "styled-components";

const states = {
	info: css`
		& svg {
			color: var(--info-icon);
		}
	`,
	success: css`
		& svg {
			color: var(--success-icon);
		}
	`,
	warning: css`
		& svg {
			color: var(--warning-icon);
		}
	`,
	error: css`
		color: var(--error-icon);

		& svg {
			color: var(--error-icon);
		}
	`,
};

const StyledField = styled.div`
	display: grid;
	max-width: 350px;

	${({ $state }) =>
		$state === "error" &&
		css`
			input {
				border: 1px solid var(--error-border) !important;
			}
		`}
`;

const StyledLabel = styled.label`
	padding-bottom: 2px;
	margin-bottom: 2px;
`;

const StyledValidation = styled.div`
	font-size: 12px;
	margin-top: 2px;
	color: var(--text-grey-400);

	${({ $state }) => states[$state]}
`;

const SpanIcon = styled.span`
	margin-right: 4px;
	vertical-align: -1px;
`;

const Asterix = styled.span`
	color: var(--warning-icon);
`;

const ICONS = {
	none: "",
	info: <BsInfoCircleFill />,
	warning: <BsExclamationTriangleFill />,
	success: <BsCheckCircleFill />,
	error: <BsFillXCircleFill />,
};

const Field = ({ label, validationState = "none", validationMessage, required = false, children, ...rest }) => {
	return (
		<StyledField $state={validationState} {...rest}>
			<StyledLabel htmlFor="">
				{label} {required && <Asterix>*</Asterix>}
			</StyledLabel>
			{children}
			<StyledValidation $state={validationState}>
				<SpanIcon>{ICONS[validationState]}</SpanIcon>
				{validationMessage}
			</StyledValidation>
		</StyledField>
	);
};

Field.propTypes = {
	label: PropTypes.string,
	validationState: PropTypes.oneOf(["none", "info", "success", "warning", "error"]),
	validationMessage: PropTypes.string,
	required: PropTypes.bool,
	children: PropTypes.node,
};

export default Field;

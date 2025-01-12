import PropTypes from "prop-types";
import { BsInfoCircleFill, BsExclamationTriangleFill, BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import styled, { css } from "styled-components";

const intents = {
	info: css`
		background-color: var(--info-background);
		border-color: var(--info-border);
		& svg {
			color: var(--info-icon);
		}
	`,
	success: css`
		background-color: var(--success-background);
		border-color: var(--success-border);
		& svg {
			color: var(--success-icon);
		}
	`,
	warning: css`
		background-color: var(--warning-background);
		border-color: var(--warning-border);
		& svg {
			color: var(--warning-icon);
		}
	`,
	error: css`
		background-color: var(--error-background);
		border-color: var(--error-border);
		& svg {
			color: var(--error-icon);
		}
	`,
};

const StyledMessageBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid var(--info-border);
	background-color: var(--info-background);
	color: var(--text-grey-600);

	font-size: 14px;
	padding: 8px;

	padding-left: 12px;

	${({ $intent }) => intents[$intent]}
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 8px;
	font-size: 20px;
`;

const StyledBody = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	padding-right: 15px;
`;

const StyledTitle = styled.span`
	font-weight: bold;
	margin-right: 10px;
`;

const StyledClose = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;

	& > button {
		background: transparent;
		border: none;
		outline: none;
	}
`;

const StyledActions = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	padding-right: 12px;

	& > button {
		padding: 5px 8px;
		border: 1px solid #d1d1d1;
		background-color: white;
		color: rgb(36, 36, 36);
		font-size: 12px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		outline: none;

		&:hover {
			background-color: #f5f5f5;
		}
	}
`;

const MessageBar = ({ intent = "info", children, ...rest }) => {
	return (
		<StyledMessageBar $intent={intent} {...rest}>
			<IconContainer>
				{intent === "info" && <BsInfoCircleFill />}
				{intent === "warning" && <BsExclamationTriangleFill />}
				{intent === "success" && <BsCheckCircleFill />}
				{intent === "error" && <BsFillXCircleFill />}
			</IconContainer>
			{children}
		</StyledMessageBar>
	);
};

const Body = ({ children }) => {
	return <StyledBody>{children}</StyledBody>;
};

const Title = ({ children }) => {
	return <StyledTitle>{children}</StyledTitle>;
};

const Close = ({ children, ...rest }) => {
	return (
		<StyledClose>
			<button type="button" aria-label="close" {...rest}>
				{children || <TfiClose />}
			</button>
		</StyledClose>
	);
};

const Actions = ({ children }) => {
	return <StyledActions>{children}</StyledActions>;
};

MessageBar.Title = Title;
MessageBar.Body = Body;
MessageBar.Close = Close;
MessageBar.Actions = Actions;

MessageBar.propTypes = {
	intent: PropTypes.oneOf(["info", "success", "warning", "error"]),
};

export default MessageBar;

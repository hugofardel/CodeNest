import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const positions = {
	top: css`
		position: absolute;
		top: -5px;
		right: -5px;
	`,
	bottom: css`
		position: absolute;
		bottom: -5px;
		right: -5px;
	`,
};

const severities = {
	info: css`
		background-color: #e5f0fe;
		color: #3b82f6;
	`,
	success: css`
		background-color: rgba(228, 248, 240, 0.7);
		color: #1ea97c;
	`,
	warning: css`
		background-color: rgba(255, 242, 226, 0.7);
		color: #cc8925;
	`,
	error: css`
		background-color: rgba(255, 231, 230, 0.7);
		color: #ff5757;
	`,
};

const sizes = {
	small: css`
		font-size: 0.4rem;
		padding: 3px 5px;
	`,
	medium: css`
		font-size: 0.6rem;
		padding: 3px 5px;
	`,
	large: css`
		font-size: 0.8rem;
		padding: 5px 8px;
	`,
};

const StyledBadge = styled.div`
	border-radius: 10px;
	padding: 0 0.5rem;
	font-size: 1rem;
	font-weight: bold;
	background-color: #ef4444;
	color: white;
	border: 1px solid white;
	text-align: center;

	${({ position }) => positions[position]}
	${({ severity }) => severities[severity]}
	${({ size }) => sizes[size]}
`;

const Badge = ({ value, ...rest }) => {
	return <StyledBadge {...rest}>{value}</StyledBadge>;
};

Badge.propTypes = {
	value: PropTypes.string,
	severity: PropTypes.oneOf(["info", "success", "warning", "error"]),
	position: PropTypes.oneOf(["top", "bottom"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Badge;

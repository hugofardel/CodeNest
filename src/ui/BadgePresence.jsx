import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const listStatus = {
	available: css`
		background-color: #13a10e;
	`,
	away: css`
		background-color: #eaa300;
	`,
	busy: css`
		background-color: #d13438;
	`,
	offline: css`
		background-color: #616161;
	`,
};

const sizes = {
	small: css`
		height: 8px;
		width: 8px;
	`,
	medium: css`
		height: 12px;
		width: 12px;
	`,
	large: css`
		height: 18px;
		width: 18px;
	`,
};

const StyledBadgePresence = styled.div`
	border-radius: 50%;
	width: 15px;
	height: 15px;
	border: 1px solid white;
	position: absolute;
	bottom: 0px;
	right: 0px;

	${({ status }) => listStatus[status]}
	${({ size }) => sizes[size]}
`;

const BadgePresence = ({ status = "offline", size = "medium", ...rest }) => {
	return <StyledBadgePresence status={status} size={size} {...rest} />;
};

BadgePresence.propTypes = {
	status: PropTypes.oneOf(["available", "away", "busy", "offline"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default BadgePresence;

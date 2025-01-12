import { Children, cloneElement } from "react";
import styled from "styled-components";
import Avatar from "./Avatar.jsx";
import PropTypes from "prop-types";

const StyledAvatarGroup = styled.div`
	display: flex;
	align-items: center;

	& > *:not(:last-child) {
		margin-right: -10px;
	}
`;

const AvatarGroup = ({ size, shape, maxItems = null, children }) => {
	const childArray = Children.toArray(children);
	const visibleAvatars = maxItems ? childArray.slice(0, maxItems) : childArray;
	const extra = childArray.length - (maxItems || childArray.length);

	return (
		<StyledAvatarGroup>
			{visibleAvatars.map((child, index) => cloneElement(child, { size, shape, key: index }))}
			{extra > 0 && <Avatar size={size} shape={shape} name={`+${extra}`} rawName={true} />}
		</StyledAvatarGroup>
	);
};

AvatarGroup.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	shape: PropTypes.oneOf(["circle", "square"]),
	maxItems: PropTypes.number,
	children: PropTypes.node.isRequired,
};

export default AvatarGroup;

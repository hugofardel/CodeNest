import PropTypes from "prop-types";
import { Children, cloneElement, useState } from "react";
import styled, { css } from "styled-components";
import { getAvatarColor, getInitials } from "../helpers.js";

const sizes = {
	small: css`
		height: 25px;
		width: 25px;
		font-size: 0.8rem;
	`,
	medium: css`
		height: 40px;
		width: 40px;
		font-size: 1rem;
	`,
	large: css`
		height: 60px;
		width: 60px;
		font-size: 1.5rem;
	`,
};

const shapes = {
	circle: css`
		border-radius: 50%;
	`,
	square: css`
		border-radius: 10%;
	`,
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const StyledAvatar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background-color: ${({ $backgroundColor }) => ($backgroundColor ? $backgroundColor : "var(--color-indigo-700)")};
	border-radius: 50%;
	border: 1px solid white;
	width: 40px;
	height: 40px;
	overflow: hidden;

	${({ $size }) => sizes[$size]}
	${({ $shape }) => shapes[$shape]}
`;

const Img = styled.img`
	object-fit: cover;
	display: ${({ $loaded }) => ($loaded ? "block" : "none")};
`;

const Avatar = ({ name, src, alt, shape = "circle", size = "medium", rawName = false, children, ...rest }) => {
	const [loaded, setLoaded] = useState(false);
	const initials = getInitials(name);
	const backgroundColor = getAvatarColor(name);

	function handleOnLoad() {
		setLoaded(true);
	}

	return (
		<Wrapper>
			<StyledAvatar $shape={shape} $size={size} $backgroundColor={backgroundColor} {...rest}>
				{!loaded && (rawName ? name : initials)}
				<Img src={src} alt={alt} onLoad={handleOnLoad} $loaded={loaded} />
			</StyledAvatar>
			{Children.map(children, (child) =>
				cloneElement(child, {
					size: size,
				})
			)}
		</Wrapper>
	);
};

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	src: PropTypes.string,
	alt: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	shape: PropTypes.oneOf(["square", "circle"]),
	rawName: PropTypes.bool,
	children: PropTypes.node,
};

export default Avatar;

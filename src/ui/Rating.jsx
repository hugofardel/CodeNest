import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledRatingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledStar = styled(FaStar).withConfig({
	shouldForwardProp: (props) => !["full", "isReadOnly"].includes(props),
})`
	font-size: 3rem;
	stroke: black;
	stroke-width: 0.5rem;
	color: ${(props) => (props.full ? "#fdd663" : "transparent")};
	cursor: ${(props) => (props.isReadOnly ? "not-allowed" : "pointer")};
	transition: all 0.3s ease;
	filter: drop-shadow(0 0 0.15rem crimson);

	${({ isReadOnly }) =>
		!isReadOnly &&
		`
		&:hover{
			color: #fdd663
		}
	`}
`;

const Rating = ({ nbStars, note, handleChange, isReadOnly = false }) => {
	const [hoveredNote, setHoveredNote] = useState(note);

	function handleMouseEnter(index) {
		if (!isReadOnly) setHoveredNote(index);
	}

	function handleMouseLeave() {
		if (!isReadOnly) setHoveredNote(note);
	}

	function handleClick(index) {
		if (!isReadOnly && handleChange) handleChange(index + 1);
	}

	return (
		<StyledRatingContainer>
			{Array.from({ length: nbStars }).map((_, index) => (
				<StyledStar
					key={index}
					role="button"
					aria-label={`Rate ${index + 1} out of ${nbStars}`}
					full={index < hoveredNote}
					isReadOnly={isReadOnly}
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={() => handleMouseLeave()}
					onClick={() => handleClick(index)}
				/>
			))}
		</StyledRatingContainer>
	);
};

Rating.propTypes = {
	nbStars: PropTypes.number.isRequired,
	note: PropTypes.number.isRequired,
	handleChange: PropTypes.func,
	isReadOnly: PropTypes.bool,
};

export default Rating;

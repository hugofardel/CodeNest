import { useState } from "react";
import Button from "./Button.jsx";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu.jsx";
import PropTypes from "prop-types";

const ButtonContainer = styled.div`
	position: relative;
`;

const ButtonMenu = ({ text, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleOpen() {
		setIsOpen((prev) => !prev);
	}

	return (
		<ButtonContainer>
			<Button variation="secondary" onClick={toggleOpen}>
				{text}
			</Button>
			{isOpen && <DropdownMenu>{children}</DropdownMenu>}
		</ButtonContainer>
	);
};

ButtonMenu.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node,
};

export default ButtonMenu;

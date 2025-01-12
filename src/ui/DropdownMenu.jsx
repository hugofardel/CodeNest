import styled from "styled-components";

const DropdownMenu = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	padding: 4px;
	min-width: 96px;
	background-color: white;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.14);
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0);
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 14px;
	padding: 6px;
	cursor: pointer;

	&:hover {
		background-color: var(--color-grey-200);
	}
`;

DropdownMenu.Item = Item;

export default DropdownMenu;

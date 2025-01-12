import styled from "styled-components";
import MainNav from "./MainNav.jsx";

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	border-right: 1px solid var(--color-grey-100);

	width: 250px;
	padding: 3.2rem 2.4rem;
	flex-shrink: 0;
	transition: transform 0.3s ease;

	/* Mobile: hide sidebar */
	@media (max-width: 768px) {
		position: fixed;
		top: 60px;
		left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
		height: calc(100% - 60px);
		box-shadow: ${({ isOpen }) => (isOpen ? "2px 0 5px rgba(0, 0, 0, 0.5)" : "none")};
		background-color: #444;
	}
`;

function Sidebar() {
	return (
		<StyledSidebar>
			<MainNav />
		</StyledSidebar>
	);
}

export default Sidebar;

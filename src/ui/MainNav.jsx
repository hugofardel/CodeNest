import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: var(--color-grey-600);
		font-size: 1rem;
		padding: 0.8rem 1.6rem;
		transition: all 0.3s;
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		font-weight: 500;
		color: var(--color-brand-600);
		background-color: var(--color-grey-50);
		border-radius: var(--border-radius-sm);
	}
`;

function MainNav() {
	return (
		<NavList>
			<li>
				<StyledNavLink to="/">Home</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/buttons">Buttons</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/input">Input</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/field">Field</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/table">Table</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/tabs">Tabs</StyledNavLink>
			</li>
		</NavList>
	);
}

export default MainNav;

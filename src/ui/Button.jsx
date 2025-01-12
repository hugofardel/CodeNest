import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const sizes = {
	small: css`
		font-size: 0.8rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1rem;
		padding: 0.8rem 1.2rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
};

const variations = {
	primary: css`
		color: var(--color-brand-50);
		background-color: var(--color-brand-600);

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,
};

const StyledButton = styled.button.withConfig({
	shouldForwardProp: (prop) => !["size", "variation"].includes(prop),
})`
	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	${({ size = "medium" }) => sizes[size]}
	${({ variation = "primary" }) => variations[variation]}
`;

const Button = ({ size = "medium", variation = "primary", children, ...rest }) => {
	return (
		<StyledButton size={size} variation={variation} {...rest}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

export default Button;

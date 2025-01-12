import styled from "styled-components";

const Input = styled.input`
	border: 1px solid var(--color-grey-300);
	background-color: var(--color-grey-0);
	border-radius: var(--border-radius-sm);
	padding: 0.5rem 0.8rem;
	box-shadow: var(--shadow-sm);

	&[type="search"] {
		padding-left: 1.8rem;
		padding-right: 1.8rem;

		&::-webkit-search-decoration,
		&::-webkit-search-cancel-button,
		&::-webkit-search-results-button,
		&::-webkit-search-results-decoration {
			-webkit-appearance: none;
		}
	}

	&[disabled] {
		background-color: var(--color-grey-100);
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
		border-color: var(--color-brand-500);
	}
`;

export default Input;

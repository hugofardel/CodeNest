import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import Input from "./Input.jsx";
import { HiXMark } from "react-icons/hi2";
import { useRef } from "react";
import PropTypes from "prop-types";

const WrapperInput = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: max-content;
`;

const Icon = styled.div`
	position: absolute;
	font-size: 1rem;
	color: var(--color-grey-500);

	&.search-icon {
		left: 0.5rem;
	}

	&.clear-icon {
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
		cursor: pointer;
	}
`;

const InputSearch = ({
	value,
	onChange,
	placeholder = "Search...",
	searchIcon: CustomSearchIcon = CgSearch,
	clearIcon: CustomClearIcon = HiXMark,
}) => {
	const inputRef = useRef();

	function handleClickClear() {
		onChange?.("");
		inputRef.current?.focus();
	}

	function handleChangeInput(e) {
		onChange?.(e.target.value);
	}

	return (
		<WrapperInput>
			<Icon as={CustomSearchIcon} className="search-icon" />
			<Input
				type="search"
				placeholder={placeholder}
				ref={inputRef}
				value={value}
				onChange={handleChangeInput}
				aria-label="Search input"
			/>
			{value && (
				<Icon as={CustomClearIcon} className="clear-icon" onClick={handleClickClear} aria-label="Clear search input" />
			)}
		</WrapperInput>
	);
};

InputSearch.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	searchIcon: PropTypes.elementType,
	clearIcon: PropTypes.elementType,
};

export default InputSearch;

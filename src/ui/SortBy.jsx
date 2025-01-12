import styled from "styled-components";
import Select from "./Select.jsx";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const StyledSortBy = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const SortBy = ({ options = [] }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentSort = searchParams.get("sortBy") || "";

	function handleChangeSort(e) {
		searchParams.set("sortBy", e.target.value);
		setSearchParams(searchParams);
	}

	return (
		<StyledSortBy>
			<label htmlFor="sort-by">Sort by</label>
			<Select id="sort-by" value={currentSort} onChange={handleChangeSort}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</StyledSortBy>
	);
};

SortBy.propTypes = {
	options: PropTypes.array.isRequired,
};

export default SortBy;

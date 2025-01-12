import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ButtonGroup from "../ButtonGroup.jsx";
import { NB_ROWS_TABLE } from "../../constants.js";

const StyledPagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const PaginationButton = styled.button`
	background-color: var(--color-grey-50);
	color: inherit;
	border: none;
	border-radius: var(--border-radius-sm);
	font-weight: 500;
	font-size: 1.4rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding: 0.6rem 1.2rem;
	transition: all 0.3s;

	&:has(span:last-child) {
		padding-left: 0.4rem;
	}

	&:has(span:first-child) {
		padding-right: 0.4rem;
	}

	& svg {
		height: 1.8rem;
		width: 1.8rem;
	}

	&:hover:not(:disabled) {
		background-color: var(--color-brand-600);
		color: var(--color-brand-50);
	}
`;

const Pagination = ({ currentPage, nbPagesMax, previousPage, nextPage, nbResults }) => {
	return (
		<StyledPagination>
			<div>
				Showing <span>{(currentPage - 1) * NB_ROWS_TABLE + 1}</span> to{" "}
				<span>{currentPage === nbPagesMax ? nbResults : currentPage * NB_ROWS_TABLE}</span> of <span>{nbResults}</span>{" "}
				results
			</div>

			<ButtonGroup>
				<PaginationButton onClick={previousPage} disabled={currentPage === 1}>
					<HiChevronLeft /> <span>Previous</span>
				</PaginationButton>
				<PaginationButton disabled={currentPage >= nbPagesMax} onClick={nextPage}>
					<span>Next</span> <HiChevronRight />
				</PaginationButton>
			</ButtonGroup>
		</StyledPagination>
	);
};

export default Pagination;

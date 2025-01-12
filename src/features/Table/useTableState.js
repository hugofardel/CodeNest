import { useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { NB_ROWS_TABLE } from "../../constants.js";

export const useTableState = (datas = [], filters = []) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

	// Sort
	const sortedDatas = useMemo(() => {
		const sortBy = searchParams.get("sortBy");
		if (!sortBy) return datas;

		const [field, order] = sortBy.split("-");
		const modifier = order === "desc" ? 1 : -1;
		return [...datas].sort((a, b) => (a[field] - b[field]) * modifier);
	}, [datas, searchParams]);

	// Filter
	const filteredData = useMemo(() => {
		return filters.reduce((acc, filter) => {
			const valueFilter = searchParams.get(filter);
			if (valueFilter && valueFilter !== "all") {
				return acc.filter((item) => String(item[filter]) === String(valueFilter));
			}
			return acc;
		}, sortedDatas);
	}, [sortedDatas, filters, searchParams]);

	const nbPagesMax = Math.ceil(filteredData.length / NB_ROWS_TABLE);

	// Data to display on currentPage
	const rangeData = useMemo(() => {
		const from = (currentPage - 1) * NB_ROWS_TABLE;
		const to = from + NB_ROWS_TABLE;
		return filteredData.slice(from, to);
	}, [currentPage, filteredData]);

	useEffect(() => {
		if (currentPage < 1 || currentPage > nbPagesMax) {
			searchParams.set("page", 1);
			setSearchParams(searchParams);
		}
	}, [currentPage, searchParams, nbPagesMax, setSearchParams]);

	const nextPage = useCallback(() => {
		const next = currentPage >= nbPagesMax ? nbPagesMax : currentPage + 1;
		searchParams.set("page", next);
		setSearchParams(searchParams);
	}, [currentPage, nbPagesMax, searchParams, setSearchParams]);

	const previousPage = useCallback(() => {
		const previous = currentPage > 1 ? currentPage - 1 : 1;
		searchParams.set("page", previous);
		setSearchParams(searchParams);
	}, [currentPage, searchParams, setSearchParams]);

	return {
		nbResults: filteredData.length,
		currentPage,
		nbPagesMax,
		rangeData,
		nextPage,
		previousPage,
	};
};

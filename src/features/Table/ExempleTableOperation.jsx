import TableOperations from "../../ui/Table/TableOperations.jsx";
import SortBy from "../../ui/SortBy.jsx";
import Filters from "../../ui/Filters.jsx";

const ExempleTableOperation = () => {
	return (
		<TableOperations>
			<SortBy
				options={[
					{ value: "points-asc", label: "Points (asc)" },
					{ value: "points-desc", label: "Points (desc)" },
				]}
			/>
			<Filters
				filterField="tag"
				options={[
					{ value: "all", label: "All" },
					{ value: "discount", label: "Discount" },
					{ value: "no-discount", label: "No discount" },
				]}
			/>
		</TableOperations>
	);
};

export default ExempleTableOperation;

import { NB_ROWS_TABLE } from "../constants.js";
import ExempleRow from "../features/ExempleRow.jsx";
import Box from "../ui/Box.jsx";
import Pagination from "../ui/Table/Pagination.jsx";
import Table from "../ui/Table/Table.jsx";
import { useTableState } from "../features/Table/useTableState.js";
import ExempleTableOperation from "../features/Table/ExempleTableOperation.jsx";

const datas = [
	{ id: 1, position: 1, victories: 10, points: 2300, tag: "discount" },
	{ id: 2, position: 2, victories: 8, points: 1957, tag: "discount" },
	{ id: 3, position: 3, victories: 7, points: 1900, tag: "discount" },
	{ id: 4, position: 4, victories: 5, points: 15000, tag: "discount" },
	{ id: 5, position: 5, victories: 1, points: 800, tag: "no-discount" },
	{ id: 7, position: 6, victories: 0, points: 200, tag: "no-discount" },
	{ id: 8, position: 7, victories: 0, points: 10, tag: "no-discount" },
];

const TablePage = () => {
	const { rangeData, currentPage, nbPagesMax, previousPage, nextPage, nbResults } = useTableState(datas, [
		"victories",
		"points",
		"position",
		"tag",
	]);

	return (
		<div>
			<h1>Table page</h1>

			<Box>
				<h2>Table Custom (compound components)</h2>

				<ExempleTableOperation />
				<Table columns="1fr 1fr 1fr 1fr">
					<Table.Header>
						<div>Position</div>
						<div>Victories</div>
						<div>Points</div>
						<div>Tags</div>
					</Table.Header>

					<Table.Body data={rangeData} render={(data) => <ExempleRow key={data.id} data={data} />} />

					{datas.length > NB_ROWS_TABLE && (
						<Table.Footer>
							<Pagination
								datas={datas}
								currentPage={currentPage}
								nbPagesMax={nbPagesMax}
								previousPage={previousPage}
								nextPage={nextPage}
								nbResults={nbResults}
							/>
						</Table.Footer>
					)}
				</Table>
			</Box>
		</div>
	);
};

export default TablePage;

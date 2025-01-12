import styled from "styled-components";
import Table from "../ui/Table/Table.jsx";

const StyledPosition = styled.div`
	text-align: left;
`;

const StyledVictories = styled.div`
	text-align: left;
`;

const StyledPoints = styled.div`
	text-align: left;
`;

const ExempleRow = ({ data }) => {
	return (
		<Table.Row>
			<StyledPosition>{data.position}</StyledPosition>
			<StyledVictories>{data.victories}</StyledVictories>
			<StyledPoints>{data.points}</StyledPoints>
			<StyledPoints>{data.tag}</StyledPoints>
		</Table.Row>
	);
};

export default ExempleRow;

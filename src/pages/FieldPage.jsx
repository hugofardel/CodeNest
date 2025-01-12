import Box from "../ui/Box.jsx";
import Field from "../ui/Field.jsx";
import Input from "../ui/Input.jsx";

const FieldPage = () => {
	return (
		<>
			<h1>Field Page (form)</h1>
			<Box>
				<h2>Classique Field</h2>
				<br />
				<Field required={true} label="Exemple label" validationState="error" validationMessage="Error message">
					<Input type="text" placeholder="test" />
				</Field>
			</Box>
		</>
	);
};

export default FieldPage;

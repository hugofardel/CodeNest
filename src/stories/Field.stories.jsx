import Field from "../ui/Field.jsx";
import Input from "../ui/Input.jsx";

export default {
	title: "UI/Form/Field",
	component: Field,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	render: ({ ...args }) => {
		return (
			<Field
				label="Example label"
				validationState="success"
				validationMessage="This is a success message"
				required={true}
				{...args}
			>
				<Input type="text" placeholder="Placeholder" />
			</Field>
		);
	},
};

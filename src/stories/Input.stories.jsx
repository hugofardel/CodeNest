import Input from "../ui/Input.jsx";

export default {
	title: "UI/Form/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		placeholder: "Placeholder",
		type: "text",
	},
};

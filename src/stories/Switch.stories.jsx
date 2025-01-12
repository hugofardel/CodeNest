import Switch from "../ui/Switch.jsx";

export default {
	title: "UI/Form/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		isOn: true,
		disabled: false,
	},
};

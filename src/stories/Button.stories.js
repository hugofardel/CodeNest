import { fn } from "@storybook/test";
import Button from "../ui/Button.jsx";

export default {
	title: "UI/Buttons/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
};

export const Primary = {
	args: {
		variation: "primary",
		size: "large",
		children: "Primary large",
	},
};

export const Secondary = {
	args: {
		variation: "secondary",
		size: "medium",
		children: "Secondary button",
	},
};

export const Danger = {
	args: {
		variation: "danger",
		size: "medium",
		children: "Danger button",
	},
};

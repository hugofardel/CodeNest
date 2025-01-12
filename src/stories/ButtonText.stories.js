import { fn } from "@storybook/test";
import ButtonText from "../ui/ButtonText.jsx";

export default {
	title: "UI/Buttons/ButtonText",
	component: ButtonText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
};

export const Default = {
	args: {
		children: "Button text",
	},
};

import { fn } from "@storybook/test";
import { FaChevronRight } from "react-icons/fa";
import ButtonIcon from "../ui/ButtonIcon.jsx";

export default {
	title: "UI/Buttons/ButtonIcon",
	component: ButtonIcon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn() },
};

export const Default = {
	args: {
		children: <FaChevronRight />,
	},
};

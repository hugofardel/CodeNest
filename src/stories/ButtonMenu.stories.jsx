import { fn } from "@storybook/test";
import ButtonMenu from "../ui/ButtonMenu.jsx";
import DropdownMenu from "../ui/DropdownMenu.jsx";

export default {
	title: "UI/Buttons/ButtonMenu",
	component: ButtonMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: { onClick: fn(), text: "Dropdown" },
};

export const Default = {
	render: ({ ...args }) => {
		return (
			<ButtonMenu text={args.text}>
				<DropdownMenu.Item onClick={() => alert("Click detected!")}>Test</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => alert("Click detected!")}>Test 2</DropdownMenu.Item>
			</ButtonMenu>
		);
	},
};

import { useState } from "react";
import InputSearch from "../ui/InputSearch.jsx";

export default {
	title: "UI/Form/InputSearch",
	component: InputSearch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story, context) => {
			const [value, setValue] = useState("");
			return <Story {...context} value={value} onChange={(val) => setValue(val)} />;
		},
	],
	argTypes: {
		clearIcon: {
			control: {
				disable: true,
			},
		},
		searchIcon: {
			control: {
				disable: true,
			},
		},
	},
};

export const Default = ({ ...args }) => {
	const [value, setValue] = useState("initial value");

	const onChange = (val) => {
		setValue(val);
	};

	return <InputSearch value={value} onChange={onChange} {...args} />;
};

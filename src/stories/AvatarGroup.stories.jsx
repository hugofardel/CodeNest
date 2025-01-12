import Avatar from "../ui/Avatar.jsx";
import AvatarGroup from "../ui/AvatarGroup.jsx";

export default {
	title: "UI/AvatarGroup",
	component: AvatarGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "radio" },
			options: ["small", "medium", "large"],
		},
		shape: {
			control: { type: "radio" },
			options: ["circle", "square"],
		},
	},
};

export const Default = {
	render: ({ ...args }) => {
		return (
			<AvatarGroup maxItems={4} {...args}>
				<Avatar name="Albert Dupon" />
				<Avatar name="Jean Dupon" />
				<Avatar name="Albert Dupon" />
				<Avatar name="Jean Dupon" />
				<Avatar name="Albert Dupon" />
				<Avatar name="Jean Dupon" />
			</AvatarGroup>
		);
	},
};

import BadgePresence from "../ui/BadgePresence.jsx";

export default {
	title: "UI/Badge/BadgePresence",
	component: BadgePresence,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		status: "available",
	},
	render: ({ ...args }) => {
		return (
			<div style={{ position: "relative" }}>
				<BadgePresence status="available" size="medium" {...args} />
			</div>
		);
	},
};

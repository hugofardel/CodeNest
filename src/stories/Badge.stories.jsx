import Badge from "../ui/Badge.jsx";

export default {
	title: "UI/Badge/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		value: "Badge",
		size: "large",
	},
};

const BadgesContainer = ({ children }) => (
	<div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>{children}</div>
);

export const Size = {
	render: ({ ...args }) => {
		return (
			<BadgesContainer>
				<Badge value="Small" size="small" {...args} />
				<Badge value="Medium" size="medium" severity="success" {...args} />
				<Badge value="Large" size="large" severity="info" {...args} />
			</BadgesContainer>
		);
	},
};

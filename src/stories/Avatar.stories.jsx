import Avatar from "../ui/Avatar.jsx";
import Badge from "../ui/Badge.jsx";
import BadgePresence from "../ui/BadgePresence.jsx";

export default {
	title: "UI/Avatar",
	component: Avatar,
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

const AvatarsContainer = ({ children }) => (
	<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>{children}</div>
);

export const Initials = {
	args: {
		name: "John Doe",
	},
	parameters: {
		docs: {
			description: {
				story: "Display the initials using the prop *name*.",
			},
		},
	},
};

export const Size = {
	parameters: {
		docs: {
			description: {
				story: "3 different sizes available: *small*, *medium* and *large*.",
			},
		},
	},
	render: ({ ...args }) => {
		return (
			<AvatarsContainer>
				<Avatar size="small" name="Axel Bridou" {...args} />
				<Avatar size="medium" name="Ava Mind" {...args} />
				<Avatar size="large" name="Astrid Dupont" {...args} />
			</AvatarsContainer>
		);
	},
};

export const Shape = {
	parameters: {
		docs: {
			description: {
				story: "2 different shapes available *square* and *circle*.",
			},
		},
	},
	render: ({ ...args }) => {
		return (
			<AvatarsContainer>
				<Avatar shape="square" name="Alexis Bridou" {...args} />
				<Avatar shape="circle" name="Alexandre Caron" {...args} />
			</AvatarsContainer>
		);
	},
};

export const Image = {
	parameters: {
		docs: {
			description: {
				story: "While the image is loading, the initials will be display.",
			},
		},
	},
	args: {
		name: "Jack Smith",
		size: "large",
		src: "https://placehold.co/100",
		alt: "image",
	},
};

export const WithBadge = {
	parameters: {
		docs: {
			description: {
				story: "The *Avatar* Component can have children like *Badge* and *PresenceBadge*.",
			},
		},
	},
	render: ({ ...args }) => {
		return (
			<AvatarsContainer>
				<Avatar name="Alexis Bridou" size="small" {...args}>
					<Badge value="99+" position="top" />
					<BadgePresence status="available" />
				</Avatar>

				<Avatar name="Jean Valjean" {...args}>
					<Badge value="99+" position="top" />
					<BadgePresence status="available" />
				</Avatar>

				<Avatar name="Quentin Durand" size="large" {...args}>
					<Badge value="99+" position="top" />
					<BadgePresence status="available" />
				</Avatar>
			</AvatarsContainer>
		);
	},
};

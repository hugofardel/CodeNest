import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
	base: "light",
	brandTitle: "CodeNest",
});

addons.setConfig({
	theme,
	sidebar: {
		showRoots: false,
	},
});

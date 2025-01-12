import GlobalStyles from "../src/styles/GlobalStyles.js";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [
		withThemeFromJSXProvider({
			GlobalStyles,
		}),
	],
};

export default preview;

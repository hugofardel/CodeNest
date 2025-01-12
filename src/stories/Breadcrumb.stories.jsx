import Breadcrumb from "../ui/Breadcrumb.jsx";
import { MemoryRouter } from "react-router-dom";

export default {
	title: "UI/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<MemoryRouter initialEntries={["/home/products/product1/description"]}>
				<Story />
			</MemoryRouter>
		),
	],
	args: {
		separator: "/",
		maxItems: 4,
	},
};

export const Default = {
	args: {
		separator: "/",
		maxItems: 4,
	},
};

export const WithCustomSeparator = {
	args: {
		separator: ">",
		maxItems: 4,
	},
};

export const LongBreadcrumbs = {
	args: {
		separator: "/",
		maxItems: 3,
	},
};

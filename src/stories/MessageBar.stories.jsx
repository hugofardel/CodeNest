import MessageBar from "../ui/MessageBar.jsx";

export default {
	title: "UI/MessageBar",
	component: MessageBar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export const Default = {
	render: ({ ...args }) => {
		return (
			<MessageBar {...args}>
				<MessageBar.Body>
					<MessageBar.Title>Descriptive title</MessageBar.Title>
					Message providing information to the user with actionable insights.
				</MessageBar.Body>
				<MessageBar.Actions>
					<button onClick={() => alert("test click confirm")}>Confirmer</button>
					<button>Annuler</button>
				</MessageBar.Actions>
				<MessageBar.Close onClick={() => alert("close message")} />
			</MessageBar>
		);
	},
};

import Box from "../ui/Box.jsx";
import Row from "../ui/Row.jsx";
import Button from "../ui/Button.jsx";
import ButtonGroup from "../ui/ButtonGroup.jsx";
import ButtonIcon from "../ui/ButtonIcon.jsx";
import ButtonMenu from "../ui/ButtonMenu.jsx";
import ButtonText from "../ui/ButtonText.jsx";
import DropdownMenu from "../ui/DropdownMenu.jsx";

const ButtonPage = () => {
	return (
		<>
			<h1>Buttons</h1>
			<Row type="vertical">
				<Box>
					<h2>Buttons with text</h2>
					<ButtonText>&larr; Back</ButtonText>
				</Box>

				<Box>
					<h2>Classic button</h2>

					<ButtonGroup>
						<Button>Bienvenue</Button>
						<Button variation="secondary" size="small">
							Bienvenue
						</Button>
						<Button variation="danger" size="large">
							Bienvenue
						</Button>
					</ButtonGroup>
				</Box>

				<Box>
					<h2>Icon button</h2>
					<ButtonIcon>&larr;</ButtonIcon>
				</Box>

				<Box>
					<h2>Menu button</h2>
					<ButtonMenu text="button menu">
						<DropdownMenu.Item onClick={() => alert("Click detected !")}>Test</DropdownMenu.Item>
						<DropdownMenu.Item onClick={() => alert("Click detected !")}>Test 2</DropdownMenu.Item>
					</ButtonMenu>
				</Box>
			</Row>
		</>
	);
};

export default ButtonPage;

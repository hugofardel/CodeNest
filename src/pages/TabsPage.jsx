import Tabs from "../ui/Tabs/Tabs.jsx";
import Tab from "../ui/Tabs/Tab.jsx";
import Box from "../ui/Box.jsx";

const TabPage = () => {
	return (
		<Box>
			<Tabs defaultTabIndex={0}>
				<Tab key="first" title={"Tab 1"}>
					<h3>Content first tab</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit consequuntur ipsum voluptatem
						molestiae expedita beatae tenetur recusandae rem qui obcaecati, modi libero eligendi aliquam accusantium
						necessitatibus ratione blanditiis ad.
					</p>
				</Tab>
				<Tab key="second" title={"Tab 2"}>
					<h3>Content second tab</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus impedit alias, aut doloremque
						quisquam cumque dolorem harum ratione quis veniam nostrum quod explicabo sunt autem est dolores reiciendis
						deserunt eos?
					</p>
				</Tab>
				<Tab key="third" title={"Tab 3"}>
					<h3>Content third tab</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quae. Possimus voluptatibus, sint similique
						iusto aspernatur nulla repellat dolor aut quaerat libero velit delectus eius eaque? Rem corporis ducimus
						dolore!
					</p>
				</Tab>
			</Tabs>
		</Box>
	);
};

export default TabPage;

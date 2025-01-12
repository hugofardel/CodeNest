import { useState } from "react";
import Box from "../ui/Box.jsx";
import Input from "../ui/Input.jsx";
import RadioButtonGroup from "../ui/RadioButtonGroup.jsx";
import InputSearch from "../ui/InputSearch.jsx";
import RadioGroup from "../ui/Radios/RadioGroup.jsx";
import RadioButton from "../ui/Radios/RadioButton.jsx";
import { RiContactsLine } from "react-icons/ri";
import Rating from "../ui/Rating.jsx";
import Switch from "../ui/Switch.jsx";

const options = [
	{ value: "orange", label: "orange" },
	{ value: "apple", label: "apple" },
	{ value: "banana", label: "banana" },
];

const InputPage = () => {
	const [fruit, setFruit] = useState("");
	const [sport, setSport] = useState("");
	const [search, setSearch] = useState("");
	const [searchContact, setSearchContact] = useState("");
	const [note, setNote] = useState(3);
	const [switchState, setSwitchState] = useState(false);

	return (
		<>
			<h1>Input page</h1>

			<Box>
				<h2>Input text</h2>
				<Input type="text" placeholder="simple input" />
			</Box>

			<Box>
				<h2>Search input</h2>
				<InputSearch value={search} onChange={setSearch} />
				<br />
				<br />
				<br />
				<h2>Search input customisable Search icon</h2>
				<InputSearch value={searchContact} onChange={setSearchContact} searchIcon={RiContactsLine} />
			</Box>

			<Box>
				<h2>Radio Group Button</h2>
				<RadioButtonGroup
					title="Selectionner un fruit"
					name="fruits"
					options={options}
					value={fruit}
					onChange={setFruit}
				/>
			</Box>

			<Box>
				<h2>Radio Group Button (new version)</h2>
				<RadioGroup title="Selectionner un sport" name="sports" value={sport} setValue={setSport}>
					<RadioButton label="football" value="football" />
					<RadioButton label="handball" value="handball" />
					<RadioButton label="tennis" value="tennis" disabled={true} />
				</RadioGroup>
			</Box>

			<Box>
				<h2>Interaactive Rating</h2>
				<Rating nbStars={5} note={note} handleChange={setNote} />
				<br />
				<br />
				<br />
				<h2>ReadOnly Rating</h2>
				<Rating nbStars={5} note={note} isReadOnly={true} />
			</Box>

			<Box>
				<h2>Switch</h2>
				<Switch isOn={switchState} onChange={setSwitchState} />
			</Box>
		</>
	);
};

export default InputPage;

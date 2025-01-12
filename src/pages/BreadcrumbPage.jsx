import Avatar from "../ui/Avatar.jsx";
import Breadcrumb from "../ui/Breadcrumb.jsx";
import Badge from "../ui/Badge.jsx";
import ReactSvg from "../assets/react.svg";

const BreadcrumbPage = () => {
	return (
		<div>
			<h1>Breadcrumb</h1>
			<Breadcrumb />
			<Avatar name="Patrick    Joe Darmand  að╬Ï(┌" />
			<Avatar name="Patrick" />
			<Avatar name="Antoine Daniel" src={ReactSvg} alt="React" />

			<Avatar name="test test">
				<Badge value="99" position="top" />
			</Avatar>
		</div>
	);
};

export default BreadcrumbPage;

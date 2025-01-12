import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const routeTitles = {
	"": "Accueil",
	features: "Nos fonctionnalités",
	security: "Sécurité",
	contact: "Contactez-nous",
};

const Ul = styled.ul`
	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: row;
	gap: 1rem;

	li:last-child {
		font-weight: bold;
	}

	a {
		text-decoration: underline;
	}
`;

const StyledButton = styled.button`
	padding: 0 0.5rem;
	background: transparent;
	border: none;

	&:hover {
		background: var(--color-grey-200);
	}
`;

const Breadcrumb = ({ separator = "/", maxItems = 4 }) => {
	const [showAll, setShowAll] = useState(false);
	const location = useLocation();
	const paths = location.pathname.split("/").slice(1);

	const breadcrumbs = paths.map((p, index) => ({
		title: routeTitles[p] || p,
		link: `/${paths.slice(0, index + 1).join("/")}`,
	}));

	const shouldTruncate = breadcrumbs.length > maxItems;
	const visibleBreadcrumbs = showAll
		? breadcrumbs
		: shouldTruncate
		? [breadcrumbs[0], { title: "...", isButton: true }, ...breadcrumbs.slice(-maxItems + 2)]
		: breadcrumbs;

	const handleShowAll = () => setShowAll(true);

	return (
		<div>
			<Ul>
				{visibleBreadcrumbs.map((b, index) =>
					b.isButton ? (
						<Fragment key={index}>
							<li>
								<StyledButton onClick={handleShowAll}>{b.title}</StyledButton>
							</li>
							<li>{separator}</li>
						</Fragment>
					) : index !== visibleBreadcrumbs.length - 1 ? (
						<Fragment key={index}>
							<li>
								<Link to={b.link}>{b.title}</Link>
							</li>
							<li>{separator}</li>
						</Fragment>
					) : (
						<li key={index}>{b.title}</li>
					)
				)}
			</Ul>
		</div>
	);
};

Breadcrumb.propTypes = {
	separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	maxItems: PropTypes.number,
};

export default Breadcrumb;

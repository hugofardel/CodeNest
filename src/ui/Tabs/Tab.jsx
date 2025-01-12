import PropTypes from "prop-types";

const Tab = ({ children }) => {
	return <div>{children}</div>;
};

Tab.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Tab;

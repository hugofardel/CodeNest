import styled from "styled-components";
import { useTabs } from "./useTabs.js";
import PropTypes from "prop-types";

const ContainerTabs = styled.div`
	padding: 0.5rem 1.4rem;
	border: 1px solid var(--color-grey-200);
	border-radius: 12px;
	width: 100%;
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	position: relative;
	border-bottom: 1px solid var(--color-grey-200);
	padding: 0.5rem 0;
`;

const TabButton = styled.button`
	border: none;
	background: none;
	color: var(--color-grey-500);
	transition: all 0.3s ease-in-out;
	font-weight: 400;
	font-size: 1.2rem;

	&.active-tab {
		color: var(--color-brand-600);
	}

	&.active-tab ~ {
		transform: translateX(calc(var(--tab-index, 0) * 100%));
		width: 100%;
	}

	&:focus {
		outline: none;
	}
`;

const Underline = styled.div`
	position: absolute;
	bottom: -1px;
	height: 2px;
	background-color: var(--color-brand-600);
	transition: transform 0.3s ease, width 0.3s ease;
	width: ${({ $width }) => $width}px;
	transform: translateX(${({ $left }) => $left}px);
`;

const TabContent = styled.section`
	padding: 1.5rem 0;
	color: var(--color-grey-500);
`;

const Tabs = ({ children, defaultTabIndex = 0 }) => {
	const { childrenArray, activeTab, underlineStyle, activeChild, handleChange, tabsRef } = useTabs(
		children,
		defaultTabIndex
	);

	return (
		<ContainerTabs>
			<StyledHeader role="tablist">
				{childrenArray.map((tab, index) => (
					<TabButton
						key={tab.key}
						role="tab"
						aria-selected={tab.key === activeTab}
						className={tab.key === activeTab ? "active-tab" : "inactive-tab"}
						onClick={() => handleChange(tab.key, index)}
						ref={(el) => (tabsRef.current[index] = el)}
					>
						{tab.props.title}
					</TabButton>
				))}
				<Underline $left={underlineStyle.left} $width={underlineStyle.width} />
			</StyledHeader>
			<TabContent role="tabpanel">{activeChild}</TabContent>
		</ContainerTabs>
	);
};

Tabs.propTypes = {
	children: PropTypes.node.isRequired,
	defaultTabIndex: PropTypes.number,
};

export default Tabs;

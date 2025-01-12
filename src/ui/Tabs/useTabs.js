import { Children, useEffect, useRef, useState } from "react";

export function useTabs(children, defaultTabIndex) {
	const childrenArray = Children.toArray(children);
	const [activeTab, setActiveTab] = useState(childrenArray[defaultTabIndex]?.key || null);
	const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
	const tabsRef = useRef([]);
	const activeChild = childrenArray.find((tab) => tab.key === activeTab);

	useEffect(() => {
		updateUnderlineStyle(defaultTabIndex);
	}, [defaultTabIndex]);

	function handleChange(newTabKey, index) {
		setActiveTab(newTabKey);
		updateUnderlineStyle(index);
	}

	function updateUnderlineStyle(index) {
		const tabElement = tabsRef.current[index];
		if (tabElement) {
			setUnderlineStyle({
				left: tabElement.offsetLeft,
				width: tabElement.offsetWidth,
			});
		}
	}

	return {
		childrenArray,
		activeTab,
		underlineStyle,
		activeChild,
		handleChange,
		tabsRef,
	};
}

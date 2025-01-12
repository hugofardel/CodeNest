import { AVATAR_COLORS } from "./constants.js";

export function getInitials(name) {
	if (!name) return "";

	const words = name.trim().split(/\s+/);
	const upper = words.map((word) => word.charAt(0)?.toUpperCase());
	return upper.slice(0, 2);
}

function stringToHash(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
		hash = hash & hash;
	}
	return hash;
}

export function getAvatarColor(name) {
	const hash = stringToHash(name);
	const index = Math.abs(hash) % AVATAR_COLORS.length;
	return AVATAR_COLORS[index];
}

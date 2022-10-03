const baseColors = {
	dark: '#070600',
	mellow: '#ffbf81',
	warm: '#d16666',
	blue: '#5762d5',
	light: '#ffffff'
};

function lightenHex(hex: string, amount: number) {
	const num = parseInt(hex.slice(1), 16);
	const amt = Math.round(2.55 * amount);
	const R = (num >> 16) + amt;
	const B = ((num >> 8) & 0x00ff) + amt;
	const G = (num & 0x0000ff) + amt;
	return (
		'#' +
		(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 + (G < 255 ? (G < 1 ? 0 : G) : 255))
			.toString(16)
			.slice(1)
	);
}

export const MeetUpColorsHex = {
	...baseColors,
	...(Object.keys(baseColors).reduce((acc, key) => {
		// @ts-ignore
		acc[key + '-100'] = lightenHex(baseColors[key], 100);
		// @ts-ignore
		acc[key + '-200'] = lightenHex(baseColors[key], 80);
		// @ts-ignore
		acc[key + '-300'] = lightenHex(baseColors[key], 60);
		// @ts-ignore
		acc[key + '-400'] = lightenHex(baseColors[key], 40);
		// @ts-ignore
		acc[key + '-500'] = lightenHex(baseColors[key], 20);
		// @ts-ignore
		acc[key + '-600'] = lightenHex(baseColors[key], 10);
		// @ts-ignore
		acc[key + '-700'] = lightenHex(baseColors[key], 5);
		// @ts-ignore
		acc[key + '-800'] = lightenHex(baseColors[key], 2);
		// @ts-ignore
		acc[key + '-900'] = lightenHex(baseColors[key], 1);
		return acc as Record<`${keyof typeof baseColors}-${100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`, string>;
	}, {}) as Record<`${keyof typeof baseColors}-${100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`, string>)
};

/**
 * MeetUp valid tailwind color variables.
 */
export type MeetUpColor = keyof typeof MeetUpColorsHex;

/*
 * Tailwind color configuration.
 */
export const TailwindAdapter = Object.entries(MeetUpColorsHex).reduce((acc, [key, value]) => {
	// @ts-ignore - TS doesn't like computed keys, but i do 😘
	acc[key] = value;
	return acc;
}, {} as Record<MeetUpColor, string>);

/**
 * Tailwind safelist configuration.
 */
export const TailwindSafelist = Object.keys(MeetUpColorsHex).map((key) => `bg-${key}`) as `bg-${MeetUpColor}`[];

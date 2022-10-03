/**
 * MeetUp color palette hex codes.
 */
export enum PaletteHex {
	dark = '#070600',
	mellow = '#ffbf81',
	warm = '#d16666',
	blue = '#5762d5',
	light = '#ffffff'
}

/**
 * MeetUp valid SCSS color variables.
 */
export type Palette = keyof typeof PaletteHex;

/*
 * Tailwind color configuration.
 */
export const TailwindAdapter = Object.entries(PaletteHex).reduce((acc, [key, value]) => {
	// @ts-ignore
	acc[key] = value;
	return acc;
}, {} as Record<Palette, string>);

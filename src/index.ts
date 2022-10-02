/**
 * MeetUp color palette hex codes.
 */
export enum PaletteHex {
	dark = '#262626',
	light = '#f9f5e3',
	green = '#499167',
	pink = '#ef9cda',
	flame = '#d36135'
}

/**
 * MeetUp valid SCSS color variables.
 */
export type Palette = keyof typeof PaletteHex;

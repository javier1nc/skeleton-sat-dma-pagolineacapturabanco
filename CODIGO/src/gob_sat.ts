// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const gobsat: CustomThemeConfig = {
	name: 'Gob Sat',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Montserrat`,
		"--theme-font-family-heading": `Montserrat`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0057b8
		"--color-primary-50": "217 230 244", // #d9e6f4
		"--color-primary-100": "204 221 241", // #ccddf1
		"--color-primary-200": "191 213 237", // #bfd5ed
		"--color-primary-300": "153 188 227", // #99bce3
		"--color-primary-400": "77 137 205", // #4d89cd
		"--color-primary-500": "0 87 184", // #0057b8
		"--color-primary-600": "0 78 166", // #004ea6
		"--color-primary-700": "0 65 138", // #00418a
		"--color-primary-800": "0 52 110", // #00346e
		"--color-primary-900": "0 43 90", // #002b5a
		// secondary | #b9975b
		"--color-secondary-50": "245 239 230", // #f5efe6
		"--color-secondary-100": "241 234 222", // #f1eade
		"--color-secondary-200": "238 229 214", // #eee5d6
		"--color-secondary-300": "227 213 189", // #e3d5bd
		"--color-secondary-400": "206 182 140", // #ceb68c
		"--color-secondary-500": "185 151 91", // #b9975b
		"--color-secondary-600": "167 136 82", // #a78852
		"--color-secondary-700": "139 113 68", // #8b7144
		"--color-secondary-800": "111 91 55", // #6f5b37
		"--color-secondary-900": "91 74 45", // #5b4a2d
		// tertiary | #bce8f1
		"--color-tertiary-50": "245 252 253", // #f5fcfd
		"--color-tertiary-100": "242 250 252", // #f2fafc
		"--color-tertiary-200": "238 249 252", // #eef9fc
		"--color-tertiary-300": "228 246 249", // #e4f6f9
		"--color-tertiary-400": "208 239 245", // #d0eff5
		"--color-tertiary-500": "188 232 241", // #bce8f1
		"--color-tertiary-600": "169 209 217", // #a9d1d9
		"--color-tertiary-700": "141 174 181", // #8daeb5
		"--color-tertiary-800": "113 139 145", // #718b91
		"--color-tertiary-900": "92 114 118", // #5c7276
		// success | #d6e9c6
		"--color-success-50": "249 252 246", // #f9fcf6
		"--color-success-100": "247 251 244", // #f7fbf4
		"--color-success-200": "245 250 241", // #f5faf1
		"--color-success-300": "239 246 232", // #eff6e8
		"--color-success-400": "226 240 215", // #e2f0d7
		"--color-success-500": "214 233 198", // #d6e9c6
		"--color-success-600": "193 210 178", // #c1d2b2
		"--color-success-700": "161 175 149", // #a1af95
		"--color-success-800": "128 140 119", // #808c77
		"--color-success-900": "105 114 97", // #697261
		// warning | #faebcc
		"--color-warning-50": "254 252 247", // #fefcf7
		"--color-warning-100": "254 251 245", // #fefbf5
		"--color-warning-200": "254 250 242", // #fefaf2
		"--color-warning-300": "253 247 235", // #fdf7eb
		"--color-warning-400": "252 241 219", // #fcf1db
		"--color-warning-500": "250 235 204", // #faebcc
		"--color-warning-600": "225 212 184", // #e1d4b8
		"--color-warning-700": "188 176 153", // #bcb099
		"--color-warning-800": "150 141 122", // #968d7a
		"--color-warning-900": "123 115 100", // #7b7364
		// error | #D0021B
		"--color-error-50": "248 217 221", // #f8d9dd
		"--color-error-100": "246 204 209", // #f6ccd1
		"--color-error-200": "243 192 198", // #f3c0c6
		"--color-error-300": "236 154 164", // #ec9aa4
		"--color-error-400": "222 78 95", // #de4e5f
		"--color-error-500": "208 2 27", // #D0021B
		"--color-error-600": "187 2 24", // #bb0218
		"--color-error-700": "156 2 20", // #9c0214
		"--color-error-800": "125 1 16", // #7d0110
		"--color-error-900": "102 1 13", // #66010d
		// surface | #9b2242
		"--color-surface-50": "240 240 240", // #f0dee3
		"--color-surface-100": "235 211 217", // #ebd3d9
		"--color-surface-200": "230 200 208", // #e6c8d0
		"--color-surface-300": "215 167 179", // #d7a7b3
		"--color-surface-400": "185 100 123", // #b9647b
		"--color-surface-500": "155 34 66", // #9b2242
		"--color-surface-600": "140 31 59", // #8c1f3b
		"--color-surface-700": "116 26 50", // #741a32
		"--color-surface-800": "97 18 50", // #611232
		"--color-surface-900": "76 17 32", // #4c1120
	}

}
import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'inner-block-text-animation') },
	{ name: 'style', title: __('Style', 'inner-block-text-animation') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
]

export const innerBlocksTemplate = [
	['core/heading', { level: 4, content: __('This Is Animated Text', 'inner-block-text-animation') }]
];

export const allowedInnerBlocks = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/quote',
	'core/pullquote',
	'core/preformatted',
	'core/verse',
	'core/code'
];

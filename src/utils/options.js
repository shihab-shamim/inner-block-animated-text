import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'inner-block-text-animation') },
	{ name: 'style', title: __('Style', 'inner-block-text-animation') }
];

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

export const containerDefaults = {
	background: { type: 'solid', color: '#F1F5F9' },
	padding: { top: '50px', right: '50px', bottom: '50px', left: '50px' },
	margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
	radius: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
	border: {}
};

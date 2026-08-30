import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

import { allowedInnerBlocks } from './options';
import { getAnimationProps } from './animation';

const isSupported = (name) => allowedInnerBlocks.includes(name);

/**
 * Store each element's animation config on the inner block itself, so it survives
 * reordering, deletion of a sibling and a reload (Sections 2 and 11).
 */
addFilter('blocks.registerBlockType', 'ibta/animation-attribute', (settings, name) => {
	if (!isSupported(name)) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			ibtaAnimation: { type: 'object' }
		}
	};
});

/**
 * Editor preview, built from the same helper as the save output (Section 15).
 */
addFilter('editor.BlockListBlock', 'ibta/animation-preview', createHigherOrderComponent((BlockListBlock) => (props) => {
	const { name, attributes, wrapperProps } = props;

	if (!isSupported(name) || !attributes?.ibtaAnimation?.type) {
		return <BlockListBlock {...props} />;
	}

	const { className, style, dataset } = getAnimationProps(attributes);

	return <BlockListBlock {...props}
		className={[props.className, className].filter(Boolean).join(' ')}
		wrapperProps={{ ...wrapperProps, ...dataset, style: { ...wrapperProps?.style, ...style } }}
	/>;
}, 'ibtaAnimationPreview'));

/**
 * Save output. Only fields in the selected animation's mapping are emitted (Section 8, rule 3),
 * and a block with no animation is left completely untouched.
 */
addFilter('blocks.getSaveContent.extraProps', 'ibta/animation-save', (extraProps, blockType, attributes) => {
	if (!isSupported(blockType?.name) || !attributes?.ibtaAnimation?.type) {
		return extraProps;
	}

	const { className, style, dataset } = getAnimationProps(attributes);

	return {
		...extraProps,
		...dataset,
		className: [extraProps.className, className].filter(Boolean).join(' '),
		style: { ...extraProps.style, ...style }
	};
});

import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { Button, ColorPalette, GradientPicker, RangeControl, SelectControl, TextControl, ToggleControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

import { ANIMATION_OPTIONS, getElementAnimation, getFieldValue, getVisibleFields } from '../../../../utils/animation';

const easingOptions = [
	{ label: 'linear', value: 'linear' },
	{ label: 'ease', value: 'ease' },
	{ label: 'ease-in', value: 'ease-in' },
	{ label: 'ease-out', value: 'ease-out' },
	{ label: 'ease-in-out', value: 'ease-in-out' },
	{ label: __('Back Out', 'inner-block-text-animation'), value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
	{ label: __('Smooth', 'inner-block-text-animation'), value: 'cubic-bezier(0.65, 0, 0.35, 1)' }
];

const directionOptions = ['up', 'down', 'left', 'right'].map(v => ({ label: v, value: v }));
const splitByOptions = ['none', 'character', 'word', 'line'].map(v => ({ label: v, value: v }));
const separatorOptions = ['none', 'comma', 'space', 'dot'].map(v => ({ label: v, value: v }));

const AnimationControls = ({ element, blockAttributes }) => {
	const { updateBlockAttributes } = useDispatch(blockEditorStore);

	const animation = getElementAnimation(element.attributes, blockAttributes);
	const fields = getVisibleFields(animation);
	const value = (field) => getFieldValue(animation, field);

	// writes only this element's animation object, leaving every sibling untouched
	const setField = (field, next) => updateBlockAttributes(element.clientId, {
		ibtaAnimation: { ...(element.attributes?.ibtaAnimation || {}), [field]: next }
	});

	const range = (field, label, min, max, step) => <RangeControl key={field} className='mt10'
		label={label} value={value(field)} min={min} max={max} step={step}
		onChange={(next) => setField(field, next)} __nextHasNoMarginBottom />;

	const select = (field, label, options) => <SelectControl key={field} className='mt10'
		label={label} value={value(field)} options={options}
		onChange={(next) => setField(field, next)} __nextHasNoMarginBottom />;

	const text = (field, label) => <TextControl key={field} className='mt10'
		label={label} value={value(field)}
		onChange={(next) => setField(field, next)} __nextHasNoMarginBottom />;

	const toggle = (field, label) => <ToggleControl key={field} className='mt10'
		label={label} checked={!!value(field)}
		onChange={(next) => setField(field, next)} __nextHasNoMarginBottom />;

	const color = (field, label) => <div key={field} className='mt10'>
		<p className='ibtaAnimationLabel'>{label}</p>
		<ColorPalette value={value(field)} onChange={(next) => setField(field, next)} />
	</div>;

	const words = () => {
		const list = value('words') || [];

		return <div key='words' className='mt10'>
			<p className='ibtaAnimationLabel'>{__('Words', 'inner-block-text-animation')}</p>

			{list.map((word, i) => <div key={i} className='ibtaAnimationWord'>
				<TextControl value={word} onChange={(next) => setField('words', list.map((w, wi) => wi === i ? next : w))} __nextHasNoMarginBottom />

				<Button icon='trash' label={__('Remove', 'inner-block-text-animation')} onClick={() => setField('words', list.filter((w, wi) => wi !== i))} />
			</div>)}

			<Button variant='secondary' onClick={() => setField('words', [...list, ''])}>{__('Add Word', 'inner-block-text-animation')}</Button>
		</div>;
	};

	const renderField = (field) => {
		switch (field) {
			case 'duration': return range(field, __('Duration (s)', 'inner-block-text-animation'), 0.1, 10, 0.1);
			case 'delay': return range(field, __('Delay (s)', 'inner-block-text-animation'), 0, 10, 0.1);
			case 'easing': return select(field, __('Easing', 'inner-block-text-animation'), easingOptions);
			case 'distance': return range(field, __('Distance (px)', 'inner-block-text-animation'), 0, 300, 1);
			case 'scale': return range(field, __('Scale', 'inner-block-text-animation'), 0.1, 3, 0.05);
			case 'angle': return range(field, __('Angle (deg)', 'inner-block-text-animation'), -180, 180, 1);
			case 'perspective': return range(field, __('Perspective (px)', 'inner-block-text-animation'), 100, 2000, 10);
			case 'blurAmount': return range(field, __('Blur (px)', 'inner-block-text-animation'), 0, 40, 1);
			case 'direction': return select(field, __('Direction', 'inner-block-text-animation'), directionOptions);
			case 'splitBy': return select(field, __('Split By', 'inner-block-text-animation'), splitByOptions);
			case 'stagger': return range(field, __('Stagger (s)', 'inner-block-text-animation'), 0, 1, 0.01);
			case 'amplitude': return range(field, __('Amplitude (px)', 'inner-block-text-animation'), 1, 100, 1);
			case 'intensity': return range(field, __('Intensity (%)', 'inner-block-text-animation'), 0, 100, 1);
			case 'typingSpeed': return range(field, __('Typing Speed (ms)', 'inner-block-text-animation'), 10, 500, 5);
			case 'cursor': return toggle(field, __('Cursor', 'inner-block-text-animation'));
			case 'cursorChar': return text(field, __('Cursor Character', 'inner-block-text-animation'));
			case 'promptChar': return text(field, __('Prompt Character', 'inner-block-text-animation'));
			case 'loop': return toggle(field, __('Loop', 'inner-block-text-animation'));
			case 'loopDelay': return range(field, __('Loop Delay (s)', 'inner-block-text-animation'), 0, 10, 0.1);
			case 'words': return words();
			case 'scrambleChars': return text(field, __('Scramble Characters', 'inner-block-text-animation'));
			case 'separator': return select(field, __('Separator', 'inner-block-text-animation'), separatorOptions);
			case 'prefix': return text(field, __('Prefix', 'inner-block-text-animation'));
			case 'suffix': return text(field, __('Suffix', 'inner-block-text-animation'));
			case 'speed': return range(field, __('Speed (px/s)', 'inner-block-text-animation'), 10, 300, 1);
			case 'pauseOnHover': return toggle(field, __('Pause On Hover', 'inner-block-text-animation'));
			case 'gap': return range(field, __('Gap (px)', 'inner-block-text-animation'), 0, 200, 1);
			case 'shineWidth': return range(field, __('Shine Width (%)', 'inner-block-text-animation'), 5, 100, 1);
			case 'strokeWidth': return range(field, __('Stroke Width (px)', 'inner-block-text-animation'), 1, 10, 1);
			case 'shadowOffsetX': return range(field, __('Shadow Offset X (px)', 'inner-block-text-animation'), -40, 40, 1);
			case 'shadowOffsetY': return range(field, __('Shadow Offset Y (px)', 'inner-block-text-animation'), -40, 40, 1);
			case 'shadowBlur': return range(field, __('Shadow Blur (px)', 'inner-block-text-animation'), 0, 40, 1);
			case 'color': return color(field, __('Color', 'inner-block-text-animation'));
			case 'colorAlt': return color(field, __('Secondary Color', 'inner-block-text-animation'));
			case 'colors': return <div key={field} className='mt10'>
				<p className='ibtaAnimationLabel'>{__('Colors', 'inner-block-text-animation')}</p>
				<GradientPicker value={value(field)} onChange={(next) => setField(field, next)} gradients={[]} />
			</div>;
			case 'highlightColor': return color(field, __('Highlight Color', 'inner-block-text-animation'));
			case 'shineColor': return color(field, __('Shine Color', 'inner-block-text-animation'));
			case 'strokeColor': return color(field, __('Stroke Color', 'inner-block-text-animation'));
			case 'shadowColor': return color(field, __('Shadow Color', 'inner-block-text-animation'));

			case 'counterStart':
			case 'counterEnd':
				return <NumberControl key={field} className='mt10'
					label={'counterStart' === field ? __('Counter Start', 'inner-block-text-animation') : __('Counter End', 'inner-block-text-animation')}
					value={value(field)} onChange={(next) => setField(field, parseFloat(next) || 0)} __nextHasNoMarginBottom />;

			case 'iteration': {
				const infinite = 'infinite' === value(field);

				return <div key={field} className='mt10'>
					<ToggleControl label={__('Loop Forever', 'inner-block-text-animation')} checked={infinite}
						onChange={(next) => setField(field, next ? 'infinite' : 1)} __nextHasNoMarginBottom />

					{!infinite && <RangeControl className='mt10' label={__('Repeat', 'inner-block-text-animation')}
						value={parseInt(value(field), 10) || 1} min={1} max={20} step={1}
						onChange={(next) => setField(field, next)} __nextHasNoMarginBottom />}
				</div>;
			}

			default: return null;
		}
	};

	return <>
		<SelectControl className='mt10'
			label={__('Animation', 'inner-block-text-animation')}
			value={animation.type}
			options={ANIMATION_OPTIONS}
			onChange={(type) => setField('type', type)}
			__nextHasNoMarginBottom
		/>

		{fields.map(renderField)}
	</>;
};

export default AnimationControls;

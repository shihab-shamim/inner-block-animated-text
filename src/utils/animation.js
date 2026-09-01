import { __ } from '@wordpress/i18n';

export const ANIMATION_OPTIONS = [
	{ label: __('None', 'inner-block-text-animation'), value: '' },

	// Entrance
	{ label: __('Fade In', 'inner-block-text-animation'), value: 'fade-in' },
	{ label: __('Slide Up', 'inner-block-text-animation'), value: 'slide-up' },
	{ label: __('Slide Down', 'inner-block-text-animation'), value: 'slide-down' },
	{ label: __('Slide Left', 'inner-block-text-animation'), value: 'slide-left' },
	{ label: __('Slide Right', 'inner-block-text-animation'), value: 'slide-right' },
	{ label: __('Zoom In', 'inner-block-text-animation'), value: 'zoom-in' },
	{ label: __('Zoom Out', 'inner-block-text-animation'), value: 'zoom-out' },
	{ label: __('Flip X', 'inner-block-text-animation'), value: 'flip-x' },
	{ label: __('Flip Y', 'inner-block-text-animation'), value: 'flip-y' },
	{ label: __('Rotate In', 'inner-block-text-animation'), value: 'rotate-in' },
	{ label: __('Blur In', 'inner-block-text-animation'), value: 'blur-in' },
	{ label: __('Mask Reveal', 'inner-block-text-animation'), value: 'mask-reveal' },
	{ label: __('Drop In', 'inner-block-text-animation'), value: 'drop-in' },
	{ label: __('Elastic In', 'inner-block-text-animation'), value: 'elastic-in' },
	{ label: __('Bounce In', 'inner-block-text-animation'), value: 'bounce-in' },
	{ label: __('Swing In', 'inner-block-text-animation'), value: 'swing-in' },

	// Typing
	{ label: __('Typewriter', 'inner-block-text-animation'), value: 'typewriter' },
	{ label: __('Rotating Words', 'inner-block-text-animation'), value: 'rotating-words' },
	{ label: __('Scramble', 'inner-block-text-animation'), value: 'scramble' },
	{ label: __('Counter', 'inner-block-text-animation'), value: 'counter' },
	{ label: __('Terminal', 'inner-block-text-animation'), value: 'terminal' },
	{ label: __('Text Decode', 'inner-block-text-animation'), value: 'text-decode' },
	{ label: __('Character Reveal', 'inner-block-text-animation'), value: 'character-reveal' },
	{ label: __('Word Reveal', 'inner-block-text-animation'), value: 'word-reveal' },
	{ label: __('Line Reveal', 'inner-block-text-animation'), value: 'line-reveal' },

	// Loop
	{ label: __('Marquee', 'inner-block-text-animation'), value: 'marquee' },
	{ label: __('Wave', 'inner-block-text-animation'), value: 'wave' },
	{ label: __('Bounce', 'inner-block-text-animation'), value: 'bounce' },
	{ label: __('Float', 'inner-block-text-animation'), value: 'float' },
	{ label: __('Pulse', 'inner-block-text-animation'), value: 'pulse' },
	{ label: __('Shake', 'inner-block-text-animation'), value: 'shake' },
	{ label: __('Glitch', 'inner-block-text-animation'), value: 'glitch' },
	{ label: __('Neon Flicker', 'inner-block-text-animation'), value: 'neon-flicker' },
	{ label: __('Jello', 'inner-block-text-animation'), value: 'jello' },
	{ label: __('Heartbeat', 'inner-block-text-animation'), value: 'heartbeat' },
	{ label: __('Swing', 'inner-block-text-animation'), value: 'swing' },
	{ label: __('Wobble', 'inner-block-text-animation'), value: 'wobble' },
	{ label: __('Tada', 'inner-block-text-animation'), value: 'tada' },
	{ label: __('Rubber Band', 'inner-block-text-animation'), value: 'rubber-band' },

	// Creative
	{ label: __('Morph', 'inner-block-text-animation'), value: 'morph' },
	{ label: __('Split', 'inner-block-text-animation'), value: 'split' },
	{ label: __('Text Scatter', 'inner-block-text-animation'), value: 'text-scatter' },
	{ label: __('Text Assemble', 'inner-block-text-animation'), value: 'text-assemble' },
	{ label: __('Text Shatter', 'inner-block-text-animation'), value: 'text-shatter' },
	{ label: __('Perspective', 'inner-block-text-animation'), value: 'perspective' },
	{ label: __('3D Rotate', 'inner-block-text-animation'), value: '3d-rotate' },

	// Style
	{ label: __('Gradient Move', 'inner-block-text-animation'), value: 'gradient-move' },
	{ label: __('Shine', 'inner-block-text-animation'), value: 'shine' },
	{ label: __('Color Shift', 'inner-block-text-animation'), value: 'color-shift' },
	{ label: __('Highlight', 'inner-block-text-animation'), value: 'highlight' },
	{ label: __('Underline Draw', 'inner-block-text-animation'), value: 'underline-draw' },
	{ label: __('Stroke Draw', 'inner-block-text-animation'), value: 'stroke-draw' },
	{ label: __('Text Shadow', 'inner-block-text-animation'), value: 'text-shadow' },
	{ label: __('Glow', 'inner-block-text-animation'), value: 'glow' },
	{ label: __('Rainbow', 'inner-block-text-animation'), value: 'rainbow' },
	{ label: __('Shimmer', 'inner-block-text-animation'), value: 'shimmer' }
];

export const ANIMATION_SETTINGS = {
	'': [],

	// Entrance
	'fade-in': ['duration', 'delay', 'easing', 'splitBy', 'stagger', 'iteration'],
	'slide-up': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'slide-down': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'slide-left': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'slide-right': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'zoom-in': ['duration', 'delay', 'easing', 'scale', 'splitBy', 'stagger', 'iteration'],
	'zoom-out': ['duration', 'delay', 'easing', 'scale', 'splitBy', 'stagger', 'iteration'],
	'flip-x': ['duration', 'delay', 'easing', 'perspective', 'splitBy', 'stagger', 'iteration'],
	'flip-y': ['duration', 'delay', 'easing', 'perspective', 'splitBy', 'stagger', 'iteration'],
	'rotate-in': ['duration', 'delay', 'easing', 'angle', 'splitBy', 'stagger', 'iteration'],
	'blur-in': ['duration', 'delay', 'easing', 'blurAmount', 'splitBy', 'stagger', 'iteration'],
	'mask-reveal': ['duration', 'delay', 'easing', 'direction', 'splitBy', 'stagger', 'iteration'],
	'drop-in': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'elastic-in': ['duration', 'delay', 'distance', 'splitBy', 'stagger', 'iteration'],
	'bounce-in': ['duration', 'delay', 'distance', 'splitBy', 'stagger', 'iteration'],
	'swing-in': ['duration', 'delay', 'easing', 'angle', 'splitBy', 'stagger', 'iteration'],

	// Typing
	'typewriter': ['typingSpeed', 'delay', 'cursor', 'cursorChar', 'loop', 'loopDelay', 'iteration'],
	'rotating-words': ['words', 'typingSpeed', 'delay', 'cursor', 'cursorChar', 'loopDelay', 'iteration'],
	'scramble': ['duration', 'delay', 'scrambleChars', 'loop', 'loopDelay', 'iteration'],
	'counter': ['counterStart', 'counterEnd', 'duration', 'delay', 'easing', 'separator', 'prefix', 'suffix', 'iteration'],
	'terminal': ['typingSpeed', 'delay', 'cursor', 'cursorChar', 'promptChar', 'loop', 'loopDelay', 'iteration'],
	'text-decode': ['duration', 'delay', 'scrambleChars', 'stagger', 'loop', 'loopDelay', 'iteration'],
	'character-reveal': ['duration', 'delay', 'easing', 'stagger', 'iteration'],
	'word-reveal': ['duration', 'delay', 'easing', 'stagger', 'iteration'],
	'line-reveal': ['duration', 'delay', 'easing', 'stagger', 'iteration'],

	// Loop
	'marquee': ['direction', 'speed', 'pauseOnHover', 'gap', 'iteration'],
	'wave': ['duration', 'delay', 'amplitude', 'splitBy', 'stagger', 'iteration'],
	'bounce': ['duration', 'delay', 'amplitude', 'splitBy', 'stagger', 'iteration'],
	'float': ['duration', 'delay', 'amplitude', 'splitBy', 'stagger', 'iteration'],
	'pulse': ['duration', 'delay', 'scale', 'splitBy', 'stagger', 'iteration'],
	'shake': ['duration', 'delay', 'amplitude', 'splitBy', 'stagger', 'iteration'],
	'glitch': ['duration', 'delay', 'intensity', 'color', 'colorAlt', 'splitBy', 'stagger', 'iteration'],
	'neon-flicker': ['duration', 'delay', 'color', 'intensity', 'splitBy', 'stagger', 'iteration'],
	'jello': ['duration', 'delay', 'splitBy', 'stagger', 'iteration'],
	'heartbeat': ['duration', 'delay', 'scale', 'splitBy', 'stagger', 'iteration'],
	'swing': ['duration', 'delay', 'angle', 'splitBy', 'stagger', 'iteration'],
	'wobble': ['duration', 'delay', 'amplitude', 'splitBy', 'stagger', 'iteration'],
	'tada': ['duration', 'delay', 'splitBy', 'stagger', 'iteration'],
	'rubber-band': ['duration', 'delay', 'splitBy', 'stagger', 'iteration'],

	// Creative
	'morph': ['words', 'duration', 'delay', 'easing', 'loopDelay', 'iteration'],
	'split': ['duration', 'delay', 'easing', 'distance', 'direction', 'splitBy', 'stagger', 'iteration'],
	'text-scatter': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'text-assemble': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'text-shatter': ['duration', 'delay', 'easing', 'distance', 'splitBy', 'stagger', 'iteration'],
	'perspective': ['duration', 'delay', 'easing', 'perspective', 'angle', 'splitBy', 'stagger', 'iteration'],
	'3d-rotate': ['duration', 'delay', 'easing', 'perspective', 'angle', 'splitBy', 'stagger', 'iteration'],

	// Style
	'gradient-move': ['colors', 'duration', 'delay', 'direction', 'iteration'],
	'shine': ['shineColor', 'shineWidth', 'duration', 'delay', 'iteration'],
	'color-shift': ['colors', 'duration', 'delay', 'iteration'],
	'highlight': ['highlightColor', 'duration', 'delay', 'easing', 'direction', 'splitBy', 'stagger', 'iteration'],
	'underline-draw': ['color', 'strokeWidth', 'duration', 'delay', 'easing', 'splitBy', 'stagger', 'iteration'],
	'stroke-draw': ['strokeColor', 'strokeWidth', 'duration', 'delay', 'easing', 'splitBy', 'stagger', 'iteration'],
	'text-shadow': ['shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'duration', 'delay', 'splitBy', 'stagger', 'iteration'],
	'glow': ['color', 'intensity', 'duration', 'delay', 'splitBy', 'stagger', 'iteration'],
	'rainbow': ['colors', 'duration', 'delay', 'iteration'],
	'shimmer': ['shineColor', 'duration', 'delay', 'iteration']
};

export const FIELD_DEFAULTS = {
	duration: 1,
	delay: 0,
	easing: 'ease',
	iteration: 'infinite',
	distance: 40,
	scale: 1.2,
	angle: 20,
	perspective: 800,
	blurAmount: 10,
	direction: 'left',
	splitBy: 'none',
	stagger: 0.05,
	amplitude: 10,
	intensity: 50,
	typingSpeed: 80,
	cursor: true,
	cursorChar: '|',
	promptChar: '$',
	loop: false,
	loopDelay: 1.5,
	words: [],
	scrambleChars: '!<>-_\\/[]{}—=+*^?#',
	counterStart: 0,
	counterEnd: 100,
	separator: 'comma',
	prefix: '',
	suffix: '',
	speed: 60,
	pauseOnHover: true,
	gap: 40,
	color: '#146EF5',
	colorAlt: '#ff0040',
	colors: 'linear-gradient(90deg, #146EF5, #18D4FD)',
	highlightColor: '#ffe066',
	shineColor: '#ffffff',
	shineWidth: 20,
	strokeColor: 'currentColor',
	strokeWidth: 2,
	shadowColor: 'rgba(0,0,0,.4)',
	shadowOffsetX: 2,
	shadowOffsetY: 2,
	shadowBlur: 4
};

// field -> [ css custom property, formatter ]. Fields absent here are JS driven and go to data attributes.
const CSS_VARS = {
	duration: ['--ibta-duration', v => `${v}s`],
	delay: ['--ibta-delay', v => `${v}s`],
	easing: ['--ibta-easing', v => v],
	iteration: ['--ibta-iteration', v => v],
	distance: ['--ibta-distance', v => `${v}px`],
	scale: ['--ibta-scale', v => v],
	angle: ['--ibta-angle', v => `${v}deg`],
	perspective: ['--ibta-perspective', v => `${v}px`],
	blurAmount: ['--ibta-blur', v => `${v}px`],
	direction: ['--ibta-direction', v => v],
	stagger: ['--ibta-stagger', v => `${v}s`],
	amplitude: ['--ibta-amplitude', v => `${v}px`],
	// unitless on purpose: the stylesheet multiplies it by a px unit inside calc(),
	// and a percentage is not a valid <length> there
	intensity: ['--ibta-intensity', v => `${v}`],
	cursorChar: ['--ibta-cursor-char', v => `'${v}'`],
	promptChar: ['--ibta-prompt-char', v => `'${v}'`],
	speed: ['--ibta-speed', v => `${v}px`],
	gap: ['--ibta-gap', v => `${v}px`],
	color: ['--ibta-color', v => v],
	colorAlt: ['--ibta-color-alt', v => v],
	colors: ['--ibta-gradient', v => v],
	highlightColor: ['--ibta-highlight-color', v => v],
	shineColor: ['--ibta-shine-color', v => v],
	shineWidth: ['--ibta-shine-width', v => `${v}%`],
	strokeColor: ['--ibta-stroke-color', v => v],
	strokeWidth: ['--ibta-stroke-width', v => `${v}px`],
	shadowColor: ['--ibta-shadow-color', v => v],
	shadowOffsetX: ['--ibta-shadow-x', v => `${v}px`],
	shadowOffsetY: ['--ibta-shadow-y', v => `${v}px`],
	shadowBlur: ['--ibta-shadow-blur', v => `${v}px`]
};

/**
 * Resolve an element's animation config (Section 17.1):
 * 1. the element's own animation object, 2. block level legacy values as read only
 * defaults, 3. the field defaults. Nothing is ever written back.
 */
export const getElementAnimation = (element, blockAttributes) => {
	const stored = element?.ibtaAnimation || {};
	const legacy = blockAttributes?.animation || {};

	return { ...legacy, ...stored, type: stored.type ?? legacy.type ?? '' };
};

/**
 * Animations that ran forever before "Loop Forever" became available on every animation.
 * Their iteration default stays 'infinite' so existing content keeps behaving as it did;
 * every other animation defaults to playing once.
 */
export const LOOP_BY_DEFAULT = [
	'wave', 'bounce', 'float', 'pulse', 'shake', 'glitch', 'neon-flicker', 'jello', 'heartbeat',
	'swing', 'wobble', 'tada', 'rubber-band', '3d-rotate', 'gradient-move', 'shine', 'color-shift',
	'glow', 'rainbow', 'shimmer',
	// these loop by definition: the engine cycles them
	'marquee', 'rotating-words', 'morph'
];

/**
 * Motion curves. Entrances want a hard decelerate: the element covers most of its distance
 * immediately and settles softly, which reads as responsive rather than sluggish. A
 * symmetric `ease` makes every entrance feel the same and slightly limp, so it is no longer
 * the default for them.
 */
export const EASINGS = {
	decelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
	overshoot: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
	spring: 'cubic-bezier(0.22, 1.2, 0.36, 1)',
	smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
	snappy: 'cubic-bezier(0.4, 0, 0.2, 1)',
	softIn: 'cubic-bezier(0.32, 0, 0.67, 0)'
};

export const EASING_PRESETS = [
	{ label: __('Smooth Out (recommended)', 'inner-block-text-animation'), value: EASINGS.decelerate },
	{ label: __('Gentle Overshoot', 'inner-block-text-animation'), value: EASINGS.overshoot },
	{ label: __('Spring', 'inner-block-text-animation'), value: EASINGS.spring },
	{ label: __('Smooth In Out', 'inner-block-text-animation'), value: EASINGS.smooth },
	{ label: __('Snappy', 'inner-block-text-animation'), value: EASINGS.snappy },
	{ label: __('Soft In', 'inner-block-text-animation'), value: EASINGS.softIn },
	{ label: 'linear', value: 'linear' },
	{ label: 'ease', value: 'ease' },
	{ label: 'ease-in', value: 'ease-in' },
	{ label: 'ease-out', value: 'ease-out' },
	{ label: 'ease-in-out', value: 'ease-in-out' }
];

/**
 * Split By is offered on every animation where per-part motion is technically sound. These
 * four are only legible as per-character effects, so they default to splitting instead of to
 * 'none' — which is also the behaviour they had when the mode was hard-coded in the engine.
 * The user can still switch them to word, line or none.
 */
export const SPLIT_BY_DEFAULT = {
	'wave': 'character',
	'text-scatter': 'character',
	'text-assemble': 'character',
	'text-shatter': 'character'
};

// animations that read as an arrival, so they default to the decelerate curve
export const ENTRANCE_ANIMATIONS = [
	'fade-in', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom-in', 'zoom-out',
	'flip-x', 'flip-y', 'rotate-in', 'blur-in', 'mask-reveal', 'drop-in', 'swing-in',
	'character-reveal', 'word-reveal', 'line-reveal', 'split', 'text-scatter', 'text-assemble',
	'text-shatter', 'perspective'
];

/**
 * Rainbow's spectrum. It opens and closes on the same red so the scroll loops with no
 * colour jump; a custom gradient looks best when its first and last stops match too.
 */
export const RAINBOW_GRADIENT = 'linear-gradient(90deg, #ff0000, #ff8c00, #ffd500, #48d100, #00c4c4, #0072ff, #7b2ff7, #ff008c, #ff0000)';

export const getFieldDefault = (type, field) => {
	if ('iteration' === field) {
		return LOOP_BY_DEFAULT.includes(type) ? 'infinite' : 1;
	}

	// rainbow shares the `colors` field but defaults to the spectrum, not the blue gradient
	if ('colors' === field && 'rainbow' === type) {
		return RAINBOW_GRADIENT;
	}

	// arrivals decelerate; everything else keeps the symmetric default
	if ('easing' === field && ENTRANCE_ANIMATIONS.includes(type)) {
		return EASINGS.decelerate;
	}

	// these read as per-character effects, so they default to split rather than to 'none'
	if ('splitBy' === field && SPLIT_BY_DEFAULT[type]) {
		return SPLIT_BY_DEFAULT[type];
	}

	return FIELD_DEFAULTS[field];
};

export const getFieldValue = (animation, field) => animation?.[field] ?? getFieldDefault(animation?.type, field);

/**
 * Fields of the selected animation that pass the nested visibility rules (Section 7.3).
 * Used for the controls and for the rendered output, so a hidden field never reaches the DOM.
 */
export const getVisibleFields = (animation) => {
	const fields = ANIMATION_SETTINGS[animation?.type] || [];

	return fields.filter(field => {
		// stagger only matters once the text is split, but only where splitBy is offered
		if ('stagger' === field && fields.includes('splitBy') && 'none' === getFieldValue(animation, 'splitBy')) {
			return false;
		}

		if ('cursorChar' === field && !getFieldValue(animation, 'cursor')) {
			return false;
		}

		// animations that loop by definition offer no loop toggle, so their loopDelay always shows
		if ('loopDelay' === field && fields.includes('loop') && !getFieldValue(animation, 'loop')) {
			return false;
		}

		return true;
	});
};

/**
 * The single builder shared by the editor preview and the save output (Section 15).
 * Only fields in the selected animation's mapping are emitted (Section 8, rule 3).
 */
export const getAnimationProps = (element, blockAttributes) => {
	const animation = getElementAnimation(element, blockAttributes);
	const { type } = animation;

	if (!type || !ANIMATION_SETTINGS[type]) {
		return { className: '', style: {}, dataset: {} };
	}

	const fields = getVisibleFields(animation);
	const classNames = ['ibta-el', 'ibta-anim', `ibta-anim--${type}`];
	const style = {};
	const dataset = { 'data-ibta-animation': type };

	fields.forEach(field => {
		const value = getFieldValue(animation, field);

		if (undefined === value || null === value) {
			return;
		}

		if (CSS_VARS[field]) {
			const [property, format] = CSS_VARS[field];
			// always a string: a raw number would be unit-guessed by some renderers
			style[property] = String(format(value));
		} else {
			dataset[`data-ibta-${field.toLowerCase()}`] = Array.isArray(value) ? JSON.stringify(value) : String(value);
		}

		if ('direction' === field) {
			classNames.push(`ibta-dir--${value}`);
		}

		if ('cursor' === field && value) {
			classNames.push('ibta-has-cursor');
		}

		if ('pauseOnHover' === field && value) {
			classNames.push('ibta-pause-hover');
		}
	});

	return { className: classNames.join(' '), style, dataset };
};

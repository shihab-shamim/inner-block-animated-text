/**
 * Frontend engine for the animations CSS alone cannot express: the ones that rewrite
 * text (typewriter, scramble, counter, ...) and the ones that need the text split into
 * parts (character/word/line reveal, wave, scatter, ...).
 *
 * Every value is read from the element's own data-ibta-* attributes and CSS variables,
 * so each element runs on its own configuration with no shared state.
 */

import { FIELD_DEFAULTS, LOOP_BY_DEFAULT } from './animation';

// animations whose text the engine rewrites
export const TEXT_ANIMATIONS = ['typewriter', 'terminal', 'rotating-words', 'morph', 'scramble', 'counter', 'text-decode'];

// animations that always split, regardless of the splitBy field
export const SPLIT_ANIMATIONS = ['character-reveal', 'word-reveal', 'line-reveal', 'wave', 'text-scatter', 'text-assemble', 'text-shatter', 'text-decode'];

const SPLIT_BY = { 'character-reveal': 'character', 'word-reveal': 'word', 'line-reveal': 'line', 'text-decode': 'character' };

const num = (el, field, fallback) => {
	const raw = el.dataset[field];
	const parsed = parseFloat(raw);
	return Number.isNaN(parsed) ? fallback : parsed;
};

const bool = (el, field, fallback) => {
	const raw = el.dataset[field];
	return undefined === raw ? fallback : 'true' === raw;
};

const str = (el, field, fallback) => {
	const raw = el.dataset[field];
	return undefined === raw || '' === raw ? fallback : raw;
};

const list = (el, field) => {
	try {
		const parsed = JSON.parse(el.dataset[field] || '[]');
		return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
	} catch {
		return [];
	}
};

const cssVar = (el, property) => (el.style.getPropertyValue(property) || getComputedStyle(el).getPropertyValue(property) || '').trim();

const cssSeconds = (el, property, fallback) => {
	const parsed = parseFloat(cssVar(el, property));
	return Number.isNaN(parsed) ? fallback : parsed;
};

/**
 * How many times a JS driven animation should run. animation-iteration-count does
 * nothing for these, so "Loop Forever" is honoured here instead.
 * The per-animation loop toggle still wins when it is on, so existing behaviour is kept.
 */
export const runCount = (el, loopField = false) => {
	if (loopField) {
		return Infinity;
	}

	const raw = cssVar(el, '--ibta-iteration');

	if ('' === raw) {
		// content saved before Loop Forever existed
		return LOOP_BY_DEFAULT.includes(el.dataset.ibtaAnimation) ? Infinity : 1;
	}

	if ('infinite' === raw) {
		return Infinity;
	}

	const parsed = parseInt(raw, 10);
	return Number.isNaN(parsed) ? 1 : Math.max(1, parsed);
};

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/** Split the element's text into spans, each carrying its own index for the CSS stagger. */
const split = (el, mode) => {
	const text = el.textContent;
	let pieces;

	if ('word' === mode) {
		pieces = text.split(/(\s+)/);
	} else if ('line' === mode) {
		pieces = text.split(/\n/);
	} else {
		pieces = Array.from(text);
	}

	el.textContent = '';
	el.classList.add('ibta-is-split');

	let index = 0;

	pieces.forEach(piece => {
		if ('' === piece) {
			return;
		}

		const part = document.createElement('span');
		part.className = 'ibta-part';
		part.textContent = piece;

		// whitespace keeps the flow but must not consume a stagger step
		if (!/^\s+$/.test(piece)) {
			part.style.setProperty('--ibta-index', index);
			part.style.setProperty('--ibta-rx', (Math.random() * 2 - 1).toFixed(3));
			part.style.setProperty('--ibta-ry', (Math.random() * 2 - 1).toFixed(3));
			part.style.setProperty('--ibta-rr', (Math.random() * 2 - 1).toFixed(3));
			index++;
		}

		el.appendChild(part);
	});

	return el.querySelectorAll('.ibta-part');
};

const formatNumber = (value, separator, prefix, suffix) => {
	const rounded = Math.round(value);
	let body = String(rounded);

	if ('comma' === separator) {
		body = rounded.toLocaleString('en-US');
	} else if ('space' === separator) {
		body = rounded.toLocaleString('en-US').replace(/,/g, ' ');
	} else if ('dot' === separator) {
		body = rounded.toLocaleString('en-US').replace(/,/g, '.');
	}

	return `${prefix}${body}${suffix}`;
};

const typeText = async (el, text, speed) => {
	el.textContent = '';

	for (let i = 0; i < text.length; i++) {
		el.textContent += text[i];
		await wait(speed);
	}
};

const eraseText = async (el, speed) => {
	while (el.textContent.length) {
		el.textContent = el.textContent.slice(0, -1);
		await wait(speed / 2);
	}
};

const runTypewriter = async (el, source) => {
	const speed = num(el, 'ibtaTypingspeed', FIELD_DEFAULTS.typingSpeed);
	const loop = bool(el, 'ibtaLoop', FIELD_DEFAULTS.loop);
	const loopDelay = num(el, 'ibtaLoopdelay', FIELD_DEFAULTS.loopDelay) * 1000;

	const runs = runCount(el, loop);

	for (let n = 0; n < runs; n++) {
		await typeText(el, source, speed);

		if (n + 1 < runs) {
			await wait(loopDelay);
			await eraseText(el, speed);
		}
	}
};

const runRotatingWords = async (el, source) => {
	const words = list(el, 'ibtaWords');
	const speed = num(el, 'ibtaTypingspeed', FIELD_DEFAULTS.typingSpeed);
	const loopDelay = num(el, 'ibtaLoopdelay', FIELD_DEFAULTS.loopDelay) * 1000;
	const cycle = words.length ? words : [source];

	// rotating-words loops by definition (Section 7.3), but Loop Forever can bound it
	const runs = runCount(el);

	for (let n = 0, i = 0; n < runs; n++, i = (i + 1) % cycle.length) {
		await typeText(el, cycle[i], speed);
		await wait(loopDelay);

		if (n + 1 < runs) {
			await eraseText(el, speed);
		}

		if (1 === cycle.length) {
			await wait(loopDelay);
		}
	}
};

const runMorph = async (el, source) => {
	const words = list(el, 'ibtaWords');
	const duration = cssSeconds(el, '--ibta-duration', FIELD_DEFAULTS.duration) * 1000;
	const loopDelay = num(el, 'ibtaLoopdelay', FIELD_DEFAULTS.loopDelay) * 1000;
	const cycle = words.length ? words : [source];

	el.style.transition = `opacity ${duration}ms var(--ibta-easing, ease), filter ${duration}ms var(--ibta-easing, ease)`;

	const runs = runCount(el);

	for (let n = 0, i = 0; n < runs; n++, i = (i + 1) % cycle.length) {
		el.textContent = cycle[i];
		el.style.opacity = '1';
		el.style.filter = 'blur(0)';

		await wait(loopDelay);

		if (n + 1 < runs) {
			el.style.opacity = '0';
			el.style.filter = 'blur(6px)';

			await wait(duration);
		}
	}
};

const runScramble = async (el, source) => {
	const pool = str(el, 'ibtaScramblechars', FIELD_DEFAULTS.scrambleChars);
	const duration = cssSeconds(el, '--ibta-duration', FIELD_DEFAULTS.duration) * 1000;
	const loop = bool(el, 'ibtaLoop', FIELD_DEFAULTS.loop);
	const loopDelay = num(el, 'ibtaLoopdelay', FIELD_DEFAULTS.loopDelay) * 1000;
	const steps = Math.max(1, Math.round(duration / 40));
	const pick = () => pool[Math.floor(Math.random() * pool.length)] || '';

	const runs = runCount(el, loop);

	for (let n = 0; n < runs; n++) {
		for (let step = 0; step <= steps; step++) {
			const settled = Math.floor((step / steps) * source.length);

			el.textContent = Array.from(source)
				.map((char, i) => (i < settled || /\s/.test(char) ? char : pick()))
				.join('');

			await wait(40);
		}

		el.textContent = source;

		if (n + 1 < runs) {
			await wait(loopDelay);
		}
	}
};

// text-decode reads its characters from the split parts, not from the source string
const runTextDecode = async (el) => {
	const pool = str(el, 'ibtaScramblechars', FIELD_DEFAULTS.scrambleChars);
	const duration = cssSeconds(el, '--ibta-duration', FIELD_DEFAULTS.duration) * 1000;
	const loop = bool(el, 'ibtaLoop', FIELD_DEFAULTS.loop);
	const loopDelay = num(el, 'ibtaLoopdelay', FIELD_DEFAULTS.loopDelay) * 1000;
	const stagger = cssSeconds(el, '--ibta-stagger', FIELD_DEFAULTS.stagger) * 1000;
	const pick = () => pool[Math.floor(Math.random() * pool.length)] || '';

	const runs = runCount(el, loop);

	for (let n = 0; n < runs; n++) {
		const parts = Array.from(el.querySelectorAll('.ibta-part'));
		const chars = parts.map(part => part.dataset.ibtaChar ?? part.textContent);

		parts.forEach((part, i) => { part.dataset.ibtaChar = chars[i]; });

		await Promise.all(parts.map(async (part, i) => {
			const settleAt = i * stagger + duration;
			const start = performance.now();

			while (performance.now() - start < settleAt) {
				if (!/\s/.test(chars[i])) {
					part.textContent = pick();
				}
				await wait(40);
			}

			part.textContent = chars[i];
		}));

		if (n + 1 < runs) {
			await wait(loopDelay);
		}
	}
};

const countOnce = (el, from, to, duration, separator, prefix, suffix) => {
	const start = performance.now();

	return new Promise(resolve => {
		const tick = (now) => {
			const progress = Math.min(1, (now - start) / duration);

			el.textContent = formatNumber(from + (to - from) * progress, separator, prefix, suffix);

			if (progress < 1) {
				requestAnimationFrame(tick);
			} else {
				resolve();
			}
		};

		requestAnimationFrame(tick);
	});
};

const runCounter = async (el) => {
	const from = num(el, 'ibtaCounterstart', FIELD_DEFAULTS.counterStart);
	const to = num(el, 'ibtaCounterend', FIELD_DEFAULTS.counterEnd);
	const duration = cssSeconds(el, '--ibta-duration', FIELD_DEFAULTS.duration) * 1000;
	const separator = str(el, 'ibtaSeparator', FIELD_DEFAULTS.separator);
	const prefix = str(el, 'ibtaPrefix', FIELD_DEFAULTS.prefix);
	const suffix = str(el, 'ibtaSuffix', FIELD_DEFAULTS.suffix);
	const runs = runCount(el);

	for (let n = 0; n < runs; n++) {
		await countOnce(el, from, to, duration, separator, prefix, suffix);
	}
};

const runMarquee = (el) => {
	const speed = num(el, 'ibtaSpeed', FIELD_DEFAULTS.speed);
	const track = document.createElement('span');

	track.className = 'ibta-marquee-track';

	while (el.firstChild) {
		track.appendChild(el.firstChild);
	}

	const original = track.cloneNode(true);
	const content = document.createElement('span');

	content.appendChild(track.cloneNode(true));
	el.textContent = '';
	el.appendChild(track);

	// duplicate so the loop is seamless
	Array.from(original.childNodes).forEach(node => track.appendChild(node.cloneNode(true)));
	void content;

	// duration comes from the element's own width and its own speed setting
	el.classList.add('ibta-marquee-ready');

	const distance = track.scrollWidth / 2;
	el.style.setProperty('--ibta-duration', `${Math.max(1, distance / Math.max(1, speed))}s`);
};

/** Initialise a single element from its own configuration. */
export const initElement = (el) => {
	if (el.dataset.ibtaReady) {
		return;
	}

	const type = el.dataset.ibtaAnimation;

	if (!type) {
		return;
	}

	el.dataset.ibtaReady = 'true';

	const source = el.textContent;
	const splitBy = SPLIT_ANIMATIONS.includes(type) ? SPLIT_BY[type] || 'character' : el.dataset.ibtaSplitby;

	if ('marquee' === type) {
		runMarquee(el);
		return;
	}

	if (splitBy && 'none' !== splitBy) {
		split(el, splitBy);
	}

	const delay = cssSeconds(el, '--ibta-delay', FIELD_DEFAULTS.delay) * 1000;

	const start = () => {
		switch (type) {
			case 'typewriter':
			case 'terminal': return runTypewriter(el, source);
			case 'rotating-words': return runRotatingWords(el, source);
			case 'morph': return runMorph(el, source);
			case 'scramble': return runScramble(el, source);
			case 'text-decode': return runTextDecode(el);
			case 'counter': return runCounter(el);
			default: return undefined;
		}
	};

	if (!TEXT_ANIMATIONS.includes(type)) {
		return;
	}

	// hold the original text until the element's own delay has elapsed
	if ('counter' !== type && 'text-decode' !== type) {
		el.textContent = '';
	}

	setTimeout(start, delay);
};

/** One observer per element, keyed to that element's own configuration (Section 14). */
export const initAnimations = (root = document) => {
	root.querySelectorAll('[data-ibta-animation]').forEach(initElement);
};

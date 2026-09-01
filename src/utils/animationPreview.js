/**
 * Editor preview.
 *
 * The engine splits text into spans and rewrites it, which is unsafe to do to a block's
 * live RichText: that DOM belongs to React, and mutating it risks Gutenberg reading the
 * mutation back and corrupting the block. So the preview runs the very same engine against
 * a detached, non-editable clone positioned over the real element, and the editable DOM is
 * never touched.
 */

import { initElement } from './animationEngine';

// infinite animations would never finish, so every preview is capped
const PREVIEW_MAX_MS = 6000;

/**
 * Under apiVersion 3 the editor canvas is an iframe, so the block element does not live in
 * the sidebar's document. Look inside the canvas first and fall back to the top document
 * for non-iframed editors (widgets screen, older setups).
 */
export const getBlockElement = (clientId) => {
	const canvas = document.querySelector('iframe[name="editor-canvas"]');
	const doc = canvas?.contentDocument || document;

	return doc.querySelector(`[data-block="${clientId}"]`);
};

export const previewAnimation = (clientId) => {
	const el = getBlockElement(clientId);

	if (!el || !el.dataset.ibtaAnimation || el.dataset.ibtaPreviewing) {
		return;
	}

	const doc = el.ownerDocument;
	const win = doc.defaultView;
	const rect = el.getBoundingClientRect();
	const clone = el.cloneNode(true);

	el.dataset.ibtaPreviewing = 'true';

	// nothing about the clone may look like a real block to the editor
	clone.removeAttribute('id');
	clone.removeAttribute('data-block');
	clone.removeAttribute('data-type');
	clone.removeAttribute('data-ibta-ready');
	clone.setAttribute('aria-hidden', 'true');
	clone.setAttribute('contenteditable', 'false');
	clone.querySelectorAll('[contenteditable], [data-block]').forEach(node => {
		node.setAttribute('contenteditable', 'false');
		node.removeAttribute('data-block');
	});

	// set positioning properties individually: cssText would wipe the inline --ibta-* values
	clone.style.position = 'absolute';
	clone.style.left = `${rect.left + win.scrollX}px`;
	clone.style.top = `${rect.top + win.scrollY}px`;
	clone.style.width = `${rect.width}px`;
	clone.style.margin = '0';
	clone.style.pointerEvents = 'none';
	clone.style.zIndex = '9999';

	doc.body.appendChild(clone);
	el.style.visibility = 'hidden';

	initElement(clone);

	win.setTimeout(() => {
		clone.remove();
		el.style.visibility = '';
		delete el.dataset.ibtaPreviewing;
	}, PREVIEW_MAX_MS);
};

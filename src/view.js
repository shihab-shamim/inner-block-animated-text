import { createRoot } from 'react-dom/client';
import './style.scss';
import './animations.scss';
import Style from './Components/Common/Style';
import { initAnimations } from './utils/animationEngine';

document.addEventListener('DOMContentLoaded', () => {
	const innerBlockTextAnimationEls = document.querySelectorAll('.wp-block-ibta-inner-block-text-animation');

	innerBlockTextAnimationEls.forEach(innerBlockTextAnimationEl => {
		const attributes = JSON.parse(innerBlockTextAnimationEl.dataset.attributes);
		const styleEl = document.createElement('div');

		innerBlockTextAnimationEl.appendChild(styleEl);

		createRoot(styleEl).render(<Style attributes={attributes} id={innerBlockTextAnimationEl.id} />);

		innerBlockTextAnimationEl?.removeAttribute('data-attributes');

		initAnimations(innerBlockTextAnimationEl);
	});
});

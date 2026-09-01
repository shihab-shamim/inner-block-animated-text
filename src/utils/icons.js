/**
 * Block icon.
 *
 * The frame is the container block; the three bars are the inner text elements arriving one
 * after another on a stagger, which is exactly what the block does. The caret marks it as
 * text rather than generic content.
 *
 * The CSS lives inside the SVG on purpose. The icon is rendered in the inserter and the list
 * view, which sit in the top document, and also inside the apiVersion 3 canvas iframe — an
 * editorStyle rule would not reach every one of those. Class names are prefixed so the
 * document-scoped <style> cannot touch anything else.
 */
export const blockIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' aria-hidden='true' focusable='false'>
	<style>{`
		.ibtaIcoBar { transform-box: fill-box; animation: ibtaIcoIn 2.6s cubic-bezier(.05,.7,.1,1) infinite; }
		.ibtaIcoBar2 { animation-delay: .16s; }
		.ibtaIcoBar3 { animation-delay: .32s; }
		.ibtaIcoCaret { animation: ibtaIcoBlink 1.05s steps(1,end) infinite; }
		@keyframes ibtaIcoIn {
			0% { opacity: 0; translate: -5px 0; }
			18%, 74% { opacity: 1; translate: 0 0; }
			90%, 100% { opacity: 0; translate: -5px 0; }
		}
		@keyframes ibtaIcoBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: .15; } }
		@media (prefers-reduced-motion: reduce) {
			.ibtaIcoBar, .ibtaIcoCaret { animation: none; opacity: 1; translate: none; }
		}
	`}</style>

	<rect x='2.7' y='3.7' width='18.6' height='16.6' rx='3.4' stroke='currentColor' strokeWidth='1.6' opacity='.45' />

	<rect className='ibtaIcoBar ibtaIcoBar1' x='6' y='7.55' width='12' height='2.1' rx='1.05' fill='currentColor' />
	<rect className='ibtaIcoBar ibtaIcoBar2' x='6' y='11.35' width='9' height='2.1' rx='1.05' fill='currentColor' />
	<rect className='ibtaIcoBar ibtaIcoBar3' x='6' y='15.15' width='5.4' height='2.1' rx='1.05' fill='currentColor' />

	<rect className='ibtaIcoCaret' x='12.7' y='14.5' width='1.5' height='3.4' rx='.75' fill='currentColor' />
</svg>;

import { getBackgroundCSS, getBorderBoxCSS, getBoxCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { container } = attributes;
	const { background = {}, padding = {}, margin = {}, radius = {}, border = {} } = container || {};

	const mainSl = `#${id}`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${mainSl}{
			${getBackgroundCSS(background)}
			${isValidCSS('padding', getBoxCSS(padding))}
			${isValidCSS('margin', getBoxCSS(margin))}
			${getBorderBoxCSS(border)}
			${isValidCSS('border-radius', getBoxCSS(radius))}
		}

	`}} />;
}
export default Style;

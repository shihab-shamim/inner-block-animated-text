import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
import { Background, BoxControl as BplBoxControl } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { containerDefaults } from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {
  const { container } = attributes;
  const { background, padding, margin, radius, border } = container || {};

  const setContainer = (val, ...props) => setAttributes({ container: updateData(container, val, ...props) });

  return (
    <>
  

      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "inner-block-text-animation")}
        initialOpen={false}
      >
  
          <Background className="mt10"
            label={__("Background", "inner-block-text-animation")}
            value={background}
            onChange={(val) => setContainer(val, "background")}
            defaults={containerDefaults.background}
          />

          <BplBoxControl className="mt10"
            label={__("Padding", "inner-block-text-animation")}
            values={padding}
            onChange={(val) => setContainer(val, "padding")}
            resetValues={containerDefaults.padding}
          />

          <BplBoxControl className="mt10"
            label={__("Margin", "inner-block-text-animation")}
            values={margin}
            onChange={(val) => setContainer(val, "margin")}
            resetValues={containerDefaults.margin}
          />

          <BplBoxControl className="mt10"
            label={__("Border Radius", "inner-block-text-animation")}
            values={radius}
            onChange={(val) => setContainer(val, "radius")}
            resetValues={containerDefaults.radius}
          />

          <BorderBoxControl className="mt10"
            label={__("Border", "inner-block-text-animation")}
            value={border}
            onChange={(val) => setContainer(val, "border")}
          />

      </PanelBody>
    </>
  );
};

export default Style;

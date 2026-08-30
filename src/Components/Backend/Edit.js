import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import { innerBlocksTemplate, allowedInnerBlocks } from "../../utils/options";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />

      <div {...useBlockProps()}>
        <InnerBlocks template={innerBlocksTemplate} allowedBlocks={allowedInnerBlocks} />
      </div>
    </>
  );
};
export default Edit;

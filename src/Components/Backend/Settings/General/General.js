import { useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';
import { getBlockContent } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData, getOrdinal } from '../../../../utils/functions';


const General = ({ attributes, setAttributes, clientId }) => {
  const { purposeType } = attributes;

  const innerHTML = useSelect((select) => {
    const block = select(blockEditorStore).getBlock(clientId);

    return block ? block.innerBlocks.map((innerBlock) => getBlockContent(innerBlock)).join('') : '';
  }, [clientId]);

  const blockElements = useMemo(() => {
    const doc = new DOMParser().parseFromString(innerHTML, 'text/html');

    return Array.from(doc.body.children).map((el) => el.textContent.trim());
  }, [innerHTML]);

  return (
    <>
  

      <PanelBody className='bPlPanelBody' title={__('Block Elements', 'inner-block-text-animation')} initialOpen={false}>
        {
          blockElements.length ?
            <ol className='ibtaBlockElements'>
              {
                blockElements.map((text, i) => <li key={i}>
                  <span className='ibtaBlockElementIndex'>{getOrdinal(i + 1)}.</span>

                  <TextControl className='ibtaBlockElementText' value={text} readOnly onChange={() => { }} __nextHasNoMarginBottom />
                </li>)
              }
            </ol>
            :
            <p className='ibtaBlockElementsEmpty'>{__('No elements found inside this block.', 'inner-block-text-animation')}</p>
        }
      </PanelBody>
    </>
  )
}

export default General

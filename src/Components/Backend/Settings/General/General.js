import { useState } from 'react';
import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';
import { getBlockContent } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Notice } from '../../../../../../bpl-tools/Components';
import { getOrdinal } from '../../../../utils/functions';
import AnimationControls from './AnimationControls';


const General = ({ attributes, clientId }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const blockElements = useSelect((select) => {
    const block = select(blockEditorStore).getBlock(clientId);

    if (!block) {
      return [];
    }

    return block.innerBlocks.map((innerBlock) => {
      const doc = new DOMParser().parseFromString(getBlockContent(innerBlock), 'text/html');

      return {
        clientId: innerBlock.clientId,
        attributes: innerBlock.attributes,
        text: (doc.body.textContent || '').trim()
      };
    });
  }, [clientId]);

  return (
    <>


      {/* <PanelBody className='bPlPanelBody' title={__('Block Elements', 'inner-block-text-animation')} initialOpen={false}>
        {
          blockElements.length ?
            <ol className='ibtaBlockElements'>
              {
                blockElements.map((element, i) => <li key={element.clientId} onClick={() => setActiveIndex(i)}>
                  <span className='ibtaBlockElementIndex'>{getOrdinal(i + 1)}.</span>

                  <TextControl className='ibtaBlockElementText' value={element.text} readOnly onChange={() => { }} __nextHasNoMarginBottom />
                </li>)
              }
            </ol>
            :
            <p className='ibtaBlockElementsEmpty'>{__('No elements found inside this block.', 'inner-block-text-animation')}</p>
        }
      </PanelBody> */}

      {
        blockElements.length > 0 && <Notice className='ibtaElementsNote' status='info'>
          {__('Each panel is one text element, numbered in the order it appears. Every element animates on its own settings and they all start together — give each a longer Delay to play them one after another.', 'inner-block-text-animation')}
        </Notice>
      }

      {
        blockElements.map((element, i) => <PanelBody
          key={element.clientId}
          className='bPlPanelBody itemPanelBody'
          title={`${getOrdinal(i + 1)} ${__('Element', 'inner-block-text-animation')}`}
          opened={activeIndex === i}
          onToggle={(next) => setActiveIndex(next ? i : null)}
        >
          <AnimationControls element={element} blockAttributes={attributes} />
        </PanelBody>)
      }
    </>
  )
}

export default General

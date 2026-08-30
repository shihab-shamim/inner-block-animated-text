import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';
import { store as blocksStore } from '@wordpress/blocks';
import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions, allowedInnerBlocks } from '../../../../utils/options';
import { updateData, getOrdinal } from '../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;

  const blockElements = useSelect((select) => {
    const { getBlockType } = select(blocksStore);

    return allowedInnerBlocks.map((name) => ({ name, title: getBlockType(name)?.title || name }));
  }, []);

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Purpose', 'inner-block-text-animation')} initialOpen={false}>
        <SelectControl
          label={__('Purpose', 'inner-block-text-animation')}
          labelPosition='left'
          value={purposeType}
          options={purposeTypeOptions}
          onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
        />
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Block Elements', 'inner-block-text-animation')} initialOpen={false}>
        <ol className='ibtaBlockElements'>
          {
            blockElements.map(({ name, title }, i) => <li key={name}>
              <span className='ibtaBlockElementIndex'>{getOrdinal(i + 1)}.</span>
              <span className='ibtaBlockElementTitle'>{title}</span>
            </li>)
          }
        </ol>
      </PanelBody>
    </>
  )
}

export default General

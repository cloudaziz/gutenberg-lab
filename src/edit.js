import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
  [
    'core/columns',
    {},
    [
      ['core/column', {}, [['core/image']]],
      [
        'core/column',
        {},
        [
          [
            'core/heading',
            {
              placeholder: 'Title',
            },
          ],
          [
            'core/paragraph',
            {
              placeholder: 'Description...',
            },
          ],
        ],
      ],
    ],
  ],
];

export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
  ['core/image'],
  [
    'core/heading',
    {
      placeholder: 'Book Title',
    },
  ],
  [
    'core/paragraph',
    {
      placeholder: 'Book description...',
    },
  ],
];

export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}

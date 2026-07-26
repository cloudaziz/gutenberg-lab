import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/image'];
const DEFAULT_BLOCK = ['core/image'];

export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <InnerBlocks
        allowedBlocks={ALLOWED_BLOCKS}
        defaultBlock={DEFAULT_BLOCK}
        directInsert
      />
    </div>
  );
}

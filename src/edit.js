import {
	BlockControls,
	InnerBlocks,
	LinkControl,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	Popover,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';

import { link } from '@wordpress/icons';

import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
	const { url } = attributes;

	const blockProps = useBlockProps();

	const [ isEditingURL, setIsEditingURL ] = useState( false );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ link }
						label="Link"
						isPressed={ isEditingURL }
						onClick={ () => {
							setIsEditingURL( ! isEditingURL );
						} }
					/>
				</ToolbarGroup>
			</BlockControls>

			{ isEditingURL && (
				<Popover
					position="bottom center"
					onClose={ () => setIsEditingURL( false ) }
				>
					<LinkControl
						value={ {
							url,
						} }
						onChange={ ( value ) => {
							setAttributes( {
								url: value.url,
							} );
						} }
					/>
				</Popover>
			) }

			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</>
	);
}

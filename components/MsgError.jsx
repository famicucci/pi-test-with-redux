import React from 'react';

const MsgError = (props) => {
	const { content } = props;

	return (
		<div className="w-full border border-red-500 rounded-lg p-2">
			<p className="text-center text-red-500">{content}</p>
		</div>
	);
};

export default MsgError;

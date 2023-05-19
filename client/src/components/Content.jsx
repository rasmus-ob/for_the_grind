import React from 'react';

import '../css/content.css';

function Content({ pageName }) {
	return (
		<div className='content'>
			<h1>{pageName}</h1>
			<div className='content-graph'></div>
		</div>
	);
}

export default Content;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const WorksItems = ({ item }) => {
	const url = item.sourceUrl && item.sourceUrl !== '#' ? item.sourceUrl : null;

	const openRepo = () => {
		if (url) window.open(url, '_blank', 'noopener,noreferrer');
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			openRepo();
		}
	};

	return (
		<div
			className='work__card'
			role='link'
			tabIndex={0}
			aria-label={`${item.title} on GitHub`}
			onClick={openRepo}
			onKeyDown={handleKeyDown}
		>
			<img src={item.image} alt={item.title} className='work__img' />
			<h3 className='work__title'>{item.title}</h3>

			<span className='work__button'>
				<i className='bx bxl-github work__button-icon' /> View on GitHub
			</span>
		</div>
	);
};

export default WorksItems;

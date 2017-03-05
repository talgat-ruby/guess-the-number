import React from 'react';
import $class from 'classnames';
import './Timeline.css';

const Timeline = ({ values }) => {
	const renderValues = (item, index) => (
		<div className={$class({ right: index % 2 === 0, left: index % 2 !== 0 })}>
			<div className="flag-wrapper">
				<span className="flag">freelancer</span>
				<span className="time-wrapper">2013-present</span>
			</div>
			<div className="desc">My current employment. Way better than the position before!</div>
		</div>
	);

	return (
		<ul className="timeline">
			{values.map(renderValues)}
		</ul>
	);
};

export default Timeline;

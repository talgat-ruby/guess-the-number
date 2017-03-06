import React from 'react';
import $class from 'classnames';
import './Timeline.css';

const Timeline = ({ values, startRight  }) => {
	const renderValues = ({ value, type }, index) => {
		const rightSide = startRight === (index % 2 === 0);

		return (
			<li className={$class({ right: rightSide, left: !rightSide })} key={index}>
				<div className="flag-wrapper">
					<span className="flag">{type}</span>
				</div>
				<div className="desc">{value}</div>
			</li>
		);
	};

	return (
		<ul className="timeline">
			{values.map(renderValues)}
		</ul>
	);
};

export default Timeline;

import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-s'>
			<img alt='' src= {`https://robohash.org/${id}`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
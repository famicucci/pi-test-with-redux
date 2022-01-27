import React, { useContext, useState } from 'react';
import PeopleContext from '../context/people/PeopleContext';

const Card = (props) => {
	const { name, height, gender } = props;

	const [effect, setEffect] = useState(false);

	const { removePerson } = useContext(PeopleContext);

	const handleClick = () => {
		setEffect(true);
	};

	const onAnimationEnd = () => {
		setEffect(false);
		removePerson(name);
	};

	return (
		<div
			className={`${
				effect && 'animate-wiggle'
			} flex border-solid border-gray-200 border shadow-md p-4 rounded-lg mb-2`}
			onAnimationEnd={onAnimationEnd}
		>
			<div className="grow">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p>
					Heigh: <span>{height}</span>
				</p>
				<p>
					Gender: <span>{gender}</span>
				</p>
			</div>
			<div>
				<button
					type="button"
					className="bg-red-500 hover:bg-red-700 transition duration-150 ease-in text-white p-2 rounded-lg ml-2 font-semibold"
					onClick={handleClick}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;

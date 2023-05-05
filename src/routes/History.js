import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HeroImg2 from '../components/HeroImg2';
import { MdDelete } from 'react-icons/md';

const History = () => {
	const heading = 'HISTORY';
	const [arrayLinks, setArrayLinks] = useState([]);

	useEffect(() => {
		const arrayLinks = localStorage.getItem('arrayLinks');
		setArrayLinks(JSON.parse(arrayLinks));
	}, []);

	const handleDelete = arrayIndex => {
		const newArray = arrayLinks.filter((array, index) => {
			if(index !== arrayIndex){
				return array;
			}
		});
		setArrayLinks(newArray);
		localStorage.setItem("arrayLinks", JSON.stringify(newArray))
	};

	return (
		<>
			<div>
				<HeroImg2 heading={heading} />
				{arrayLinks && arrayLinks.length
					? arrayLinks.map((array, arrayIndex) => {
							return (
								<div key={arrayIndex}>
									Link - {array.link}
									<br />
									NewLink - {array.newLink}
									<br />
									ExpiryDate - {array.expiryDate}
									<MdDelete onClick={() => handleDelete(arrayIndex)}></MdDelete>
								</div>
							);
					  })
					: 'array is empty'}

				{/* <HeroImg/> */}
			</div>
		</>
	);
};

export default History;

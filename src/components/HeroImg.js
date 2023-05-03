import './HeroImgStyles.css';
import React, { useState } from 'react';
import IntroImg from '../assets/bg_01.jpg';
import { BsArrowRepeat } from 'react-icons/bs';
import '../index.css';
const HeroImg = () => {
	const [link, setLink] = useState('');
	const [newLink, setNewLink] = useState('');
	const [expiryDate, setExpiryDate] = useState('');

	const handleLinkChange = e => {
		setLink(e.target.value);
	};

	const handleDate = e => {
		setExpiryDate(e.target.value);
	};

	const handleSubmit = () => {
		console.log({ link, expiryDate });
	};
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='into-img' src={IntroImg} alt='intro-img' />
			</div>
			<div className='content'>
				{/* <p>Hi! I am a Software Developer</p> */}
				<h1>URL-Shortener</h1>
				<div className='border'>
					<form className='link'>
						<input
							type='date'
							value={expiryDate}
							onChange={(e)=>handleDate(e)}
							className='set-date'
							placeholder='Expiry date'
						/>
						<input
							type='text'
							value={link}
							onChange={handleLinkChange}
							className='link-input'
							placeholder='Paste link or URL'
							size='50'
						/>
						<button type='button' onClick={handleSubmit} className='submit'>
							<BsArrowRepeat
								size={20}
								style={{ color: 'black', alignItems: 'center' }}
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;

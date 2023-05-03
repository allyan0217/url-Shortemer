import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/bg_01.jpg';
import { BsArrowRepeat } from 'react-icons/bs';
import '../index.css';
const HeroImg = () => {
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
						<input type='date' className='set-date' placeholder='Expiry date' />
						<input
							type='text'
							className='link-input'
							placeholder='Paste link or URL'
							size='50'
						></input>
						<button type='button' className='submit'>
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

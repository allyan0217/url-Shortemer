import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/bg_01.jpg';
import { Link } from 'react-router-dom';
import '../index.css';

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='into-img' src={IntroImg} alt='intro-img' />
			</div>
			<div className='content'>
				<p>Hi! I am a Software Developer</p>
				<h1>React Developer</h1>
				<div>
					<form>
						<input
							type='text'
							placeholder='Paste Link or URL'
						></input>
						<button>
							SUBMIT
						</button>
						{/* <Link to='/history' className='btn btn-light'>HISTORY</Link> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;

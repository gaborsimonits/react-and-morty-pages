import React from "react";
import logo from "./barmi.png";

const Landing = ({ setIsShownCharacters, setIsShownLocations }) => {
	return (
		<div className='landingPage'>
			<img id='logo' src={logo} alt='' />
			<br />
			<div className='landingInfo'>
				<button
					className='btns'
					onClick={() => setIsShownCharacters(true)}
					id='charBtn'
				>
					Characters
				</button>
				<p>The above button will introduce you to the Characters</p>
				<hr></hr>
				<button
					className='btns'
					onClick={() => setIsShownLocations(true)}
					id='locBtn'
				>
					Locations
				</button>
				<p>The above button will introduce you to the Locations</p>
			</div>
		</div>
	);
};

export default Landing;

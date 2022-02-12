import React from "react";

const Characters = ({ character }) => {
	const [extraData, setExtraData] = React.useState(false);
	const [enlargeDiv, setEnlargeDiv] = React.useState("characterCard");

	const showExtraData = () => {
		setExtraData(!extraData);
		if (enlargeDiv === "characterCard") {
			setEnlargeDiv("characterCard extraCard");
		} else {
			setEnlargeDiv("characterCard");
		}
	};

	return (
		<div className={enlargeDiv} onClick={showExtraData}>
			<img className='charImgs' src={character.image} alt='' />
			<h4>Name: {character.name}</h4>
			<p>Species: {character.species}</p>
			<p>{character.id}</p>
			{extraData && (
				<div>
					{" "}
					<h4>Status: {character.status}</h4>{" "}
					<p>Location: {character.location.name}</p>
				</div>
			)}
		</div>
	);
};

export default Characters;

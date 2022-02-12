import React from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";

const Locations = ({ location, setCube, cube }) => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const [residents, setResidents] = React.useState([]);

	// console.log(residents)

	const get = async () => {
		const newArray = [];

		for (const resident of location.residents) {
			const response = await axios.get(resident);
			if (newArray.length <= 20) {
				newArray.push(response.data.name);
				newArray.push(" - ");
			}
		}
		newArray.pop();
		setResidents(newArray);
	};

	React.useEffect(() => {
		get();
	}, []);

	const cubeflip = () => {
		setIsFlipped(!isFlipped);
		if (cube === "cube") {
			setCube("flipped");
		} else {
			setCube("cube");
		}
	};

	return (
		<div className='locations-wrap-div'>
			<ReactCardFlip
				isFlipped={isFlipped}
				flipDirection='vertical'
				key={location.id}
			>
				<div key={location.id} className='locationCard' onClick={cubeflip}>
					<h2>Location</h2>
					<h1>Name: {location.name}</h1>
					<h2>Type: {location.type}</h2>
					<p>{location.id}</p>
					<p className='locHiddenInfo'> Click to reveal more info </p>
				</div>
				<div key={location.id} className='locationCard' onClick={cubeflip}>
					<h2>Dimension: {location.dimension}</h2>
					{residents.length !== 0 ? (
						<>
							<h4>Residents:</h4>
							{residents.map((resident) => (
								<li style={{ display: "inline" }}>{resident}</li>
							))}
						</>
					) : (
						<h4> There is no resident at this location </h4>
					)}
					<p className='locHiddenInfo'> Click to go back </p>
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default Locations;

import React from "react";
import { useCharacters, useLocations } from "./api/useData";
import Landing from "./Components/Landing";
import Characters from "./Components/Characters";
import Locations from "./Components/Locations";
import gif from "./Components/rick-and-morty.gif";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

function App() {
	const [isShownCharacters, setIsShownCharacters] = React.useState(false);
	const [isShownLocations, setIsShownLocations] = React.useState(false);
	const [characterPage, setCharacterPage] = React.useState(1);
	const [locationPage, setLocationPage] = React.useState(1);
	const [scrollLocations, setScrollLocations] = React.useState([]);
	const [loaderVal, setLoaderVal] = React.useState("Loading...");
	const [cube, setCube] = React.useState("cube");

	const characters = useCharacters(characterPage);
	const locations = useLocations(locationPage);

	console.log("Characters data: ");
	console.log(characters);
	// console.log("Locations data: ");
	// console.log(locations);

	const trigger = () => {
		setLocationPage(locationPage + 1);
		allLocations(locationPage);
	};

	const allLocations = async () => {
		try {
			const currentloc = await axios.get(
				"https://rickandmortyapi.com/api/location/?page=" + locationPage
			);
			const newLocations = currentloc.data.results;
			setScrollLocations([...scrollLocations, ...newLocations]);
		} catch (error) {
			setLoaderVal("There are no more locations, loading is completed!");
		}
	};

	React.useEffect(() => {
		allLocations();
	}, []);

	console.log(scrollLocations);

	return (
		<div className='App'>
			{isShownCharacters ? (
				<>
					<div className='charPage'>
						<div className='char-wrap-div'>
							{characters.results.map((character) => (
								<Characters character={character} />
							))}
						</div>
						<button
							className='btns'
							onClick={() => setIsShownCharacters(false)}
						>
							Back
						</button>
						{characterPage !== 1 && (
							<i
								className='fas fa-angle-left prev'
								onClick={() => setCharacterPage(characterPage - 1)}
							></i>
						)}
						{characterPage !== 42 && (
							<i
								className='fas fa-angle-right next'
								onClick={() => setCharacterPage(characterPage + 1)}
							></i>
						)}
					</div>
				</>
			) : isShownLocations ? (
				<div className='locPage'>
					<div className={cube}>
						<img
							className='side top flippety'
							id='gif'
							src={gif}
							alt='rickandmorty'
						/>
						<img
							className='side left flop'
							id='gif'
							src={gif}
							alt='rickandmorty'
						/>
						<img className='side front' id='gif' src={gif} alt='rickandmorty' />
					</div>
					<InfiniteScroll
						dataLength={scrollLocations.length}
						next={trigger}
						hasMore={true}
						loader={<h4 className='loadMsg'>{loaderVal}</h4>}
					>
						{scrollLocations.map((location) => (
							<Locations cube={cube} setCube={setCube} location={location} />
						))}
					</InfiniteScroll>
					<button className='btns' onClick={() => setIsShownLocations(false)}>
						Back
					</button>
				</div>
			) : (
				<Landing
					setIsShownCharacters={setIsShownCharacters}
					setIsShownLocations={setIsShownLocations}
				/>
			)}
		</div>
	);
}

export default App;

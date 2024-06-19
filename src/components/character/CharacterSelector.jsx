const CharacterSelector = () => {
	return (
		<div>
			<div>
				<h3>Character name</h3>
			</div>
			<div className="flex flex-wrap justify-items-center gap-4 cursor-pointer">
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
						alt="Luke Skywalker"
					/>
				</div>
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
						alt="C-3PO"
					/>
				</div>
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
						alt="R2-D2"
					/>
				</div>
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
						alt="Darth Vader"
					/>
				</div>
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/5.jpg"
						alt="Leia Organa"
					/>
				</div>
				<div className="border rounded w-32 h-32 hover:bg-cyan-900 hover:scale-110 transition-all">
					<img
						className="w-full h-full object-cover"
						src="https://starwars-visualguide.com/assets/img/characters/10.jpg"
						alt="Obi Wan Kenobi"
					/>
				</div>
			</div>
		</div>
	);
};

export default CharacterSelector;

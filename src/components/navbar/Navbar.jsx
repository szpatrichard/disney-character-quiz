import DisneyPlusLogo from "../../assets/img/logo/disney_plus.png";
import LucasfilmLogo from "../../assets/img/logo/lucasfilm.png";

const Navbar = () => {
	return (
		<div>
			<div class="flex gap-4 mb-4">
				<img src={DisneyPlusLogo} alt="Disney+" className="max-h-12" />
				<img src={LucasfilmLogo} alt="Lucasfilm" className="max-h-12" />
			</div>
			<nav>
				<ul className="flex gap-4 text-sm">
					<li>
						<a
							href="https://www.disney.com"
							target="_blank"
							rel="noreferrer"
						>
							Disney
						</a>
					</li>
					<li>
						<a
							href="https://www.disneyplus.com"
							target="_blank"
							rel="noreferrer"
						>
							Disney+
						</a>
					</li>
					<li>
						<a
							href="https://www.lucasfilm.com/"
							target="_blank"
							rel="noreferrer"
						>
							Lucasfilm
						</a>
					</li>
					<li>
						<a
							href="https://www.starwars.com/"
							target="_blank"
							rel="noreferrer"
						>
							Star Wars
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

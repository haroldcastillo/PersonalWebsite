import "./Navigation.scss";
import Logo from "../components/ui/LogoAnimation";
function Naviagation() {
	return (
		<nav id="Navigation">
			<div id="Logo">
				<Logo />
			</div>
			<ul id="Links">
				<li>
					<a href="#AboutMe">About</a>
				</li>
				<li>
					<a href="#MyProjects">Projects</a>
				</li>
				<li>
					<a
						href="https://drive.google.com/file/d/13qUnvvY_oX4JMnbQ8QrjEkS-oL9ULCot/view?usp=drive_link"
						target="_blank"
						id="Resume"
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Naviagation;

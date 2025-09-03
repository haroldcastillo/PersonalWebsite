import "./LogoAnimation.scss";
import Logo from "../../assets/images/Logo.png";

function LogoAnimation() {
	return (
		<a href="/" className="LogoAnimation">
			<img src={Logo} alt="" />
		</a>
	);
}

export default LogoAnimation;

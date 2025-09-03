import { useState, useEffect } from "react";
import UI_iCertify from "../../assets/images/Projects/UserInterface/iCertifyWebsite.jpg";
import UI_Chrystarin from "../../assets/images/Projects/UserInterface/ChrystalinPersonalWebsite.jpg";
import UI_MyArcadia from "../../assets/images/Projects/UserInterface/MyArcadiaUserInterface.jpg";
import UI__ShirtMe from "../../assets/images/Projects/UserInterface/ShirthMeWebsite.jpg";
import UI__SIP from "../../assets/images/Projects/UserInterface/SIPApplicationUI.jpg";

import Logo__ARK from "../../assets/images/Projects/Logo/Logo-ARKRuneKnights.jpg";
import Logo__Chuunnibyou from "../../assets/images/Projects/Logo/Logo-Chuunnibyou.jpg";
import Logo__Chrystarin from "../../assets/images/Projects/Logo/Logo-Chrystarin.jpg";
import Logo__FistJustice from "../../assets/images/Projects/Logo/Logo-JusticeFist.jpg";
import Logo__Froythena from "../../assets/images/Projects/Logo/Logo-Froythena.jpg";
import Logo__ICT from "../../assets/images/Projects/Logo/Logo-ICTSR.jpg";
import Logo__TopFrag from "../../assets/images/Projects/Logo/Logo-TopFrag.jpg";

import Poster__Chrystarin from "../../assets/images/Projects/Poster/Poster-Chrystarin.jpg";
import Poster__WesternBicutan from "../../assets/images/Projects/Poster/Poster-WesternBicutan.jpg";
import Poster__PersonalProject from "../../assets/images/Projects/Poster/Poster-Personal-Projects.jpg";

import Merch__1 from "../../assets/images/Projects/Merch/Merch.jpg";
import Merch__Car from "../../assets/images/Projects/Merch/Merch-Car.jpg";

import Infograph__Color from "../../assets/images/Projects/Infographics/Infographics-Colors.jpg";
import Infograph__Shape from "../../assets/images/Projects/Infographics/Infographics-Colors.jpg";
import Infograph__Challenges from "../../assets/images/Projects/Infographics/Infographics-Challenges.jpg";

interface ImageIn {
	Image?: string;
}

function ImageFinder(props: ImageIn) {
	const [imageValue, setImagevalue] = useState<string>();

	useEffect(() => {
		switch (props.Image) {
			case "0001":
				setImagevalue(UI_iCertify);
				break;
			case "0002":
				setImagevalue(UI_Chrystarin);
				break;
			case "0003":
				setImagevalue(UI_MyArcadia);
				break;
			case "0004":
				setImagevalue(UI__ShirtMe);
				break;
			case "0005":
				setImagevalue(UI__SIP);
				break;

			case "0011":
				setImagevalue(Logo__ARK);
				break;
			case "0012":
				setImagevalue(Logo__Chuunnibyou);
				break;
			case "0013":
				setImagevalue(Logo__Chrystarin);
				break;
			case "0014":
				setImagevalue(Logo__FistJustice);
				break;
			case "0015":
				setImagevalue(Logo__Froythena);
				break;
			case "0016":
				setImagevalue(Logo__ICT);
				break;
			case "0017":
				setImagevalue(Logo__TopFrag);
				break;

			case "0021":
				setImagevalue(Poster__Chrystarin);
				break;
			case "0022":
				setImagevalue(Poster__WesternBicutan);
				break;
			case "0023":
				setImagevalue(Poster__PersonalProject);
				break;

			case "0031":
				setImagevalue(Merch__1);
				break;
			case "0032":
				setImagevalue(Merch__Car);
				break;

			case "0041":
				setImagevalue(Infograph__Color);
				break;
			case "0042":
				setImagevalue(Infograph__Shape);
				break;
			case "0043":
				setImagevalue(Infograph__Challenges);
				break;
			default:
				break;
		}
	});

	return (
		<>
			<img loading="lazy" className="imgFull" src={imageValue} alt="" />
		</>
	);
}

export default ImageFinder;

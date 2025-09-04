import React, { useRef, useState, useEffect } from "react";
import "./main.scss";
import Navigation from "../layout/Naviagation";
import Footer from "../layout/Footer";
import "./main.scss";
import { Data } from "../lib/constants";

import MyImg from "./../assets/images/Profile Image.png";
import WavePanel from "./../assets/images/WavePanel.png";
import LogoCircle from "./../assets/images/LogoCircle.png";
import ProjectCard from "../components/ui/ProjectCard";

// import UIiCertify from './../Images/Projects/UserInterface/iCertify.png';
import ModalComponent from "../components/ui/ModalComponent";
import { motion, useInView, useAnimation } from "framer-motion";

interface DataValue {
	ID: string;
	Type: string;
	Title: string;
	Role: string;
	Date: string;
	Image: string;
	Description: string;
	Illustrator: string;
	Photoshop: string;
	AfterEffects: string;
	Figma: string;
	XD: string;
	Premier: string;
}

const Main: React.FC = () => {
	const [projectCateg, setProjectCateg] = useState<number>(1);
	const [modalStatus, setModalStatus] = useState<boolean>(false);
	const [modalData, setModalData] = useState<DataValue>();

	const Next = (ID?: string) => {
		const List = Data.filter(
			(item) => parseInt(item.Type) === projectCateg
		);
		for (let i = 0; i < List.length; i++) {
			if (List[List.length - 1].ID === ID) {
				setModalData(List[0]);
				break;
			}
			if (List[i].ID === ID) {
				setModalData(List[i + 1]);
				break;
			}
		}
	};

	const mainControls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<>
			<div id="BodyHolder" style={{ padding: "1em" }}>
				<Navigation />
				<div id="Content">
					<div ref={ref} id="Head" className="Section1">
						<motion.div
							id="TextContent"
							variants={{
								hidden: {
									opacity: 0,
									y: 75,
								},
								visible: {
									opacity: 1,
									y: 0,
								},
							}}
							initial="hidden"
							animate={mainControls}
							transition={{ duration: 1, delay: 0.25 }}
						>
							<h5>Hello! my name is </h5>
							<h3>Harold James H. Castillo</h3>
							<h5>A UI/UX designer and Web Developer</h5>
						</motion.div>
						<div id="SocialMedia">
							<a
								href="https://www.facebook.com/HaroldGraphsPH"
								target="_blank"
							>
								<svg
									className="SVG"
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36.64 68.05"
								>
									<defs>
										<style></style>
									</defs>
									<path
										id="Path_16"
										data-name="Path 16"
										d="M60.3,36.44l0,7.31H70.43a1.71,1.71,0,0,1,1.71,1.71V56.32A1.7,1.7,0,0,1,70.43,58H60.19L60,87.42H45.88V58H37.21a1.7,1.7,0,0,1-1.7-1.71V45.46a1.71,1.71,0,0,1,1.7-1.71h8.67V33.89a7.36,7.36,0,0,1,.17-1.55c.67-2.92,3.05-11.51,14-12.58a53.48,53.48,0,0,1,11.1-.2,1.07,1.07,0,0,1,1,1.08v10.1a1.61,1.61,0,0,1-1.61,1.61H64.42A4.11,4.11,0,0,0,60.3,36.44Z"
										transform="translate(-35.51 -19.36)"
									/>
								</svg>
							</a>
							<a
								href="https://github.com/haroldcastillo"
								target="_blank"
							>
								<svg
									className="SVG"
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 61.11 67.87"
								>
									<defs>
										<style></style>
									</defs>
									<path
										id="Path_12"
										data-name="Path 12"
										d="M43.92,71.44c-2.56.72-8.22,1.56-11.6-3.51,0,0-3.2-6.37-8.94-5A1.25,1.25,0,0,0,24,64.63l.11,0a14.44,14.44,0,0,1,6.32,8.27c1.7,5.15,10.09,5.88,14.5,4.71v7.93a6.93,6.93,0,0,1-2.3,1.75H69.56s-2.58-.54-2.63-1.51c0-.81-.08-11.65-.09-15.24a6.4,6.4,0,0,0-.51-2.48A7.54,7.54,0,0,0,64,64.82S80.21,64.87,83.61,51c0,0,3.31-13.47-3.79-19.54,0,0,1.91-6.64-.24-11.53,0,0-4.56-1-12.07,4.23,0,0-11.34-3.5-22.58.1,0,0-6.29-4.95-12.37-4.76,0,0-3,5.88-.43,11.62,0,0-7.25,6.42-3.75,19.84,0,0,2.48,13.68,19.4,14a10.51,10.51,0,0,0-2.51,5A1.85,1.85,0,0,1,43.92,71.44Z"
										transform="translate(-23.27 -19.45)"
									/>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/haroldgraphs/"
								target="_blank"
							>
								<svg
									className="SVG"
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 68.29 68.29"
								>
									<defs>
										<style></style>
									</defs>
									<g id="Group_11" data-name="Group 11">
										<path
											id="Path_13"
											data-name="Path 13"
											d="M51.4,45.46A12.06,12.06,0,1,0,63.46,57.52,12.06,12.06,0,0,0,51.4,45.46Zm0,0A12.06,12.06,0,1,0,63.46,57.52,12.06,12.06,0,0,0,51.4,45.46Zm10-25.16H40.74A23.85,23.85,0,0,0,16.91,44.12V64.76A23.86,23.86,0,0,0,40.74,88.59H61.38A23.85,23.85,0,0,0,85.2,64.76V44.12A23.84,23.84,0,0,0,61.38,20.3Zm-10,55.38A18.17,18.17,0,1,1,69.56,57.52,18.18,18.18,0,0,1,51.4,75.68Zm17.23-36a4.32,4.32,0,1,1,4.31-4.32,4.31,4.31,0,0,1-4.31,4.32ZM51.4,45.46A12.06,12.06,0,1,0,63.46,57.52,12.06,12.06,0,0,0,51.4,45.46Z"
											transform="translate(-16.91 -20.3)"
										/>
									</g>
								</svg>
							</a>
							<a
								href="https://www.behance.net/HaroldGraphs"
								target="_blank"
							>
								<svg
									className="SVG"
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 107.88 65.28"
								>
									<defs>
										<style></style>
									</defs>
									<g id="Group_41" data-name="Group 41">
										<path
											id="Path_14"
											data-name="Path 14"
											d="M45.85,47.57c4.42-6.39,4.68-19.09-8.63-25.58a16.94,16.94,0,0,0-7.38-1.66H1.13a1,1,0,0,0-1,1V84.61a1,1,0,0,0,1,1H35.08a4.38,4.38,0,0,0,.88-.09C38.78,85,51.83,80.37,53.38,67,54.69,55.8,45.85,47.57,45.85,47.57Zm-34-15h19a4.86,4.86,0,0,1,2.67.8,6.17,6.17,0,0,1,2.84,5.32,6.28,6.28,0,0,1-4,5.66,4.69,4.69,0,0,1-2.05.46H11.83Zm24,41a6.07,6.07,0,0,1-2.52.54h-22V56.46H33.63a4.71,4.71,0,0,1,1.78.35c2.08.88,6.88,3.43,6.88,8.49,0,4.73-4.19,7.27-6.44,8.29Z"
											transform="translate(-0.12 -20.33)"
										/>
										<path
											id="Path_15"
											data-name="Path 15"
											d="M108,60A25.59,25.59,0,0,0,82.42,34.41h0A25.59,25.59,0,0,0,56.82,60h0A25.59,25.59,0,0,0,82.41,85.59h0A25.59,25.59,0,0,0,105.9,70.16L90.8,70s-.34,4.58-9.19,4.08S70.4,63.17,70.4,63.17h37.39A24,24,0,0,0,108,60ZM71.82,52.46A12.06,12.06,0,0,1,83.21,46.4c8.27.33,10.2,6.06,10.2,6.06Z"
											transform="translate(-0.12 -20.33)"
										/>
										<path
											id="Rectangle_14"
											data-name="Rectangle 14"
											d="M72.15,21.32H92.67a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4H72.15a4,4,0,0,1-4-4h0A4,4,0,0,1,72.15,21.32Z"
											transform="translate(-0.12 -20.33)"
										/>
									</g>
								</svg>
							</a>
						</div>
						<img id="MyImage" src={MyImg} alt="" />
					</div>

					<div className="Section2">
						<div id="AboutMe" className="Section2Content">
							<img className="Image" src={LogoCircle} alt="" />
							<div className="Content">
								<h5 className="Content__Title">About Me</h5>
								<p className="Content__P">
									I'm a detail-oriented programmer and graphic
									designer with a passion for crafting
									captivating and responsive web applications.
									My expertise lies in solving complex design
									challenges and developing seamless user
									interfaces that elevate user experiences.{" "}
								</p>
							</div>
						</div>
						<img src={WavePanel} alt="" />
					</div>

					<div id="MyProjects" className="Section3">
						<div className="Header">
							<h5>My Projects</h5>
							<ul>
								<li
									className={
										projectCateg == 1 ? "active" : ""
									}
									onClick={() => {
										setProjectCateg(1);
									}}
								>
									User Interface
								</li>
								<li
									className={
										projectCateg == 2 ? "active" : ""
									}
									onClick={() => {
										setProjectCateg(2);
									}}
								>
									Logo
								</li>
								<li
									className={
										projectCateg == 3 ? "active" : ""
									}
									onClick={() => {
										setProjectCateg(3);
									}}
								>
									Posters
								</li>
								<li
									className={
										projectCateg == 4 ? "active" : ""
									}
									onClick={() => {
										setProjectCateg(4);
									}}
								>
									Merchandise
								</li>
								<li
									className={
										projectCateg == 5 ? "active" : ""
									}
									onClick={() => {
										setProjectCateg(5);
									}}
								>
									Infographics
								</li>
							</ul>
						</div>
						<div>
							{projectCateg === 1
								? Data.filter(
										(item) => parseInt(item.Type) === 1
								  ).map((item, index) => (
										<React.Fragment key={index}>
											<ProjectCard
												Type={
													index % 2 === 0
														? "Left"
														: "Right"
												}
												setActive={setModalStatus}
												NumberIndex={index}
												Data={item}
												setModalData={setModalData}
											/>
										</React.Fragment>
								  ))
								: ""}
							{projectCateg === 2
								? Data.filter(
										(item) => parseInt(item.Type) === 2
								  ).map((item, index) => (
										<React.Fragment key={index}>
											<ProjectCard
												Type={
													index % 2 === 0
														? "Left"
														: "Right"
												}
												setActive={setModalStatus}
												NumberIndex={index}
												Data={item}
												setModalData={setModalData}
											/>
										</React.Fragment>
								  ))
								: ""}
							{projectCateg === 3
								? Data.filter(
										(item) => parseInt(item.Type) === 3
								  ).map((item, index) => (
										<React.Fragment key={index}>
											<ProjectCard
												Type={
													index % 2 === 0
														? "Left"
														: "Right"
												}
												setActive={setModalStatus}
												NumberIndex={index}
												Data={item}
												setModalData={setModalData}
											/>
										</React.Fragment>
								  ))
								: ""}
							{projectCateg === 4
								? Data.filter(
										(item) => parseInt(item.Type) === 4
								  ).map((item, index) => (
										<React.Fragment key={index}>
											<ProjectCard
												Type={
													index % 2 === 0
														? "Left"
														: "Right"
												}
												setActive={setModalStatus}
												NumberIndex={index}
												Data={item}
												setModalData={setModalData}
											/>
										</React.Fragment>
								  ))
								: ""}
							{projectCateg === 5
								? Data.filter(
										(item) => parseInt(item.Type) === 5
								  ).map((item, index) => (
										<React.Fragment key={index}>
											<ProjectCard
												Type={
													index % 2 === 0
														? "Left"
														: "Right"
												}
												setActive={setModalStatus}
												NumberIndex={index}
												Data={item}
												setModalData={setModalData}
											/>
										</React.Fragment>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<Footer />

			<ModalComponent
				status={modalStatus}
				setActive={setModalStatus}
				DataValue={modalData}
				Next={Next}
			/>
		</>
	);
};

export default Main;

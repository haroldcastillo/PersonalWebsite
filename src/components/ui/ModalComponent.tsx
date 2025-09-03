import React from "react";
import "./ModalComponent.scss";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import Logo from "./LogoAnimation";

import IllustratorLogo from "../../assets/images/Icons/illustrator.png";
import AfterEffectsLogo from "../../assets/images/Icons/ae.png";
import FigmaLogo from "../../assets/images/Icons/figma.png";
import PremiereProLogo from "../../assets/images/Icons/pr.png";
import XDLogo from "../../assets/images/Icons/xd.png";
import PhotoshopLogo from "../../assets/images/Icons/photoshop.png";
import ImageFinder from "./ImageFinder";
interface ModalValue {
    DataValue?: {
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
    };
    Next: (ID?: string) => void;
    status?: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
function ModalComponent(props: ModalValue) {
    if (!props.status) {
        return null;
    }
    return (
        <div className="Modal">
            <div
                className="Modal__Exit"
                onClick={() => {
                    props.setActive(false);
                }}
            ></div>
            <div className="Modal__Container">
                <div className="Modal__ContentHolder">
                    <div className="Modal__HeaderContent">
                        <h6 className="Modal__Title">
                            {props.DataValue?.Title}
                        </h6>
                        <div className="Modal__Infos">
                            <p className="BodyText1 Modal__Role">
                                {props.DataValue?.Role}
                            </p>
                            <div className="Modal__Calendar">
                                <InsertInvitationIcon />
                                <p>{props.DataValue?.Date}</p>
                            </div>
                        </div>
                    </div>
                    <ImageFinder Image={props.DataValue?.ID} />
                    <img
                        className="imgFull"
                        src={props.DataValue?.Image}
                        alt=""
                    />
                    <div className="Modal__FooterContent">
                        <div className="FooterContent__Description">
                            <h6 className="Footer__Title">Description</h6>
                            <p>{props.DataValue?.Description}</p>
                        </div>
                        <div className="FooterContent__Tools">
                            <h6 className="Footer__Title">Tools</h6>
                            <div className="Footer__ToolsList">
                                {!(props.DataValue?.Illustrator === "") ? (
                                    <img
                                        src={IllustratorLogo}
                                        alt="Illustrator"
                                    />
                                ) : (
                                    ""
                                )}
                                {!(props.DataValue?.AfterEffects === "") ? (
                                    <img
                                        src={AfterEffectsLogo}
                                        alt="After Effects"
                                    />
                                ) : (
                                    ""
                                )}
                                {!(props.DataValue?.Figma === "") ? (
                                    <img src={FigmaLogo} alt="Figma" />
                                ) : (
                                    ""
                                )}
                                {!(props.DataValue?.XD === "") ? (
                                    <img src={XDLogo} alt="" />
                                ) : (
                                    ""
                                )}
                                {!(props.DataValue?.Photoshop === "") ? (
                                    <img src={PhotoshopLogo} alt="" />
                                ) : (
                                    ""
                                )}
                                {!(props.DataValue?.Premier === "") ? (
                                    <img src={PremiereProLogo} alt="" />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Modal__NavHolder">
                    <div className="Modal__Nav">
                        <Fab
                            color="primary"
                            aria-label="add"
                            onClick={() => {
                                props.Next(props.DataValue?.ID);
                            }}
                        >
                            <NavigateNextIcon />
                        </Fab>
                        <IconButton
                            aria-label="delete"
                            onClick={() => {
                                props.setActive(false);
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Logo />
                        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;

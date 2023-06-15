import styled from "styled-components";
import { mainColor, subColor } from "../../../assets/styles/color";

interface SquareBtnProps {
    action: boolean;
    backColor?: string;
}

export const SquareBtn = styled.button<SquareBtnProps>`
    padding:0 13px;
    border-radius: 4px;
    display:flex;
    align-items:center;
    justify-content : center;
    cursor: pointer;
    background-color:${(props) => (props.backColor ? props.backColor : mainColor) };
    background-image: none;
    color:#fff;
    height:100%;
    outline:none;
    border:none;
    width:100%;
    // background: linear-gradient(90.96deg, ${mainColor} 5.9%, ${subColor} 92.66%);
`;
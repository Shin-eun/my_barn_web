import styled from "styled-components";
import { mainColor, grayColor, subColor } from "../../assets/styles/color";

export const Navigation = styled.nav`
    position:fixed;
    top:calc(100vh - 49px);
    left:0;
    width:100%;
    z-index:10;
    border-top:1px solid ${grayColor};
    height:49px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:50px;
    background-color:#fff; //${mainColor};
`;

export const HomeBtn = styled.p`
    width:28px;
    height:28px;
    svg{
        width:100%;
        height:100%;
        fill : ${mainColor};
    }
`;
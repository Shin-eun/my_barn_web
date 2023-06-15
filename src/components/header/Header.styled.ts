import styled from "styled-components";
import { mainColor, grayColor, subColor } from "../../assets/styles/color";

export const Header = styled.header`
    height:50px;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    background-color: #fff;
    width:100%;
    border-bottom:1px solid ${grayColor};
`;


export const Logo = styled.p` 
    text-align:center;
    line-height:50px;
    width:100%;
    color:${mainColor};
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    svg{
        fill :${subColor};
        margin-left:8px;
    }
`;

export const SearchIcon = styled.p`
    width:24px;
    height:24px;
    position:absolute;
    top:12px;
    right:12px;
    svg{
        width:24px;
        height:24px;
        fill:${mainColor};
    }
`;
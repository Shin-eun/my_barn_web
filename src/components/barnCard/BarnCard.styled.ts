import styled from "styled-components";
import { mainColor, grayColorF1 } from "../../assets/styles/color";
import { TextInputBox } from "../inputs/Input.styled";

export const BarnCard = styled.div`
    border-radius:8px;
    padding:8px 12px;
    height:115px;
    background-color:${grayColorF1};
    ${TextInputBox}{
        border:none;
        background-color:#fff;
        margin-top:10px;
    }
`;

export const Desc = styled.p`
    color:#474747;
    display:flex;
    align-center;
    justify-content:space-between;
`;

export const Name = styled.p`
    text-align:center;
    line-height:75px;
    font-size:20px;
    color:#000;

`;

export const Btns = styled.div`
    display:flex;
    align-center;
    gap:8px;
    margin-top:10px;
    button{
        padding:5px 8px;
        background-color:#fff;
        color:#000;
        border:1px solid ${mainColor};
    }
`;
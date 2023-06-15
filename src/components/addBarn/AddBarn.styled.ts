import styled from "styled-components";
import { TextInputBox } from "../inputs/Input.styled";
import { SquareBtn } from "../buttons/squareBtn/SquareBtn.styled";

import { modalColor } from "../../assets/styles/color";



export const AddBarn = styled.div`
    width:240px;
    padding:20px;
    border-radius:10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    position:fixed;
    top:200px;
    left:50%;
    transform: translateX(-50%);
    z-index:100;
    ${TextInputBox}{
        
    }
    ${SquareBtn}{
        margin-top:12px;
        height:34px;
        background-color:${modalColor}
    }
`;

export const Toparea = styled.p`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const Title = styled.span`
    font-size:16px;
`;

export const Close = styled.i`
    width:24px;
    height:24px;
`
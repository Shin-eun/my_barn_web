import styled from "styled-components";

import { SquareBtn } from "../buttons/squareBtn/SquareBtn.styled";

export const AddCard = styled.div`
    width:280px;
    padding:20px;
    position:fixed;
    top:100px;
    left:50%;
    transform: translateX(-50%);
    background-color:#fff;
    z-index:100;
    border-radius:8px;
    ${SquareBtn}{
        position:unset;
        margin:32px auto 0;
    }
`;

export const Toparea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:24px;
`;

export const Title = styled.div`

`;

export const Close = styled.div`

`;


import styled from "styled-components";
import { SquareBtn } from "../../components/buttons/squareBtn/SquareBtn.styled";

export const CardInfo = styled.div`
    padding:60px 14px 80px;
`;

export const Btns = styled.div`
    display:flex;
    align-itmes:center;
    justify-content:space-around;
    gap:20px;
    margin-top:32px;
    ${SquareBtn}{
        height:32px;
    }
`;  
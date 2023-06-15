import styled from "styled-components";

import { SquareBtn } from "../buttons/squareBtn/SquareBtn.styled";
import { InfoSelect } from "../infoSelect/InfoSelect.Styles";

export const DeleteCard = styled.div`
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

export const Container = styled.div`
    ${InfoSelect}{
        margin:8px 0;
    }
`;

export const CaseArea = styled.div`
    display:flex;
    align-items:cneter;
    // justify-content:space-around;
    gap:12px;
    margin-top:12px;
    margin-bottom:12px;
`;

export const InputArea = styled.div`
    display:flex;
    align-items:cneter;
    gap:8px;
    margin-bottom:12px;
`
export const InputLabel = styled.p`
    min-width:50px;
    display:flex;
    align-items:center;
`;

export const Btns = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    gap:20px;
    ${SquareBtn}{
        height:32px;
    }
`;  
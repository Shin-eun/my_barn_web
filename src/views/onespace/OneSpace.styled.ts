import styled from "styled-components";
import { subColor, grayColorF1 } from "../../assets/styles/color";
import { SquareBtn } from "../../components/buttons/squareBtn/SquareBtn.styled";


export const OneSpace = styled.div`
    padding:70px 14px;
    position:relative;
    min-height:calc(100vh - 120px);
    ${SquareBtn}{
        position:absolute;
        right:15px;
        top:70px;
        width:90px;
        height:30px;
    }
`;

export const NumberArea = styled.section`
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;

export const Count = styled.p`
    margin:8px 0;
`;

export const IndexBtns = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap:8px;
    margin:30px 0 24px;
`;

export const IndexBtn = styled.p`
    background-color:${grayColorF1};
    border-radius:10px;
    padding:4px 8px;
`;

export const ListArea = styled.div`

`;


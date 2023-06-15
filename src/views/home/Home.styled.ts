import styled from "styled-components";
import { SquareBtn } from "../../components/buttons/squareBtn/SquareBtn.styled";

export const Home = styled.div`
    padding:70px 14px;
    position:relative;
    //background-color:#F7F7F7;
    min-height:calc(100vh - 120px);
    & > ${SquareBtn}{
        position:absolute;
        right:15px;
        top:70px;
        width:90px;
        height:30px;
    }
`;

export const Section = styled.section`
    
`;

export const Count = styled.p`
    margin:8px 0;
`;

export const ListArea = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:8px;
`;
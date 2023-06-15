import styled from "styled-components";
import { mainColor } from "../../assets/styles/color";

export const Calendar = styled.div`
    padding:70px 15px;
    .toastui-calendar-template-time{
        strong{
            display:none;
        }
    }
    .toastui-calendar-grid-cell-more-events{
        position: absolute;
        bottom: 0;
        right:0;
    }
`;

export const CalendarHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    margin-bottom:10px;
`;

export const Btn = styled.p`
    padding:4px 8px;
    display:flex;
    align-items:center;
    background-color:${mainColor};
    border-radius:14px;
    svg{
        fill:#fff;
    }
`;
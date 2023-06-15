import styled from "styled-components";

interface PaginationProps {
    btnAction : boolean;
}

export const Pagination = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
`;

export const PageBtn = styled.p<PaginationProps>`
    width: 20px;
    height: 30px;
    // border-radius: 20px;
    // border: solid 1px rgba(0, 0, 0, 0.4);
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
        fill:rgba(0, 0, 0, 0.4);
    }
    ${(props)=>(
        props.btnAction ? `opacity:1;`
        :`opacity: 0.2;`
    )}
`;

export const Page = styled.p`
    width: 144px;
    height: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const ViewPage = styled.span`
    color:#333;
    margin-right:4px;
`;

export const TotalPage = styled.span`
    color:#333;
`;
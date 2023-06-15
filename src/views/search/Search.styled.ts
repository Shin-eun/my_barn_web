import styled from "styled-components";
import { mainColor } from "../../assets/styles/color";
import { Title } from "../../assets/styles/commeStyle";

export const Search = styled.div`
    padding:60px 14px;
`;

export const Searcharea = styled.div`

`;

export const Talble = styled.div`
    margin-bottom:20px;
`;

export const Theader = styled.ul`
    background-color: ${mainColor};
    border:1px solid ${mainColor};
    display:flex;
    align-items:center;
`;

export const TheaderLi = styled.li`
    border-left:1px solid #fff;
    flex:1;
    text-align:center;
    color:#fff;
    &:first-child{
        border-left:none;
        min-width:100px;
    }
`;

export const Tbody = styled.ul`
    border:1px solid ${mainColor};
    border-left:none;
    display:flex;
    align-items:center;
    ${TheaderLi}{
        border-left:1px solid ${mainColor};
        color:#000;
    }
`;
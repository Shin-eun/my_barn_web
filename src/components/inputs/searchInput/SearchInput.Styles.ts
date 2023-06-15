import styled from "styled-components";

interface SearchInputProps {
    
}

export const SearchInput = styled.div`
    height: 42px;
    padding:0 20px;
    border-radius: 22px;
    border: solid 1px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.05);
    display:flex;
    align-items:center;
    justity-content:space-between;
`;

export const Input = styled.input`
    border:none;
    outline:none;
    background-color:rgba(0,0,0,0);
    &:placeholder{
        color: rgba(0, 0, 0, 0.2);
    }
`;
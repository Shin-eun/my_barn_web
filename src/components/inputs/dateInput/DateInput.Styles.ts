import styled from "styled-components";



interface DateInputProps {

}

export const DateInput = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    position:relative;
`;

export const Label = styled.p`
   min-width:50px;
`;

export const InputBox = styled.p`
    padding:0 16px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
    height: 44px;
    display:flex;
    align-items:center;
    gap:8px;
    width:100%;
    svg{
        width:20px;
        height:20px;
        position:absolute;
        right:16px;
    }
`;

export const Span = styled.span`
    display:block;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex:1;
`;

export const Input = styled.input`
    width:20px;
    height:20px;
    position:absolute;
    right:16px;
    opacity:0;
`;
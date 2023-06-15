import styled from "styled-components";


interface InfoSelectProps {
    action: boolean
}

export const InfoSelect = styled.div`
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
    width:208px;
    cursor:pointer;
`;

export const Span = styled.span`
    display:block;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex:1;
`;

export const Placeholder = styled(Span)`
    color :rgba(0, 0, 0, 0.2);
`;

export const SelectUl = styled.ul`
    width:238px;
    border:1px solid rgba(0, 0, 0, 0.2);
    position:absolute;
    top:40px;
    left:168px;
    z-index:10;
    max-height:300px;
    overflow-y:auto;
`;

export const SelectLi = styled.li<InfoSelectProps>`
    height: 40px;
    padding:0 16px;
    display:flex;
    align-items : center;
    justify-content : space-between;
    background-color: #fff;
    border-top:1px solid rgba(0, 0, 0, 0.2);
    svg{
        fill:#000;
    }
    &:first-child{
        border-top:none;
    }
    &:hover{
        background-color: rgba(0,0,0,0.4);
    }
`;
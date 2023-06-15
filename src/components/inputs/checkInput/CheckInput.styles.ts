import styled from "styled-components"; 

interface CheckInputProps {
    
}

export const CheckInput = styled.label`
    display:flex;
    align-items: center;
    input[type="checkbox"] {
        opacity: 0;
        width: 1px;
        height: 1px;
        cursor: pointer;
      }
    
      input[type="checkbox"] + span {
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid rgba(0, 0, 0, 0.2);
        width: 18px;
        height: 18px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:3px;
        cursor: pointer;
      }
    
      input[type="checkbox"] + span svg {
        display: none;
      }
    
      input[type="checkbox"]:checked + span {
       // background-color: ;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
    
      input[type="checkbox"]:checked + span svg {
        display: block;
        width: 100%;
       // fill:;
      }
    
      input[type="checkbox"]::after {
        display: none;
      }
      
      .text{
        margin-left:8px;
      }
`;


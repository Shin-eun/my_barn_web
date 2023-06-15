import styled from "styled-components";
import { mainColor } from "../../../assets/styles/color";

interface OptionInfoProps {

}

export const RadioInput = styled.p`
    position: relative;
    display:flex;
    align-items: center;
`;

export const Input = styled.input`
    width:20px;
    height:20px;
    opacity: 0;
    z-index: 2;
    position:absolute;
    cursor: pointer;
    & + label{
      display:block;
      width:16px;
      height:16px;
      border-radius: 50%;
      background: rgba(0,0,0,0);
      border: 2px solid rgba(0, 0, 0, 0.2);
      position:absolute;
      top:3px;
      left:0;
    }
    &:checked + label:after{
      display:block;
      width:10px;
      height:10px;
      content:'';
      border-radius: 50%;
      background-color:${mainColor};
      position:absolute;
      top:3px;
      left:3px;
    }
`;

export const Text = styled.span`
  margin-left:28px;
`;
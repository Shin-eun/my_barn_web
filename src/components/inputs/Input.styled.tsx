import styled from "styled-components";
import { mainColor } from "../../assets/styles/color";

interface styleProps {
  focus : boolean,
  error : boolean
}

export const TextInputBox = styled.p`
  width: calc(100% - 16px);
  padding: 4px 8px;
  border:1px solid ${mainColor};
  border-radius:4px;
`;

export const TextInput = styled.input`
  background-color: #fff;
  border: none;
  outline: none;
  font-size:12px;
  width:100%;
  display:block;
  height:32px;
  &::placeholder{
    font-size:12px;
  }
`;

//check
export const CheckInputBox = styled.label`
  display: flex;
  align-items: center;
   svg{
    margin-left:-21px;
  }
`;

export const CheckInput = styled.input`
  opacity: 0;
  width: 1px;
  height: 1px;
  cursor: pointer;
 
  & + span {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--dark-grey-40);
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: -2px;
    margin-right:3px;
    border-radius: 50%;
    cursor: pointer;
  }

  // & + span svg {
  //   display: none;
  // }

  // &:checked + span {
  //   background-color: rgba(0, 0, 0, 0);
  //   border: 1px solid var(--dark-grey-40);
  // }

  // &:checked + span svg {
  //   display: block;
  //   width: 20px;
  //   height: 20px;
  //   margin-top: 3px;
  // }

  // &::after {
  //   display: none;
  // }S.CheckText
`;

export const CheckText = styled.span`
    margin-left: 8px;
    color: var(--dark-grey-40);
    font-weight:700;
    &.on {
    // color: var(--dark-main-blue-50);
    }
`
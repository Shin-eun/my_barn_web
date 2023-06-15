import styled from "styled-components";
import { mainColor } from "../../assets/styles/color";
import { Count } from "../../assets/styles/commeStyle";

export const SpaceSlide = styled.div`
    width:100%;
    .react-slideshow-container .nav{
        display:none;
    }
`;

export const SlideBox = styled.div`
    margin-top:12px;
    ${Count}{
      background-color:${mainColor};   
      width:100px;
      border-radius:8px 8px 0px 0px;
      text-align:center;
      padding:4px 0;
      color:#fff;
    }
`;


export const Space = styled.section`
    border:1px solid ${mainColor};
    border-radius:0 8px 8px;
    background-color:${mainColor};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:10px;
    padding:10px;
`;
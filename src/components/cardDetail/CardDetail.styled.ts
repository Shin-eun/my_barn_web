import styled from "styled-components";
import { SectionTitle } from "../../assets/styles/commeStyle";
import { CheckInput } from "../inputs/checkInput/CheckInput.styles";
import { RadioInput } from "../inputs/radioInput/RadioInput.Styles";
import { mainColor } from "../../assets/styles/color";
import { Label, DateInput } from "../inputs/dateInput/DateInput.Styles";

export const Container = styled.div`
    padding:20px 10px 0;
    ${SectionTitle}{
        min-width:50px;
    };
    ${DateInput}{
        margin-bottom:10px;
    };
     ${Label}{
        min-width:70px;
    };
`;

export const FlexSection = styled.section`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    gap:4px;
    ${RadioInput}{
        margin-right:15px;
    }
`;

export const Section = styled.section`
    margin-top:20px;
    ${CheckInput}{
        min-width:97px;
        margin:4px 0;
    }
   
`;

export const Textarea = styled.textarea`
    width:100%;
    border:1px solid ${mainColor};
    margin-top:8px;
    min-height:100px;
`;
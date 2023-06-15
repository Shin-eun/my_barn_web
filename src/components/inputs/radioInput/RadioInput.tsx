import React from "react";

//scss
import * as S from "./RadioInput.Styles";


type Props = {
    name : string,
    text : string,
    checked :boolean,
    onChange : ()=>void,
    value : string | number,
}
const RadioInput = ({
    name="",
    text="선택하세요",
    checked = false,
    onChange,
    value
} : Props ) => {
    
    return (
        <S.RadioInput>
            <S.Input type="radio"
                name={name}
                onChange={onChange}
                checked={checked}
            />
            <label></label>
            <S.Text className={`labelText`}>{text}</S.Text>
      </S.RadioInput>
    )
}

export default RadioInput;
import React from "react";

//style
import * as S from "./Input.styled";

type Props = {
    value : string,
    placeholder: string,
    type: string,
    onChange : (e :any)=>void
}
const TextInput = ({
    value="",
    placeholder="placeholder",
    type="text",
    onChange
} : Props) => {
    return (
        <S.TextInputBox>
            <S.TextInput 
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
            />
        </S.TextInputBox>
    )
}

export default TextInput;
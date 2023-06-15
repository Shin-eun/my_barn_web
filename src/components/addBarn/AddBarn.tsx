import { useState } from "react";

//styles
import * as S from "./AddBarn.styled";
import * as C from "../../assets/styles/commeStyle";

//icon
import { ReactComponent as CloseLineIcon } from "../../assets/icons/close-line.svg";

//component
import TextInput from "../inputs/TextInput";
import SquareBtn from "../buttons/squareBtn/SquareBtn";

type PropsType ={
    onClickClose : ()=>void
}

const AddBarn = ({ onClickClose } : PropsType) => {
    const [name, setName] = useState("");

    const onClickAdd = () => {
        onClickClose();
    }

    return (
        <>
        <C.Dim onClick={onClickClose}></C.Dim>
            <S.AddBarn>
                <S.Toparea>
                    <S.Title>축사 추가</S.Title>
                    <S.Close onClick={onClickClose}>
                        <CloseLineIcon />
                    </S.Close>
                </S.Toparea>
                <TextInput
                    value={name}
                    placeholder="축사 이름 입력"
                    type="text"
                    onChange={(e: any) => { setName(e.target.value) }}
                />
                <SquareBtn
                    text={"추가"}
                    onClick={onClickAdd}
                />
            </S.AddBarn>
        </>
     
    )
}

export default AddBarn;
import {useState} from "react";

//style
import * as S from "./CardInfo.styled";
import * as C from "../../assets/styles/commeStyle";


//component
import CardDetail from "../../components/cardDetail/CardDetail";
import SquareBtn from "../../components/buttons/squareBtn/SquareBtn";
import DeleteCard from "../../components/deleteCard/DeleteCard";

const CardInfo = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <S.CardInfo>
            {/* <C.Title>정보</C.Title> */}
            <CardDetail/>
            <S.Btns>
                <SquareBtn
                  text={"삭제"}
                  onClick={()=>{setDeleteOpen(!deleteOpen)}}
                />
                  <SquareBtn
                  text={"수정"}
                  onClick={()=>{}}
                />
            </S.Btns>
            {deleteOpen && <DeleteCard onClickClose={()=>{setDeleteOpen(false)}}/>}
        </S.CardInfo>
    )
}

export default CardInfo;
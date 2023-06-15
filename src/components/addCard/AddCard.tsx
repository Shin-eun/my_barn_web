import * as S from "./AddCard.styled";
import * as C from "../../assets/styles/commeStyle";

//icon
import { ReactComponent as CloseLineIcon } from "../../assets/icons/close-line.svg";

//component
import SquareBtn from "../buttons/squareBtn/SquareBtn";
import CardDetail from "../cardDetail/CardDetail";

type PropsType = {
  onClickClose: () => void
}

const AddCard = ({ onClickClose }: PropsType) => {
  return (
    <>
      <C.Dim onClick={onClickClose}></C.Dim>
      <S.AddCard>
        <S.Toparea>
          <S.Title>추가</S.Title>
          <S.Close onClick={onClickClose}>
            <CloseLineIcon />
          </S.Close>
        </S.Toparea>
        <CardDetail/>
        <SquareBtn
          text={"소 추가"}
          onClick={() => {}}
        />
      </S.AddCard>
    </>
  );
};

export default AddCard;

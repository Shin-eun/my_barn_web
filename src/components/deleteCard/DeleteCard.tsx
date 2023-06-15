import { useState } from "react";

//style
import * as S from "./DeleteCard.styled";
import * as C from "../../assets/styles/commeStyle";
import { Textarea } from "../cardDetail/CardDetail.styled";

//icon
import { ReactComponent as CloseLineIcon } from "../../assets/icons/close-line.svg";

//data
import { deleteCase, levelList } from "../../datas/lists";

//component
import SquareBtn from "../buttons/squareBtn/SquareBtn";
import RadioInput from "../inputs/radioInput/RadioInput";
import DateInput from "../inputs/dateInput/DateInput";
import InfoSelect from "../infoSelect/InfoSelect";
import TextInput from "../inputs/TextInput";

type PropsType = {
  onClickClose: () => void;
};

const DeleteCard = ({ onClickClose }: PropsType) => {
  const [deletecase, setDeleteCase] = useState("1");

  return (
    <>
      <C.Dim onClick={onClickClose}></C.Dim>
      <S.DeleteCard>
        <S.Toparea>
          <S.Title>1235345345</S.Title>
          <S.Close onClick={onClickClose}>
            <CloseLineIcon />
          </S.Close>
        </S.Toparea>
        <S.Container>
          <S.Title>삭제 이유</S.Title>
          <S.CaseArea>
            {deleteCase.map((data) => (
              <RadioInput
                name={`delete`}
                text={data.label}
                checked={data.key === deletecase}
                onChange={() => {
                  setDeleteCase(data.key);
                }}
                value={""}
              />
            ))}
          </S.CaseArea>
          <DateInput label="날짜" value={""} onChange={() => {}} />
          {deletecase === "1" && (
            <>
              <InfoSelect
                label={`등급`}
                select={levelList[0]}
                datas={levelList}
                type={"level"}
                onClickSelect={() => {}}
              />
              <S.InputArea>
                <S.InputLabel>무게</S.InputLabel>
                <TextInput
                  value={""}
                  placeholder={""}
                  type={"text"}
                  onChange={() => {}}
                />
              </S.InputArea>
              <S.InputArea>
                <S.InputLabel>판매가</S.InputLabel>
                <TextInput
                  value={""}
                  placeholder={""}
                  type={"text"}
                  onChange={() => {}}
                />
              </S.InputArea>
            </>
          )}
          <Textarea />
        </S.Container>
        <S.Btns>
          <SquareBtn text={"취소"} onClick={onClickClose} />
          <SquareBtn text={"삭제"} onClick={() => {}} />
        </S.Btns>
      </S.DeleteCard>
    </>
  );
};

export default DeleteCard;

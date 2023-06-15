import { useState, useEffect } from "react";

//style
import * as S from "./BarnCard.styled";

import { Link } from "react-router-dom";

//icon
import { ReactComponent as IconClose } from "../../assets/icons/close-line.svg";

//component
import SquareBtn from "../buttons/squareBtn/SquareBtn";
import TextInput from "../inputs/TextInput";

const BarnCard = () => {
  const [modify, setModify] = useState(false);
  const [name, setName] = useState("이름")
  let interval: any = null;
  const onClickClose = () => {
    setModify(false);
  };

  const onTouchStart = () => {
    let count = 0;
    interval = setInterval(() => {
        count++;
     
      if (count === 3) {
        setModify(true);
        clearInterval(interval);
      }
    }, 100);
  };


  return (
    <S.BarnCard>
      {modify ? (
        <a>
          <S.Desc>
            100 <IconClose onClick={onClickClose} />
          </S.Desc>
          <TextInput
            value={name}
            placeholder={"축사 이름"}
            onChange={(e :any) => {setName(e.target.value)}}
            type="name"
          />
          <S.Btns>
            <SquareBtn text={"수정"} onClick={() => {}} action={false} />
            <SquareBtn text={"삭제"} onClick={() => {}} action={true} />
          </S.Btns>
        </a>
      ) : (
        <Link 
            to={`/onespace/${`safdf`}`}
            onTouchStart={onTouchStart}
        >
          <S.Desc>100</S.Desc>
          <S.Name>이름</S.Name>
        </Link>
      )}
    </S.BarnCard>
  );
};

export default BarnCard;

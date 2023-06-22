import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { restfetcher, QueryKeys } from "../../queryClient";
import { barnType } from "../types/barn";
//styles
import * as S from "./AddBarn.styled";
import * as C from "../../assets/styles/commeStyle";

//icon
import { ReactComponent as CloseLineIcon } from "../../assets/icons/close-line.svg";

//component
import TextInput from "../inputs/TextInput";
import SquareBtn from "../buttons/squareBtn/SquareBtn";

interface AddBarnPropsType {
  onClickClose: () => void;
  userId: string;
  hanldeAdd: (barns
    : barnType[] | null) => void;
}

const AddBarn = ({ onClickClose, userId, hanldeAdd }: AddBarnPropsType) => {
  const [name, setName] = useState("");

  const addBarnApi = useQuery(
    QueryKeys.ADDABRN,
    async () =>
      await restfetcher({
        method: "POST",
        path: "barn",
        params: {
          userId: userId,
          barnName: name,
        },
      })
  );

  useEffect(() => {
    if (addBarnApi.status === "success") {
        const { success, barns} = addBarnApi?.data;
         hanldeAdd(barns);
        addBarnApi.remove();
        onClickClose();
    }
  }, [addBarnApi.status, addBarnApi.data]);

  const onClickAdd = () => {
    addBarnApi.refetch();
 
  };

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
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <SquareBtn text={"추가"} onClick={onClickAdd} />
      </S.AddBarn>
    </>
  );
};

export default AddBarn;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { restfetcher, QueryKeys } from "../../queryClient";
import { barnType } from "../types/barn";

//style
import * as S from "./BarnCard.styled";

//icon
import { ReactComponent as IconClose } from "../../assets/icons/close-line.svg";

//component
import SquareBtn from "../buttons/squareBtn/SquareBtn";
import TextInput from "../inputs/TextInput";

interface barnPropsType {
  data : barnType,
  handleDelete : (barns :barnType[] | null)=>void
}

const BarnCard = ({data, handleDelete} : barnPropsType) => {
  const [barn, setBarns] = useState(data);
  const [modify, setModify] = useState(false);
  const [name, setName] = useState("")
  let interval: any = null;

  const barnNameChaneApi = useQuery(QueryKeys.BARNNAMECHANGE, ()=>(
    restfetcher({
      method : "PATCH",
      path : `barn/${data._id}`,
      params : {
        barnName : name
      }
    })
  ));

  const barnDeleteApi = useQuery(QueryKeys.BARNDELETE, ()=>(
    restfetcher({
      method : "DELETE",
      path : `barn/${data._id}`
    })
  ));

  useEffect(()=>{
    const {status, data} =barnNameChaneApi;
    if(status === "success" && data.success){
      const {barnName, _id} = data.barn;
      if(barn._id === _id) setBarns({...barn, barnName : barnName });
      setModify(false);
      barnNameChaneApi.remove();
    }
  },[barnNameChaneApi.status, barnNameChaneApi.data])

  useEffect(()=>{
    const {status, data} = barnDeleteApi;
    if(status === "success" && data.success){
      const {barns} = data;
      handleDelete(barns)
      setModify(false);
    }
  },[barnDeleteApi.status, barnDeleteApi.data])

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
          <IconClose onClick={onClickClose} />
          </S.Desc>
          <TextInput
            value={name}
            placeholder={"축사 이름"}
            onChange={(e :any) => {setName(e.target.value)}}
            type="name"
          />
          <S.Btns>
            <SquareBtn text={"수정"} onClick={() => {barnNameChaneApi.refetch()}} action={false} />
            <SquareBtn text={"삭제"} onClick={() => {barnDeleteApi.refetch()}} action={true} />
          </S.Btns>
        </a>
      ) : (
        <Link 
            to={`/onespace/${data._id}`}
            onTouchStart={onTouchStart}
        >
          <S.Desc>{barn.totalNumber}</S.Desc>
          <S.Name>{barn.barnName}</S.Name>
        </Link>
      )}
    </S.BarnCard>
  );
};

export default BarnCard;

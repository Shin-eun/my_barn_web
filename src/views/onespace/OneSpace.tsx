import { useState, useLayoutEffect, useEffect } from "react";
import { useQuery } from "react-query";
import { QueryKeys, restfetcher } from "../../queryClient";
import { Link } from "react-router-dom";

//style
import * as S from "./OneSpace.styled";
import * as C from "../../assets/styles/commeStyle";

//component
import SquareBtn from "../../components/buttons/squareBtn/SquareBtn";
import SpaceSlide from "../../components/spaceSlide/SpaceSlide";
import AddCard from "../../components/addCard/AddCard";
import Card from "../../components/card/Card";
import Talble from "../../components/table/Table";

const OneSpace = () => {
    const [addCard, setAddCard] = useState(false);

    // useLayoutEffect(() => {
    //     getSpaceListApi.refetch();
    //   }, []);

    // const getSpaceListApi = useQuery(
    //     QueryKeys.SPACELIST,
    //     async () =>
    //       await restfetcher({
    //         method: "POST",
    //         path: "barn/space",
    //         params :{
    //             userId :,
    //             barnId :
    //         }
    //       })
    //   );

    return (
        <S.OneSpace>
            <C.Title>*** 축사 <b>000마리</b></C.Title>
            <SquareBtn
                text={"+ 소 추가"}
                onClick={() => { setAddCard(!addCard) }}
            />
            {/* <SpaceSlide/> */}
            <S.IndexBtns>
                {
                    new Array(10).fill("").map((index)=>(
                        <S.IndexBtn>00칸</S.IndexBtn>
                    ))
                }
            </S.IndexBtns>
            <S.ListArea>
                <Talble/>
            </S.ListArea>
            {addCard && <AddCard onClickClose={() => setAddCard(false)} />}
        </S.OneSpace>
    )
}

export default OneSpace;
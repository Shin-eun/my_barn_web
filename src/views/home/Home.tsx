import { useState, useLayoutEffect, useEffect } from "react";
import { useQuery } from "react-query";
import { QueryKeys, restfetcher } from "../../queryClient";
import { barnType } from "../../components/types/barn";

//style
import * as S from "./Home.styled";
import * as C from "../../assets/styles/commeStyle";
import * as B from "../../components/barnCard/BarnCard.styled";

//component
import SquareBtn from "../../components/buttons/squareBtn/SquareBtn";
import BarnCard from "../../components/barnCard/BarnCard";
import AddBarn from "../../components/addBarn/AddBarn";

const Home = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [barns, setBarns] = useState<barnType[] | null>(null);

  useLayoutEffect(() => {
    getUserInfoApi.refetch();
  }, []);

  const getUserInfoApi = useQuery(
    QueryKeys.USERINFO,
    async () =>
      await restfetcher({
        method: "GET",
        path: "barn/646d70be9d17ad0854ff5e8b",
      })
  );

  useEffect(() => {
    if (getUserInfoApi.status === "success") {
      const { success, barns } = getUserInfoApi.data;
      if (success) {
        setBarns(barns);
      }
    }
  }, [getUserInfoApi.status, getUserInfoApi.data]);


  const updateBarns = (barns :barnType[] | null ) => {
    setBarns(barns)
  }


  return (
    <>
      <S.Home>
        {/* <C.Title>축사 리스트</C.Title> */}
        <SquareBtn
          text={"+ 축사 추가"}
          onClick={() => {
            setAddOpen(!addOpen);
          }}
        />
        <S.Section>
          <C.Count>총 : 000</C.Count>
          <S.ListArea>
            {barns
              ? barns.map((barn, index) => (
                <BarnCard data={barn} handleDelete={updateBarns} key={barn._id}/>
                ))
              : new Array(10).fill("").map(() => <B.BarnCard />)}
          </S.ListArea>
        </S.Section>
      </S.Home>
      {addOpen && (
        <AddBarn
          onClickClose={() => setAddOpen(false)}
          userId={"646d70be9d17ad0854ff5e8b"}
          hanldeAdd={updateBarns}
        />
      )}
    </>
  );
};

export default Home;

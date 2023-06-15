import { useState } from "react";

//style
import * as S from "./Home.styled";
import * as C from "../../assets/styles/commeStyle";

//component
import SquareBtn from "../../components/buttons/squareBtn/SquareBtn";
import BarnCard from "../../components/barnCard/BarnCard";
import AddBarn from "../../components/addBarn/AddBarn";

const Home = () => {
    const [addOpen, setAddOpen] = useState(false);


    return (
        <>
            <S.Home>
                {/* <C.Title>축사 리스트</C.Title> */}
                <SquareBtn
                    text={"+ 축사 추가"}
                    onClick={() => { setAddOpen(!addOpen)}}
                />
                <S.Section>
                    <C.Count>총 : 000</C.Count>
                    <S.ListArea>
                        {
                            new Array(10).fill("").map(() => (
                                <BarnCard />
                            ))
                        }
                    </S.ListArea>
                </S.Section>
            </S.Home>
            {addOpen && <AddBarn onClickClose={() => setAddOpen(false)}/>}
        </>
        
    )
}

export default Home;
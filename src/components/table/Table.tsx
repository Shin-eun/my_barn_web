import * as S from "./Talble.styled";

//data
import { searchTheader } from "../../datas/lists";
import { Link } from "react-router-dom";

const Talble = () =>{
    return (
        <S.Talble>
            <S.Theader>
                {searchTheader.map((data) => (
                    <S.TheaderLi key={data.key}>{data.label}</S.TheaderLi>
                ))}
            </S.Theader>
            <Link to={`/cardinfo/${`asddffdsf`}`}>
                <S.Tbody>
                    {searchTheader.map((data) => (
                        <S.TheaderLi key={data.key}>{data.label}</S.TheaderLi>
                    ))}
                </S.Tbody>
            </Link>
        </S.Talble>
    )
}

export default Talble;
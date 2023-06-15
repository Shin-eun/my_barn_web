import { Link } from "react-router-dom";

//style
import * as S from "./Header.styled";

//icon
import { ReactComponent as IconLayout } from "../../assets/icons/layout-masonry-fill.svg";

const Header = () => {
    return (
        <S.Header>
            <S.Logo>서당골 <IconLayout/></S.Logo>
            {/* <S.SearchIcon>
                <Link to={`/search`}>
                <IconSearchLined/>
                </Link>
            </S.SearchIcon> */}
        </S.Header>
    )
}

export default Header;
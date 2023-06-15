import React from 'react';
import { Link } from 'react-router-dom';
//style
import * as S from "./Navigation.styled";

//icons
import {ReactComponent as IconHome} from "../../assets/icons/ic_home_line.svg";
import { ReactComponent as IconSearchLined } from "../../assets/icons/search-line.svg";
import { ReactComponent as IconCalendar } from "../../assets/icons/icon_calendar.svg";

const Navigation = () => {
  return (
    <S.Navigation>
      <S.HomeBtn>
        <Link to={`/canlendar`}>
          <IconCalendar />
        </Link>
      </S.HomeBtn>
        <S.HomeBtn>
          <Link to={`/`}>
          <IconHome />
          </Link>
        </S.HomeBtn>
      <S.HomeBtn>
        <Link to={`/search`}>
          <IconSearchLined />
        </Link>
      </S.HomeBtn>
    </S.Navigation>
  );
}

export default Navigation;

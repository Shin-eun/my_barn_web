//icon
import {ReactComponent as ChevroCheckIcon } from '../../../assets/icons/ic_chevron_check.svg';

//style
import * as S from "./CheckInput.styles";

const CheckInput = ({
    checked=false,
    textClassName="body_medium",
    text=null || "",
    ...props
}) => {
  return (
    <S.CheckInput>
      <input
        type="checkbox"
        title="checkbox"
        alt="checkbox"
        checked={checked}
        onChange={props?.onChange}
      />
      <span>
        <ChevroCheckIcon
            width="12px"
            height="12px"
            fill="#65aaff"
        />
      </span>
      {
        text &&  <span className={checked ? `${textClassName} text on` :`${textClassName} text`}>{text}</span>
      }
    </S.CheckInput>
  );
};

export default CheckInput;

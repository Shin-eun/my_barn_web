import * as S from "./DateInput.Styles";

import { ReactComponent as IconCalendarLined} from "../../../assets/icons/ic_calendar_lined.svg";

type Props = {
    label ?: string
    value : string;
    onChange ?: any;
    readOnly ?:boolean;
};

const DateInput = ({label = "label", value, onChange, readOnly }: Props) => {
    return <S.DateInput>
        {label && <S.Label>{label}</S.Label>}
        <S.InputBox>
            <S.Span>{value}</S.Span>
            <IconCalendarLined/>
            <S.Input type="date" onChange={onChange} value={value} readOnly={readOnly}/>
        </S.InputBox>
    </S.DateInput>
}

export default DateInput;
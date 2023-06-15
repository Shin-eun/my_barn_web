import * as S from "./CardDetail.styled";
import * as C from "../../assets/styles/commeStyle";

//data
import { genders } from "../../datas/lists";

//component
import RadioInput from "../inputs/radioInput/RadioInput";
import TextInput from "../inputs/TextInput";
import DateInput from "../inputs/dateInput/DateInput";
import CheckInput from "../inputs/checkInput/CheckInput";

const CardDetail = () => {
  return (
    <S.Container>
      <S.FlexSection>
        <C.SectionTitle>번호</C.SectionTitle>
        <TextInput
          value={""}
          placeholder={"번호 입력"}
          type={"text"}
          onChange={() => { }}
        />
      </S.FlexSection>
      <S.FlexSection>
        <C.SectionTitle>성별</C.SectionTitle>
        {genders.map((gender: any) => (
          <RadioInput
            name={`gender`}
            text={gender.label}
            checked={gender.key === 1}
            onChange={() => { }}
            value={gender.key}
          />
        ))}
      </S.FlexSection>
      <DateInput
        label="날짜"
        value={""}
        onChange={() => { }}
      />
      <DateInput
        label="수정 날짜"
        value={""}
        onChange={() => { }}
      />
      <S.Section>
        <C.SectionTitle>접종</C.SectionTitle>
        <CheckInput
          checked={true}
          text={'브루셀라 (6개월)'}
          onChange={() => { }}
        />
        <DateInput
          label=""
          value={""}
          onChange={() => { }}
        />
      </S.Section>
      <S.Section>
        <CheckInput
          checked={true}
          text={'송아지 설사 (1개월)'}
          onChange={() => { }}
        />
        <DateInput
          label=""
          value={""}
          onChange={() => { }}
        />
      </S.Section>
      <S.Section>
        <CheckInput
          checked={true}
          text={'이브백 (1년)'}
          onChange={() => { }}
        />
        <DateInput
          label=""
          value={""}
          onChange={() => { }}
        />
      </S.Section>

      <S.Section>
        <C.SectionTitle>특이사항</C.SectionTitle>
        <S.Textarea></S.Textarea>
      </S.Section>
    </S.Container>
  )
}

export default CardDetail;
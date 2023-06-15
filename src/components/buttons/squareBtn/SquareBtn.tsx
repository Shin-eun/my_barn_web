import * as S from "./SquareBtn.styled";

type Props = {
  text: string;
  onClick: () => void;
  action?: boolean;
};

const SquareBtn = ({ text, onClick, action = true }: Props) => {
  return (
    <S.SquareBtn onClick={onClick} action={action}>
      {text}
    </S.SquareBtn>
  );
};

export default SquareBtn;

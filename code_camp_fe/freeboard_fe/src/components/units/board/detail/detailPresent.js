import * as S from "./detailStyle";

export default function boardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.WrapperDetail>
        <S.Header>
          <S.Avatar src="/img/Avatar.png" />
          <S.Info>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.WriteDate>{props.data?.fetchBoard?.createdAt}</S.WriteDate>
          </S.Info>
        </S.Header>
        <S.DivLine></S.DivLine>
        <S.Detail>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Detail>
      </S.WrapperDetail>
      <S.Buttons>
        <S.GoList onClick={props.onClickList}>목록으로</S.GoList>
        <S.GoMod onClick={props.onClickEdit}>수정하기</S.GoMod>
        <S.GoDelete onClick={props.onClickDelete}>삭제하기</S.GoDelete>
      </S.Buttons>
    </S.Wrapper>
  );
}

import {
  Wrapper,
  Title,
  Label,
  UserInput,
  InputWrapper,
  TextInput,
  Contents,
  ZipWrapper,
  ZipCode,
  SearchBtn,
  PhotoWrapper,
  Photo,
  RadioInput,
  OptionWrapper,
  OptionLabel,
  SubmitBtn,
  NullErrorM,
  NameError,
  PwdError,
  SubjectError,
  ContentsError,
  Form,
} from "./boardNewStyle";

export default function BoardNewUI(props) {
  return (
    <Form>
      <Wrapper>
        <Title>게시물 등록</Title>
        <UserInput>
          <InputWrapper>
            <Label>작성자</Label>
            <TextInput
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={props.name}
            />
            <NullErrorM>{NameError}</NullErrorM>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <TextInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.pwd}
            />
            <NullErrorM>{PwdError}</NullErrorM>
          </InputWrapper>
        </UserInput>
        <InputWrapper>
          <Label>제목</Label>
          <TextInput
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={props.title}
          />
          <NullErrorM>{SubjectError}</NullErrorM>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            type="text"
            placeholder="내용을 작성해주세요"
            onChange={props.cnt}
          />
          <NullErrorM>{ContentsError}</NullErrorM>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipWrapper>
            <ZipCode placeholder="00000"></ZipCode>
            <SearchBtn>우편번호 검색</SearchBtn>
          </ZipWrapper>
          <TextInput type="text" />
          <TextInput type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <TextInput type="text" placeholder="링크를 복사해주세요" />
        </InputWrapper>
        <InputWrapper>
          <Label>사진첨부</Label>
          <PhotoWrapper>
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>
          </PhotoWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>메인 설정</Label>
          <OptionWrapper>
            <RadioInput type="radio" name="settings" />
            <OptionLabel>유투브</OptionLabel>
            <RadioInput type="radio" name="settings" />
            <OptionLabel>사진</OptionLabel>
          </OptionWrapper>
        </InputWrapper>
        <SubmitBtn onClick={props.submit}>등록하기</SubmitBtn>
      </Wrapper>
    </Form>
  );
}

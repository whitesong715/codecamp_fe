import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
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
} from "../../../styles/boardNew";
import { Router, useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function boardNew() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");
  const [NameError, setNameError] = useState("");
  const [PwdError, setPwdError] = useState("");
  const [SubjectError, setSubjectError] = useState("");
  const [ContentsError, setContentsError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePwd(event) {
    setPwd(event.target.value);
  }

  function onChangeSubject(event) {
    setSubject(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  const onClickSubmit = async () => {
    console.log(name, pwd, subject, contents);
    if (!name) {
      setNameError("필수입력입니다.");
    }

    if (!pwd) {
      setPwdError("필수입력입니다.");
    }

    if (!subject) {
      setSubjectError("필수입력입니다.");
    }

    if (!contents) {
      setContentsError("필수입력입니다.");
    }

    if (name && pwd && subject && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pwd,
              title: subject,
              contents: contents,
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
        alert("게시글이 등록되었습니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <UserInput>
        <InputWrapper>
          <Label>작성자</Label>
          <TextInput
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={onChangeName}
          />
          <NullErrorM>{NameError}</NullErrorM>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <TextInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePwd}
          />
          <NullErrorM>{PwdError}</NullErrorM>
        </InputWrapper>
      </UserInput>
      <InputWrapper>
        <Label>제목</Label>
        <TextInput
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={onChangeSubject}
        />
        <NullErrorM>{SubjectError}</NullErrorM>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          type="text"
          placeholder="내용을 작성해주세요"
          onChange={onChangeContents}
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
      <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
    </Wrapper>
  );
}

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./newQueries";
import BoardNewUI from "./newPresent";

export default function BoardNewContainer() {
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
    <BoardNewUI
      name={onChangeName}
      pwd={onChangePwd}
      title={onChangeSubject}
      cnt={onChangeContents}
      submit={onClickSubmit}
    />
  );
}

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./newQueries";
import BoardNewUI from "./newPresent";

export default function BoardNewContainer(props) {
  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [WriterError, setWriterError] = useState("");
  const [PwdError, setPwdError] = useState("");
  const [TitleError, setTitleError] = useState("");
  const [ContentsError, setContentsError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value && pwd && contents && title) {
      setIsActive(true);
    }
  }

  function onChangePwd(event) {
    setPwd(event.target.value);
    if (event.target.value && writer && contents && title) {
      setIsActive(true);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value && writer && pwd && contents) {
      setIsActive(true);
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value && writer && pwd && title) {
      setIsActive(true);
    }
  }

  const onClickSubmit = async () => {
    console.log(writer, pwd, title, contents);
    if (!writer) {
      setWriterError("필수입력입니다.");
    }

    if (!pwd) {
      setPwdError("필수입력입니다.");
    }

    if (!title) {
      setTitleError("필수입력입니다.");
    }

    if (!contents) {
      setContentsError("필수입력입니다.");
    }

    if (writer && pwd && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: pwd,
              title: title,
              contents: contents,
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
        alert("등록 완료되었습니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    //early-exit 리팩토링 => 기존 코드와 결과는 같지만 내용이 보다 간결
    if (!title && !contents) {
      alert("수정내용이 없습니다");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }
    //

    const updateBoardInput = {};
    if (contents) {
      updateBoardInput.contents = contents;
    }
    if (title) {
      updateBoardInput.title = title;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: pwd,
          updateBoardInput,
        },
      });
      console.log("result", result);
      alert("수정 완료되었습니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardNewUI
      writer={onChangeWriter}
      pwd={onChangePwd}
      title={onChangeTitle}
      cnt={onChangeContents}
      submit={onClickSubmit}
      update={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}

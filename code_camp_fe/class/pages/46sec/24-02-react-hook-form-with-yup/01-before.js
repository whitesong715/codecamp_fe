import { useState } from "react";

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        //variables == $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  //한줄 일 시 () X
  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>Graphql - api 요청</button>;
    </div>
  );
}

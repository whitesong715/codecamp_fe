import axios from "axios";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); //promise
  }

  //   async function onClickSync() {
  //     const result = await axios.get("https://koreanjson.com/posts/1");
  //     console.log(result); //제대로 된 결과 => {title: "...", }
  //     console.log(result.data.title);
  //   };

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); //제대로 된 결과 => {title: "...", }
    console.log(result.data.title);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onClickSync}>REST-API(동기)</button>
    </div>
  );
}

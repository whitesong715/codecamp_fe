export default function listUI(props) {
  return (
    <div>
      <table>
        <th>ID</th>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
        {props.data?.fetchBoards.map((el) => (
          <tbody key={el._id}>
            <tr>
              <td>{String(el._id).slice(-4)}</td>
              <td id={el._id} onClick={props.onClickDetail}>
                {el.title}
              </td>
              <td>{el.writer}</td>
              <td>{el.createdAt.substr(0, 10)}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={props.onClickNew}>등록하기</button>
    </div>
  );
}

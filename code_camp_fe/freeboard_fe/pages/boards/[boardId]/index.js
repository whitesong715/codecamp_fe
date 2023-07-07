import {
  Wrapper,
  WrapperDetail,
  Header,
  Avatar,
  Info,
  DivLine,
  Writer,
  WriteDate,
  Detail,
  Title,
  Contents,
  Buttons,
  GoList,
  GoMod,
  GoDelete,
} from "../../../styles/boardDetail";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      createdAt
      title
      contents
    }
  }
`;

export default function boardDetail() {
  const router = useRouter();

  console.log("router1:", router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log("router2:", router.query.boardId);
  console.log("data:", data);

  return (
    <Wrapper>
      <WrapperDetail>
        <Header>
          <Avatar src="/img/Avatar.png" />
          <Info>
            <Writer>{data?.fetchBoard?.writer}</Writer>
            <WriteDate>{data?.fetchBoard?.createdAt}</WriteDate>
          </Info>
        </Header>
        <DivLine></DivLine>
        <Detail>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Detail>
      </WrapperDetail>
      <Buttons>
        <GoList>목록으로</GoList>
        <GoMod>수정하기</GoMod>
        <GoDelete>삭제하기</GoDelete>
      </Buttons>
    </Wrapper>
  );
}

// const qqq: String = "hihi";
// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board_postgres";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API DOCS 만들기
const typeDefs = `#graphql
   input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }
    type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
    }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(example방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두 꺼내기
      const result = await Board.find();
      console.log(result);

      // 2. 한개만 꺼내기
      //   const result = await Board.findOne({
      //     where: { number: 3 },
      //   });
      //   console.log(result);

      return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // 하나하나 입력 => 비효율적
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록 성공";
    },

    updateBoard: async () => {
      //3번 게시글을 영희로 변경
      await Board.update({ number: 3 }, { writer: "영희" });
    },

//     deleteBoard: async () => {
//       await Board.delete({ number: 3 }); // 3번 게시글 삭제
//       await Board.update({ number: 3 }, { isDeleted: true }); // 3번 게시글 삭제했다 치자
//       await Board.update({ number: 3 }, { deletedAt: new Date() }); // deletedAt === null -> 삭제X, 날짜 insert 시 삭제한거처럼 처리
//   },
}

//@ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
//   cors: true,

  // 선택한 사이트만 풀어주고 싶을때
  //   cors: {
  //     origin: ["https://www.naver.com", "https://www.youtube.com/"],
  //   },
})

const AppDataSource = new DataSource({
  type: "postgres",
  host: "데이터베이스 ip주소",
  port: "데이터베이스 포트",
  username: "ID",
  password: "pwd",
  database: "",
  entities: [Board],
  synchronize: true,
  logging: true,
})

AppDataSource.initialize()
  .then(() => {
    console.log("접속성공");

    startStandaloneServer(server).then(() => {
      console.log(`🚀 Server ready`);
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패");
    console.log("원인: ", error);
  })

// 디비없이 하드코딩 된 가짜 백엔드 서버
import {graphql} from "msw"

const gql = graphql.link("http://mock.com/graphql")

export const apis = [
    gql.mutation("createBoard", (req, res, ctx) => {
        const {writer, title, contents} = req.variables.createBoardInput

        return res(
            ctx.data({
                createBoard: {
                    _id: "qqq",
                    writer,
                    title,
                    contents,
                    __typename: "Board",
                }
            })
        )
    })

    // gql.query("fetchBoards", () => {})
]
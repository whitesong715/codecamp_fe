import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import StaticMovedPage from "../../pages/55sec/33-05-jest-unit-test-mocking"
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from 'cross-fetch'
import mockRouter from 'next-router-mock'

jest.mock("next/router", () => require("next-router-mock"))
//알림만 주는 정도

it("게시글 등록 테스트", async() => {

    const client = new ApolloClient({
        link: new HttpLink({
            uri: "http://mock.com/graphql",
            fetch,
        }),
        cache: new InMemoryCache(),
    })

    render(
        <ApolloProvider client={client}>
            <StaticMovedPage />
        </ApolloProvider>
    )

    fireEvent.change(screen.getByRole("input-writer"), {
        target: {value : "맹구"}
    })
    fireEvent.change(screen.getByRole("input-title"), {
        target: {value : "안녕하세요"}
    })
    fireEvent.change(screen.getByRole("input-contents"), {
        target: {value : "반값습니다"}
    })
    fireEvent.click(screen.getByRole("submit-button"))

    await waitFor(() => {
        expect(mockRouter.asPath).toEqual("/boards/qqq")
    }) 
})
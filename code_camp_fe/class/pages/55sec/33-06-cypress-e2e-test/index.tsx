import { useRouter } from "next/router"

export default function CypressE2ETest():JSX.Element {

    const router = useRouter()

    const onClickMove = () => {
        router.push("/55sec/33-06-cypress-e2e-test-moved")
    }

    return <button onClick={onClickMove}>철수랑 놀러가기</button>
}
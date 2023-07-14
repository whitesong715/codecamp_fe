import { UpCircleOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import type {MouseEvent} from "react"

const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
`

export default function LibraryIcon(): JSX.Element {
const onClickDelete = (event:MouseEvent<HTMLDivElement>):void => {
    console.log(event.currentTarget.id)
}

    return (
    <div id="삭제할 게시글 id" onClick={onClickDelete}>
        <MyIcon />
    </div>
)
}
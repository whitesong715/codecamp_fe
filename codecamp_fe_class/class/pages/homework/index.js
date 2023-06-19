import {MyInput, MyLogin, MyLabel} from '../../styles/loginPage.js'

export default function LoginPage(){
    return(
        <MyLogin>
            <h1>로그인</h1>
            <MyLabel>아이디</MyLabel>
            <MyInput type="text"/>
            
            <MyLabel>비밀번호</MyLabel>
            <MyInput type="password"/>
        </MyLogin>
    )
}
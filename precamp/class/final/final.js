const changeFocus = () => {
    let ph1 = document.getElementById("ph1").value
    if(ph1.length === 3) {
        document.getElementById("ph2").focus()
    }
}

const changeFocus2 = () => {
    let ph2 = document.getElementById("ph2").value
    if(ph2.length === 4) {
        document.getElementById("ph3").focus()
    }
}

const phone = () => {
    let ph1 = document.getElementById("ph1").value
    let ph2 = document.getElementById("ph2").value
    let ph3 = document.getElementById("ph3").value

    if(ph1 && ph2 && ph3) {
        document.getElementById("tokenButton").disabled = false;
    } else {
        document.getElementById("tokenButton").disabled = true;
    }
}

const auth = () => {

    let authNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")

    document.getElementById("token").innerText = authNum

    getTimer()
}

let timer;
const getTimer = () => {
    let time = 10

    timer = setInterval(() => {
        if(time >= 0){
            document.getElementById("checkButton").disabled = false

            let min = Math.floor(time / 60)
            let sec = String(time % 60).padStart(2,"0")
            document.getElementById("timer").innerText = min + ":" + sec
            time = time-1
        } else {
            document.getElementById("timer").innerText = "3:00"
            document.getElementById("token").innerText = "000000"
            document.getElementById("tokenButton").disabled = true;
            document.getElementById("checkButton").disabled = true
        }
    },1000)
}

const authCheck = () => {
    alert("인증완료")
    clearInterval(timer)
    document.getElementById("timer").innerText = "3:00"
    document.getElementById("token").innerText = "000000"
    document.getElementById("tokenButton").disabled = true;
    document.getElementById("checkButton").disabled = true
    document.getElementById("join").disabled = false
}

function signup(){
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password1 = document.getElementById("pw1").value
    const password2 = document.getElementById("pw2").value
    const location = document.getElementById("location").value
    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked

    let isValid = true

    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        document.getElementById("error__email").style = "color:red; font-size: 10px"
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
        document.getElementById("error__name").style = "color:red; font-size: 10px"
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if(password1 === ""){
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해 주세요."
        document.getElementById("error__pw1").style = "color:red; font-size: 10px"
        isValid = false
    } else {
        document.getElementById("error__pw1").innerText = ""
    }

    if(password2 === ""){
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해 주세요."
        document.getElementById("error__pw2").style = "color:red; font-size: 10px"
        isValid = false
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(password1 !== password2) {
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw1").style = "color:red; font-size: 10px"
        document.getElementById("error__pw2").style = "color:red; font-size: 10px"
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천"){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        document.getElementById("error__location").style = "color:red; font-size: 10px"

        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        document.getElementById("error__gender").style = "color:red; font-size: 10px"

        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }
}
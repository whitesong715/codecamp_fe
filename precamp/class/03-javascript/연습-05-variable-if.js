// 데이터타입 연산자 실습
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123" == 123
true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!false
// true
!true
// false

//if
if(1+1===2) {
    console.log("정답입니다")
} else {
    console.log("떙")
}
// VM610:2 정답입니다
if(!true) {
    console.log("정답입니다")
} else {
    console.log("떙")
}
// VM626:4 떙
if(0) {
    console.log("정답입니다")
} else {
    console.log("떙")
}
// VM633:4 떙
if(1) {
    console.log("정답입니다")
} else {
    console.log("떙")
}
// VM664:2 정답입니다
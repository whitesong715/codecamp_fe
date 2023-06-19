// 과일리스트 for문
const fruits = [
    {number:1, title:"레드향"},
    {number:2, title:"샤인머스캣"},
    {number:3, title:"산청딸기"},
    {number:4, title:"한라봉"},
    {number:5, title:"사과"},
    {number:6, title:"애플망고"},
    {number:7, title:"딸기"},
    {number:8, title:"천혜향"},
    {number:9, title:"과일선물세트"},
    {number:10, title:"귤"}
]
//방법1
for(let num=0;num<fruits.length;num++) {
    console.log(num+1 + " " + fruits[num].title);
}
//방법2
for(let num=0;num<fruits.length;num++) {
    console.log('${num+1} ${fruits[num].title}');
}
// 1 레드향
// VM1729:1 2 샤인머스캣
// VM1729:1 3 산청딸기
// VM1729:1 4 한라봉
// VM1729:1 5 사과
// VM1729:1 6 애플망고
// VM1729:1 7 딸기
// VM1729:1 8 천혜향
// VM1729:1 9 과일선물세트
// VM1729:1 10 귤
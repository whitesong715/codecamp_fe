export default function TypeScriptPage() {
  //타입추론(typeScript는 처음 들어간 값을 기반으로 타입 자동저장)
  let aaa = "안녕하세요";
  //   aaa = 3;

  //타입명시
  let bbb: string = "반갑습니다";
  //   bbb = 10;

  //타입명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자 타입
  let ddd: number = 10;
  //   ddd = "철수";

  //불린타입
  let eee: boolean = true;
  eee = false;

  //배열타입
  //   let fff: number[] = [1, 2, 3, 4, 5, "안녕"];
  //   let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; //타입을 추론해서 어떤 타입을 사용하는지 알아보기

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; //키?: 값 ==> 있어도 그만 없어도 그만
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "거북초",
  };
  profile.name = "훈이";
  profile.age = "8살";
  profile.hobby = "수영";

  //함수타입
  function add(
    num1: number,
    num2: number,
    unit: string /* 매개변수 타입 */
  ): String /* 리턴값 타입 */ {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원"); //결과의 리턴타입도 예측가능

  const add2 = (
    num1: number,
    num2: number,
    unit: string /* 매개변수 타입 */
  ): String /* 리턴값 타입 */ => {
    return num1 + num2 + unit;
  };
  const result2 = add(1000, 2000, "원"); //결과의 리턴타입도 예측가능

  //any타입(가급적 자제, js와 동일)
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;

  return <></>;
}

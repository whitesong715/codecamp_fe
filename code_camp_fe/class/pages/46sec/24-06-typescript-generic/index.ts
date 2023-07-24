// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//
//
// 1. any타입 => 그냥 자바스크립트랑 동일
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result1 = getAny("철수", 123, true);

//
//
// 1. unknown타입 => any타입과 다르게 수식 전 타입명시 필요
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result2 = getUnknown("철수", 123, true);

//
//
// 1. generic타입 => 처음 변수에 들어간 데이터의 타입으로 자동 할당
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result3 = getGeneric("철수", 123, true);
const result4 = getGeneric("철수", "123", true);
const result5 = getGeneric<string, string, number>("철수", 123, true); // 타입 지정 가능

//
//
// 1. generic타입2 => 타입명 마음대로 지정가능
function getGeneric2<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result6 = getGeneric("철수", 123, true);

//
//
// 1. generic타입3(화살표 함수)
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result7 = getGeneric("철수", 123, true);

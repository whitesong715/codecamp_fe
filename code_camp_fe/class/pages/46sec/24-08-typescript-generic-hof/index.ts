// 1. hof - 일반함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

// 1. hof - 화살표함수
// prettier-ignore
// eslint-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
      return [arg1, arg2];
    };

const result2 = first2("영희")(8);

// 1. hof - 화살표함수
// prettier-ignore
// eslint-ignore
const 로그인체크 = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};

const result3 = 로그인체크("영희")(8);

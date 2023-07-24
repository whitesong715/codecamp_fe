export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값;

  const setState = (변경값: S): void => {
    console.log(`${state}에서 ${변경값}으로 변경하겠습니다`); // 1. state 변경하기
    console.log(`변경된 값을 사용해서 컴포넌트 리렌더링하겠습니다`); //2.  해당 컴포넌트 리렌더링(render함수)
  };

  return [state, setState];
}

// 사용자
const [count, setCount] = useState(10);

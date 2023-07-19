import Child from "./01-child";

export default function Parents(): JSX.Element {
  return (
    <>
      {/* <Child count={100} /> */}
      {Child({ count: 30 })}
    </>
  );
}

import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildren(): JSX.Element {
  return (
    <div>
      <div>================</div>
      <Example school="props">
        {/* 쏙 들어가기 & 땡겨오기 */}
        <div>
          <input type="text"></input>
          <div>props.children</div>
          <button>클릭</button>
        </div>
      </Example>
      <div>================ </div>
    </div>
  );
}

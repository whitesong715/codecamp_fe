export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 => 전부 있어도 되고 없어도 되고
type aaa = Partial<IProfile>;

// 2. Required 타입 => 모두 필수
type bbb = Required<IProfile>;

// 3. Pick타입 => 일부만 고르기
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit타입 => 일부만 빼기
type ddd = Omit<IProfile, "school">;

// 5. Record타입 => IProfile을 value에 넣어 객체로 만들기
type eee = "철수" | "영희" | "훈이"; //Union타입
let child: eee = "철수"; //철수 , 영희 , 훈이만 가능
let child2: string = "사과"; //철수 영희 훈이 사과 바나나 전부 가능

type fff = Record<eee, IProfile>;

// 6. keyof => 키값을 Union타입으로 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface 차이 = interfce: 선언병합O / type: 선언병합X
export interface IProfile {
  candy: number; //선언병합으로 추가됨
}

// 8. 적용 및 응용
let profile: Partial<IProfile> = {
  candy: 10,
};

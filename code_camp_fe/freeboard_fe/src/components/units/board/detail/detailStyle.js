import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperDetail = styled.div`
  border: 1px solid gray;
  width: 1200px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const DivLine = styled.div`
  margin-top: 20px;
  border: 1px solid #e8e8e8;
`;

export const Writer = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const WriteDate = styled.div`
  color: darkgray;
  font-size: 20px;
`;

export const Detail = styled.div`
  margin-top: 100px;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const Contents = styled.div`
  margin-top: 30px;
  font-size: 25px;
`;

export const Buttons = styled.div`
  width: 1200px;
  padding: 0px 20%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const GoList = styled.button`
  width: 200px;
  background-color: white;
  font-size: 30px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const GoMod = styled.button`
  width: 200px;
  background-color: white;
  font-size: 30px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const GoDelete = styled.button`
  width: 200px;
  background-color: white;
  font-size: 30px;
  padding: 10px 20px;
  cursor: pointer;
`;

import styled from "@emotion/styled";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  /* text-align: center; */
  font-size: 36px;
  font-weight: 700;
`;

export const UserInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const TextInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  font-size: 16px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 300px;
  resize: none;
  overflow: auto;
  font-size: 16px;
`;

export const ZipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ZipCode = styled.input`
  height: 40px;
  font-size: 16px;
`;

export const SearchBtn = styled.button`
  background-color: black;
  color: white;
  height: 40px;
`;

export const PhotoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  margin-right: 10px;
`;

export const OptionWrapper = styled.div`
  margin-top: 10px;
`;

export const RadioInput = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

export const NullError = styled.div`
  color: red;
  font-size: 16px;
`;

export const OptionLabel = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const SubmitBtn = styled.button`
  margin-top: 40px;
  font-size: 20px;
  border: none;
  padding: 10px;
  font-weight: 700;

  background-color: ${(props) =>
    props.isActive === true ? "#ffcc00" : "gray"};
`;

export const NullErrorM = styled.div`
  color: red;
`;

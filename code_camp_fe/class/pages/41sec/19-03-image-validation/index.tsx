import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { CheckValidationFile } from "../../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUPload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type+"file" multiple /> 일 때, 여러개 드래그 가능
    console.log(file);

    const isValid = CheckValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onCliCkImage = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onCliCkImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
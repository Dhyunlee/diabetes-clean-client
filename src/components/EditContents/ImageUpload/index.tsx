import { Dispatch, memo, useRef, useState } from "react";

import {
  ImgUploadBox,
  DrapFileArea,
  ImageUploadForm,
  ThumbnailImg,
} from "./styles";

interface IProps {
  setImgUrl: Dispatch<React.SetStateAction<string>>;
  setImgFileName: Dispatch<React.SetStateAction<string>>;
}

const ImageUpload = ({ setImgUrl, setImgFileName }: IProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>("");

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    if (file) {
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("loadend", (e: ProgressEvent<FileReader>) => {
        const { result } = e.currentTarget as FileReader;
        console.log({ result });
        setThumbnail(result as string);
        // TODO: 이미지 업로드 로직(함수) 불러오기
      });
    }
  };
  const onClickFileInput = () => {
    inputFileRef?.current?.click();
  };

  const onCancelImageUpload = () => {
    if (thumbnail) {
      setThumbnail("");
      setImgUrl("");
      setImgFileName("");
      //TODO: 이미지 업로드:삭제 부분 로직 작성하기
    }
  };

  //TODO: 이미지 업로드: 생성 부분 로직 작성하기
  return (
    <>
      <button
        onClick={onCancelImageUpload}
        type="button"
        style={{ position: "absolute", right: 10, top: 20 }}
      >
        이미지 취소
      </button>
      <ImageUploadForm>
        <ImgUploadBox>
          <DrapFileArea onClick={onClickFileInput}>
            {thumbnail ? (
              <ThumbnailImg>
                <img src={thumbnail} alt="" />
              </ThumbnailImg>
            ) : (
              <>
                <div className="icon-wrap">
                  <img
                    src="https://img.icons8.com/ios/512/image--v1.png"
                    alt="file-icon"
                    className="img"
                  />
                </div>
                <span className="upload-msg">
                  클릭해서 직접 업로드하거나
                  <br />
                  이미지를 끌어다 놓으세요
                </span>
              </>
            )}
            <input
              name="imgUpload"
              type="file"
              accept="image/gif, image/jpeg, image/png"
              onChange={onChangeImg}
              ref={inputFileRef}
            />
          </DrapFileArea>
        </ImgUploadBox>
      </ImageUploadForm>
    </>
  );
};

export default memo(ImageUpload);

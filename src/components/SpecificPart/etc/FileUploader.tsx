import React, { useRef, ChangeEvent } from 'react';
import * as S from "./style/FileUploader";

const FileUploader: React.FC = () => {
  const imgContainer = useRef<HTMLDivElement>(null);

  const imageLoader = (e: ProgressEvent<FileReader>) => {
    const target = e.target as FileReader;
    const image = new Image();
    image.src = target.result as string;
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.borderRadius = "20px";

    image.onload = () => {
      if (imgContainer.current) {
        imgContainer.current.innerHTML = '';
        imgContainer.current.appendChild(image);
      }
    };
  };

  const imgFileSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          imageLoader(e);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Container>
      <S.Inner>
        <S.ImgPreview ref={imgContainer} />

        <S.FileInput onChange={imgFileSelected} type="file" id="input-file" accept="image/*" />
        <S.Label htmlFor="input-file">파일을 선택하세요</S.Label>
      </S.Inner>
    </S.Container>
  );
};

export default FileUploader;

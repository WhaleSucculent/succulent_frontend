import React, { useRef, useState, DragEvent } from 'react';

import LogoInteractInfo from './LogoInteractInfo';
import SelectedImageComponent from './CropAndSave';
import SavedImage from './SavedImage';
import UploadFailed from './UploadFailed';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Slider } from '@mui/material';

interface WrapperProps {
  isErrored: boolean;
  isSaved: boolean;
  image: File | null;
}

const Wrapper = styled.div<WrapperProps>`
  margin: 50px auto;
  padding: 32px;
  background: #f2f5f8;
  width: 553px;
  height: 177px;
  ${({ isSaved, image, isErrored }) => `
    ${
      !image || isSaved
        ? css`
            border: 2px dashed #c7cdd3;
          `
        : ''
    }
    ${
      (!image && !isErrored) || isSaved
        ? css`
            cursor: pointer;
          `
        : ''
    }
  `}
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    display: none;
  }

  .content-wrapper {
    width: 100%;
    display: flex;
  }
`;

const Home = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isErrored, setError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [zoomLevel, setZoomlevel] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickContainer = () => {
    inputRef.current?.click();
  };

  const isFileValid = (file?: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (!file) return false;

    return validTypes.includes(file.type);
  };

  const updateStatesOnChange = (file?: File) => {
    if (file && isFileValid(file)) {
      setImageFile(file);
      setIsSaved(false);
      setZoomlevel(1);
    }

    setError(!isFileValid(file));
  };

  const fileDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    updateStatesOnChange(file);
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const selectedFile = (event.target as HTMLInputElement).files![0];

    updateStatesOnChange(selectedFile);
  };

  const handleSliderChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setZoomlevel(value as number);
  };

  const reset = () => {
    setImageFile(null);
    setZoomlevel(1);
    setError(false);
    setIsSaved(false);
  };

  const dragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderChild = () => {
    if (isErrored) return <UploadFailed reset={reset} />;

    if (!isErrored && !imageFile)
      return (
        <LogoInteractInfo inputRef={inputRef} onChangeInput={onChangeInput} />
      );
    if (!isErrored && imageFile && !isSaved)
      return (
        <SelectedImageComponent
          handleSliderChange={handleSliderChange}
          imageFile={imageFile}
          isErrored={isErrored}
          reset={reset}
          zoomLevel={zoomLevel}
          setIsSaved={setIsSaved}
        />
      );
    return (
      <SavedImage
        imageFile={imageFile}
        zoomLevel={zoomLevel}
        inputRef={inputRef}
        onChangeInput={onChangeInput}
      />
    );
  };

  return (
    <Wrapper
      image={imageFile}
      isErrored={isErrored}
      isSaved={isSaved}
      onClick={onClickContainer}
      onDrop={fileDrop}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      {renderChild()}
    </Wrapper>
  );
};

export default Home;

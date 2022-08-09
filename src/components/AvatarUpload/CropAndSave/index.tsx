import React, { useEffect, useRef } from 'react';


import Image from '../../Image';
import Button from '../../Button';
import { Slider } from '@mui/material';
import styled from '@emotion/styled';

interface Props {
  handleSliderChange:
    | ((event: Event, value: number | number[], activeThumb: number) => void)
    | undefined;
  isErrored: boolean;
  zoomLevel: number;
  imageFile: File | null;
  setIsSaved: (value: boolean) => void;
  reset: () => void;
}

const CropArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CropTitle = styled.span`
  color: #677489;
`;

const SaveButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 32px;
`;

const XIconArea = styled.div`
  margin-left: 60px;
  display: flex;
  flex-shrink: 0;

  div {
    height: 15px;
  }

  img {
    cursor: pointer;
  }
`;

const XIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const SelectedImageComponent = ({
  zoomLevel,
  isErrored,
  imageFile,
  setIsSaved,
  handleSliderChange,
  reset,
}: Props) => {
  const imgRef = useRef<HTMLDivElement>(null);

  const setZoom = (zoom: number) => {
    imgRef.current?.style.setProperty(
      'transform',
      `scale(${zoom > 1 ? 1 + zoom / 10 : 1})`
    );
  };

  useEffect(() => {
    setZoom(zoomLevel);
  }, [zoomLevel]);

  const handleSaveButtonClick = () => setIsSaved(true);

  return (
    <div className='content-wrapper'>
      <Image error={isErrored} file={imageFile} imgRef={imgRef} />
      <CropArea>
        <CropTitle>Crop</CropTitle>
        <Slider
          value={zoomLevel}
          onChange={handleSliderChange}
          min={1}
          max={10}
          aria-label='Slider'
        />
        <SaveButtonWrapper>
          <Button onClick={handleSaveButtonClick}>Save</Button>
        </SaveButtonWrapper>
      </CropArea>
      <XIconArea>
        <XIcon aria-label='XIcon' src='/close.svg' onClick={reset} />
      </XIconArea>
    </div>
  );
};

export default SelectedImageComponent;

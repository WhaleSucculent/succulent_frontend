import styled from '@emotion/styled';
import React from 'react';

import Image from '../../Image';

const UploadFailedTitle = styled.span`
  font-weight: 400;
  color: #c64d32;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
`;

const TryAgain = styled.a`
  color: #3d485f;
  margin-top: 10px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;

const XIconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

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

interface Props {
  reset: () => void;
}

const UploadFailed = ({ reset }: Props) => (
  <div className='content-wrapper'>
    <Image error />
    <TextWrapper>
      <UploadFailedTitle>Sorry, the upload failed.</UploadFailedTitle>
      <TryAgain aria-label='Try Again' onClick={reset}>
        Try again
      </TryAgain>
    </TextWrapper>
    <XIconWrapper>
      <XIcon src='/close.svg' onClick={reset} aria-label='XIcon' />
    </XIconWrapper>
  </div>
);

export default UploadFailed;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes, RefObject, useEffect, useState } from 'react';

interface StyleProps {
  url?: string;
  error?: boolean;
}

const Wrapper = styled.div`
  width: 113px;
  height: 113px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
`;

const Image = styled.div<StyleProps>`
  background-color: #c3cbd5;
  width: 113px;
  height: 113px;
  border-radius: 50%;
  ${({ url }) =>
    url
      ? css`
          background: ${`url(${url})`};
        `
      : ''}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningIcon = styled.img`
  width: 20px;
  height: 20px;
`;

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  file?: File | null;
  imgRef?: RefObject<HTMLDivElement>;
}

const ImageComponent = ({ error, file, imgRef, ...props }: ImageProps) => {
  const [memoizedUrl, setmemoizedUrl] = useState<string>('');

  useEffect(() => {
    if (file) {
      setmemoizedUrl(URL.createObjectURL(file));
    }
  }, []);

  return (
    <Wrapper {...props}>
      <Image error={error} url={memoizedUrl} ref={imgRef} aria-label='Image'>
        {error && <WarningIcon src='/warn.svg' />}
      </Image>
    </Wrapper>
  );
};

export default ImageComponent;

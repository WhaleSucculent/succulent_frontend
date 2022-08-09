import styled from '@emotion/styled';
import React, { RefObject } from 'react';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

interface Props {
  inputRef?: RefObject<HTMLInputElement>;
  onChangeInput: (ev: React.FormEvent<HTMLInputElement>) => void;
}

const LogoInteractInfo = ({ inputRef, onChangeInput }: Props) => (
  <Wrapper>
    <b>Organization Logo</b>
    <span aria-label='Insert Image'>
      Drop the image here or click to browse.
    </span>
    <input
      ref={inputRef}
      type='file'
      accept='image/png, image/jpeg, image/jpg'
      onChange={onChangeInput}
      data-testid='input-file'
    />
  </Wrapper>
);

export default LogoInteractInfo;

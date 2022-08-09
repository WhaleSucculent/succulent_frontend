import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const testImageUrl =
  'https://media-exp1.licdn.com/dms/image/C4D0BAQGA0xd2mW8KQQ/company-logo_200_200/0/1599431204131?e=2159024400&v=beta&t=aO9AF0n20MNRT8ziQcNI8OrFFCvT0qHfPq8l-f1pW4g';

export const WithURL: ComponentStory<typeof Image> = (
  args,
  { loaded: { file } }
) => <Image {...args} file={file} />;
WithURL.loaders = [
  async () => ({
    file: await (async () => {
      const response = await fetch(testImageUrl);

      const blob = await response.blob();

      return new File([blob], 'image.jpg', {
        type: blob.type,
      });
    })(),
  }),
];

export const WithError: ComponentStory<typeof Image> = () => (
  <Image error={true} />
);

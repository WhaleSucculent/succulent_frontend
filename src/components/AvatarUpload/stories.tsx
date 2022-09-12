import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarUpload from '.';

export default {
  title: 'AvatarUpload',
  component: AvatarUpload,
} as ComponentMeta<typeof AvatarUpload>;

export const Default: ComponentStory<typeof AvatarUpload> = () => (
  <AvatarUpload />
);

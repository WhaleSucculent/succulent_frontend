import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import AvatarUpload from '.';

const mockSliderTestId = 'slider-input';
//eslint-disable-next-line react/display-name,@typescript-eslint/no-explicit-any
jest.mock('@material-ui/core/Slider', () => (props: any) => {
  const { id, name, min, max, onChange } = props;
  return (
    <input
      data-testid={mockSliderTestId}
      type='range'
      id={id}
      name={name}
      min={min}
      max={max}
      onChange={event =>
        onChange && onChange(event, parseInt(event.target.value))
      }
    />
  );
});

const defaultFile = new File(['file'], 'file.png', { type: 'image/png' });

const expectRenderInsertImageComponent = () => {
  const insertImageText = screen.getByLabelText('Insert Image');
  expect(insertImageText).toBeInTheDocument();
};

const expectRenderCropAndSaveImageComponent = () => {
  const slider = screen.getByTestId(mockSliderTestId);
  expect(slider).toBeInTheDocument();

  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeInTheDocument();
};

const expectRenderUploadFailedComponent = () => {
  const errorMessage = screen.getByText('Sorry, the upload failed.');
  expect(errorMessage).toBeInTheDocument();
};

const changeFileInput = (file = defaultFile) => {
  const input = screen.getByTestId('input-file');
  fireEvent.change(input, { target: { files: [file] } });
  fireEvent.input(input);
};

describe('<AvatarUpload />', () => {
  beforeEach(() => {
    window.URL.createObjectURL = jest.fn();

    render(<AvatarUpload />);
  });

  describe('Behaviour', () => {
    it('renders the component', () => {
      const { container } = render(<AvatarUpload />);

      expect(container).toBeInTheDocument();
    });

    it('changes the component when image file is uploaded', () => {
      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();
    });

    it('shows error component when uploaded file is incorrect', () => {
      const incorrectFile = new File(['file'], 'file.mp3', {
        type: 'image/mp3',
      });

      changeFileInput(incorrectFile);

      expectRenderUploadFailedComponent();
    });

    it('allows user to try upload again after uploading incorrect file and clicking on X icon', () => {
      const incorrectFile = new File(['file'], 'file.mp3', {
        type: 'image/mp3',
      });

      changeFileInput(incorrectFile);

      expectRenderUploadFailedComponent();

      const XIcon = screen.getByLabelText('XIcon');
      fireEvent.click(XIcon);

      const insertImageText2 = screen.getByLabelText('Insert Image');
      expect(insertImageText2).toBeInTheDocument();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();
    });

    it('allows user to try upload again after uploading incorrect file and clicking on Try Again', () => {
      const incorrectFile = new File(['file'], 'file.mp3', {
        type: 'image/mp3',
      });

      changeFileInput(incorrectFile);

      expectRenderUploadFailedComponent();

      const tryAgain = screen.getByLabelText('Try Again');
      fireEvent.click(tryAgain);

      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();
    });

    it('allows user to go back to initial state after uploading image', () => {
      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const XIcon = screen.getByLabelText('XIcon');
      fireEvent.click(XIcon);

      const insertImageText2 = screen.getByLabelText('Insert Image');
      expect(insertImageText2).toBeInTheDocument();
    });

    it('zooms Image when slider is changed', () => {
      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const image = screen.getByLabelText('Image');

      expect(image.style.transform).toBe('scale(1)');

      const slider = screen.getByTestId(mockSliderTestId);

      fireEvent.change(slider, {
        target: { value: 5 },
      });

      expect(image.style.transform).toBe('scale(1.5)');
    });

    it('displays zoomed image after saving', () => {
      expectRenderInsertImageComponent();

      changeFileInput();

      expectRenderCropAndSaveImageComponent();

      const image = screen.getByLabelText('Image');

      expect(image.style.transform).toBe('scale(1)');

      const slider = screen.getByTestId(mockSliderTestId);

      fireEvent.change(slider, {
        target: { value: 5 },
      });

      expect(image.style.transform).toBe('scale(1.5)');

      const saveButton = screen.getByText('Save');

      fireEvent.click(saveButton);

      expect(image.style.transform).toBe('scale(1.5)');

      const insertImageText = screen.getByLabelText('Insert Image');
      expect(insertImageText).toBeInTheDocument();

      const image2 = screen.getByLabelText('Image');

      expect(image2.style.transform).toBe('scale(1.5)');
    });
  });
});

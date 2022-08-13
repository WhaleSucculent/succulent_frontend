import { Box, Button, CircularProgress } from '@mui/material';
import React, { createContext, useContext, useEffect, useState } from 'react';
import uploadFileToBlob, { isStorageConfigured } from './azureBlob';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import useUploadImage from 'util/useUploadImage';
import { FileUploaderContext } from 'pages/AdminProductPage/AddProduct';

const storageConfigured = isStorageConfigured();


const FileUploader = () => {

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);
  const [fileName, setFileName] = useState(null);

  const { url, uploading, blobList } = useUploadImage(fileSelected)

  const [imageLink, setImageLink] = useContext(FileUploaderContext)


  const onFileSelect = async (event) => {
    if (!event.target.files) {
      return;
    }

    // set selected file name
    const file = event.target.files[0];
    const { name } = file;
    setFileName(name);
    setFileSelected(file);

  };

  useEffect(() => {
    setImageLink(url)

  }, [url, setImageLink])



  // display form
  const DisplayForm = () => (
    <div>
      <Button variant="contained" component="label" startIcon={<CloudUploadIcon />} fullWidth>
        Upload Image
        <input type="file" onChange={onFileSelect} hidden />
      </Button>
      <Box>{fileName}</Box>
    </div>
  );

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>

    </div>
  );

  return (
    <div>
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <CircularProgress />}
      <hr />
      {storageConfigured && url && <img src={url} alt={fileName} style={{ maxWidth: "100%", width: "auto" }}></img>}
      {!storageConfigured && <div>Storage is not configured.</div>}
    </div>
  );
};

export default FileUploader;



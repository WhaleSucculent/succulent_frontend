import uploadFileToBlob from 'components/azureBlob'
import { useEffect, useState } from 'react'

const useUploadImage = (file) => {
  const [uploading, setUploading] = useState(false)
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)
  const [blobList, setBlobList] = useState([]);


  useEffect(() => {
    const uploadFile = async () => {
      // prepare UI
      setUploading(true);

      // *** UPLOAD TO AZURE STORAGE ***
      const reutrnUrl = await uploadFileToBlob(file);

      // prepare UI for results
      setUrl(reutrnUrl)

      // reset state/form      
      setUploading(false);
    }

    uploadFile().then(
      () => {
        console.log('uploadFile completed');
        console.log(blobList);
      }
    )
  }, [file])


  return {uploading, url, error, blobList}
}

export default useUploadImage
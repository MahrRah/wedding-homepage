// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient } from '@azure/storage-blob';

const containerName = 'images';
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME;

// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}

const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls = [];


  for await (const blob of containerClient.listBlobsFlat()) {

    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}

const createBlobInContainer = async (containerClient, file) => {


  const fileName = +Date.now()+"-"+file.name
  const blobClient = containerClient.getBlockBlobClient(fileName);


  const options = { blobHTTPHeaders: { blobContentType: file.type } };


  await blobClient.uploadData(file, options);
}

const uploadFileToBlob = async (file) => {
  if (!file) return [];


  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);

  // upload file
  await createBlobInContainer(containerClient, file);
};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;

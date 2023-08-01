import axios from 'axios';
import React, { useState } from 'react';
import ApiList from '../Components/ApiLIst';
import { SHA256, enc } from 'crypto-js';

const UploadDocuments = () => {
  const [tags, setTags] = useState('');
  const [docPath, setDocPath] = useState(null);
  const [message, setMessage] = useState('');

  const { api_uploadDocument } = ApiList();

  const submitForm = async () => {
    setMessage('');
    console.log('Hello');
    const reader = new FileReader();

    reader.onloadend = async () => {
      const fileData = new Blob([reader.result]);

      let key = '123';
      // Assuming the SHA256 function is available, it should be imported or defined properly.
      const fileDigest = SHA256(key).toString(enc.Hex);

      const headers = {
        'Content-Type': 'multipart/form-data',
        'x-digest': fileDigest,
        'folderPathId': 1,
        'token': 'QFr60CvqrLXUZDw1oMl3Pp8t4txGYmltFiJ0nLLzbP8WZL1qDD'
      };

      console.log({ fileDigest: fileDigest, docPath: docPath, fileData: fileData });

      const formData = new FormData();
      formData.append('file', docPath);
      formData.append('tags', tags);

      axios
        .post(api_uploadDocument, formData, { headers })
        .then((res) => {
          if (res.data.status) {
            setMessage('File Uploaded Successfully');
            console.log('Success', res.data.message);
          } else {
            setMessage('Error: ' + res.data.message); // Concatenate the error message properly.
            console.log('Error', res.data.message);
          }
        })
        .catch((error) => {
          setMessage('Error: file upload');
          console.log('Error:', error.message); // Print the specific error message.
        });
    };

    // Assuming `docPath` is a file input element or the file to be uploaded.
    if (docPath) {
      reader.readAsArrayBuffer(docPath);
    }
  };

  return (
    <>
      <div>Upload Documents</div>

      <div className="py-20 bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 border-b-2">
                <span className="text-lg font-bold text-gray-600">Add documents</span>
              </div>

              <div className="p-3">
                <div className="mb-2">
                  <span className="text-sm">Tags</span>
                  <input
                    onChange={(e) => setTags(e.target.value)}
                    type="text"
                    className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"
                  />
                </div>

                <div className="mb-2">
                  <span>Attachments</span>
                  <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div className="absolute">
                      <div className="flex flex-col items-center ">
                        <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                        <span className="block text-gray-400 font-normal">Attach your files here</span>
                        <span className="block text-gray-400 font-normal">or</span>
                        <span className="block text-blue-400 font-normal">Browse files</span>
                      </div>
                    </div>
                    <input onChange={(e) => setDocPath(e.target.files[0])} type="file" className="h-full w-full opacity-0" name="" />
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Accepted file type: .doc only</span>
                    <span className="flex items-center ">
                      <i className="fa fa-lock mr-1"></i> secure
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center pb-3">
                  <p>{message && message}</p>
                  <button onClick={submitForm} type="button" className="h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;

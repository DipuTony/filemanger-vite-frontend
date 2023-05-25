import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ApiList from '../Components/ApiLIst'
import { SHA256, MD5, enc } from 'crypto-js';

const UploadDocuments = () => {
  const [tags, setTags] = useState()
  const [docPath, setDocPath] = useState()
  const [message, setMessage] = useState(false)



  const { api_uploadDocument } = ApiList();


  const submitForm = async () => {
    setMessage("")
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const fileData = new Blob([reader.result]);

        let key = "123"
        const fileDigest = SHA256(key).toString(enc.Hex);

        console.log({ "fileDigest": fileDigest, "docPath": docPath, "fileData": fileData })


        const formData = new FormData();
        formData.append('file', docPath);
        formData.append('tags', tags);

        const headers = {
          'x-digest': fileDigest
        };

        await axios.post(api_uploadDocument, formData, { headers });

        // File upload successful
        setMessage("Success")
      };
      reader.readAsArrayBuffer(docPath);
    } catch (error) {
      setMessage("catch edxption", error)
    }




    return
    console.log("Form submit start..", formData)
    axios.post(api_uploadDocument, formData)
      .then((res) => {
        if (res.data.status) {
          setMessage("Success")
          console.log("documetn saved..", res)
        } else {
          setMessage("error")
        }
      })
      .catch((err) => {
        setMessage("exception")
        console.log("error data saving", err)
      })

  }

  return (
    <>
      <div>Upload Documents</div>

      <div className="py-20 h-screen bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 border-b-2">
                <span className="text-lg font-bold text-gray-600">Add documents</span>
              </div>

              <div className="p-3">
                <div className="mb-2">
                  <span className="text-sm">Tags</span>
                  <input onChange={(e) => setTags(e.target.value)} type="text" className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300" />
                </div>

                <div className="mb-2">
                  <span>Attachments</span>
                  <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div className="absolute">
                      <div className="flex flex-col items-center ">
                        <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                        <span className="block text-gray-400 font-normal">Attach you files here</span>
                        <span className="block text-gray-400 font-normal">or</span>

                        <span className="block text-blue-400 font-normal">Browse files</span>

                      </div>
                    </div> <input
                      onChange={(e) => setDocPath(e.target.files[0])}
                      type="file" className="h-full w-full opacity-0" name="" />
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Accepted file type:.doc only</span>
                    <span className="flex items-center "><i className="fa fa-lock mr-1"></i> secure</span>
                  </div>
                </div>

                <div className="mt-3 text-center pb-3">
                  <p>{message && message}</p>
                  <button onClick={submitForm} type='button' className="h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Create</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default UploadDocuments
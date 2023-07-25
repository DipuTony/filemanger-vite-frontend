import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags);

    try {
      await axios.post('http://localhost:8001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={tags} onChange={handleTagsChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Test;

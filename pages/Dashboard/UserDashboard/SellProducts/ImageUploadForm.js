import { useState } from 'react';

const ImageUploadForm = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploading, setUploading] = useState(false);

  const imgHostingToken = "d73659ce7a4d4dee84b0a167ca4d6f40";
  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const uploadImages = async () => {
    setUploading(true);
    const uploadedImageUrls = [];

    const promises = selectedImages.map(async (file) => {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(imgHostingURL, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          uploadedImageUrls.push(result.data.url);
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    });

    await Promise.all(promises);
    setImageUrls(uploadedImageUrls);
    setUploading(false);

    // Log the uploaded image URLs array to the console
    console.log('Uploaded Image URLs:', uploadedImageUrls);
  };

  return (
    <div>
      <form className='flex  items-center gap-10'>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className='border-2 py-3 pl-5 pr-10'
        />
        <button type="button" onClick={uploadImages} disabled={uploading} className='bg-blue-700 text-white px-3 py-2 text-end '>
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
      </form>
      <div className="image-preview flex gap-6 my-5 ">
        {selectedImages.map((image, index) => (
          <div key={index} className="image-item w-10 h-10 ">
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected Image ${index}`}
            />
          </div>
        ))}
      </div>
      {/* {imageUrls.length > 0 && (
        <div className="uploaded-images">
          <h2>Uploaded Images:</h2>
          <ul>
            {imageUrls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Image {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default ImageUploadForm;

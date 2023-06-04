import React, { useState } from 'react';

const Profile = ({ email }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {email}</p>
      <div>
        <h4>Profile Image</h4>
        {selectedImage ? (
          <img src={selectedImage} alt="Profile" style={{ width: '200px', height: '200px' }} />
        ) : (
          <p>No image selected</p>
        )}
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
    </div>
  );
};

export default Profile;
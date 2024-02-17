import React from "react";
import { IKContext, IKUpload } from 'imagekitio-react';
import { authenticator, publicKey, urlEndpoint } from "./services/imageAuth";

const FormFields = ({item, onChange, onImageSuccess, onImageError, onImageProgress}) => {
  return (
    <>
      <label for="image" className="img-upload-label">
        Upload Image
      </label>
      <div className="file-input-container">
      <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >
        <IKUpload
          fileName="image.png"
          onError={onImageError}
          onSuccess={onImageSuccess}
          onUploadProgress={onImageProgress}
        />
      </IKContext>
      </div>

      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={item.name || ""}
        onChange={onChange}
        required
      />

      <label for="price">Price (₹)</label>
      <input
        type="number"
        id="price"
        name="price"
        value={item.price || ""}
        min="0"
        step="0.01"
        onChange={onChange}
        required
      />

      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={item.description || ""}
        onChange={onChange}
        required
      ></textarea>
    </>
  );
};

export default FormFields;

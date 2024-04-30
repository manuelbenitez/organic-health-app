import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./ImageInput.module.scss";
const ImageInput = ({ selectedImage, setSelectedImage }: IImageInputProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the file size is greater than 750kb
      if (file.size > 750 * 1024) {
        toast.error("Please select an image smaller than 750kb.");
        return;
      }

      setSelectedImage(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

interface IImageInputProps {
  selectedImage: File | null;
  setSelectedImage: (file: File) => void;
}

export default ImageInput;
